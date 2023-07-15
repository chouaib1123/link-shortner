<?php

use App\Http\Controllers\UrlController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('add/url' , [UrlController::class,'store']);
Route::get('user/urls/{user_id}' , [UrlController::class,'index']);
Route::get('/user/{user_id}/total-visits', [UrlController::class,'cal_visits']);
Route::get('/user/{user_id}/most-visited-url', [UrlController::class,'most_visits_urls']);




