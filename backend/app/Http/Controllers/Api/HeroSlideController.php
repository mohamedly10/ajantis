<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HeroSlide;
use Illuminate\Http\Request;

class HeroSlideController extends Controller
{
    public function index()
    {
        $slides = HeroSlide::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->orderBy('id', 'desc')
            ->get();

        // Transform the images to include full URLs
        $slides->transform(function ($slide) {
            $slide->image_url = url('storage/' . $slide->image);
            return $slide;
        });

        return response()->json($slides);
    }
}
