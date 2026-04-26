<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WebsiteContent;

class WebsiteContentController extends Controller
{
    public function index()
    {
        $contents = WebsiteContent::pluck('value', 'key');
        return response()->json($contents);
    }
}
