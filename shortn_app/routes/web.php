<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UrlController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware('auth')->group(function(){

Route::get('/', function () {
    return view('welcome');
});
Route::post('user/logout', [UserController::class,'logout'])->name('logout');

});
Route::get('user/register', [UserController::class,'registerform'])->name('register');
Route::post('user/register', [UserController::class,'store'])->name('register');

Route::get('user/login', [UserController::class,'loginform'])->name('login');
Route::post('user/login', [UserController::class,'auth'])->name('login');

Route::get('visit/{s_url}' , [UrlController::class,'show']);


