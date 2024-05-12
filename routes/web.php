<?php

use Illuminate\Support\Facades\Route;

//This is a default route
// Route::get('/', function () {
//     return view('welcome');
// });

// This is a new route to fix 'Unable to directly navigate to webpage using URL
Route::get('{reactRoutes}', function () {
    return view('welcome');
})->where('reactRoutes', '^((?!api).)*$'); // Don't show api query
