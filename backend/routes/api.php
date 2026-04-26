<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\WebsiteContentController;
use App\Http\Controllers\Api\VisitorController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/content', [WebsiteContentController::class, 'index']);
Route::get('/hero-slides', [App\Http\Controllers\Api\HeroSlideController::class, 'index']);
Route::post('/visit', [VisitorController::class, 'store']);
