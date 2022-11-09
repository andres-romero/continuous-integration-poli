<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CinemaController extends Controller
{
    public function getCinema()
    {
        return response()->json(['cinema' => 'api response ok']);
    }
}
