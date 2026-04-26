<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Visitor;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    public function store(Request $request)
    {
        $visitor = Visitor::create([
            'ip_address' => $request->ip(),
            'visited_at' => now(),
        ]);

        return response()->json(['message' => 'Visit tracked', 'data' => $visitor], 201);
    }
}
