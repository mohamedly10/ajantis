<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'customer_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:500',
            'products' => 'required|array',
            'products.*.id' => 'required|exists:products,id',
            'products.*.quantity' => 'required|integer|min:1',
        ]);

        try {
            DB::beginTransaction();

            $totalPrice = 0;

            $order = Order::create([
                'customer_name' => $validatedData['customer_name'],
                'email' => $validatedData['email'],
                'phone' => $validatedData['phone'] ?? null,
                'address' => $validatedData['address'] ?? null,
                'status' => 'pending',
                'total_price' => 0,
            ]);

            foreach ($validatedData['products'] as $item) {
                $product = Product::findOrFail($item['id']);
                $quantity = $item['quantity'];
                $itemTotal = $product->price * $quantity;

                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => $quantity,
                    'price' => $product->price,
                ]);

                $totalPrice += $itemTotal;
                
                if ($product->stock >= $quantity) {
                    $product->decrement('stock', $quantity);
                }
            }

            $order->update(['total_price' => $totalPrice]);

            DB::commit();

            return response()->json([
                'message' => 'Order created successfully',
                'order' => $order->load('orderItems.product'),
            ], 201);
            
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Order processing failed', 'error' => $e->getMessage()], 500);
        }
    }
}
