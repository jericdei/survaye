<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ValidateController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/auth/login');

Route::prefix('auth')->as('auth.')->group(function () {
    Route::inertia('login', 'auth/login')->name('login');
    Route::inertia('register', 'auth/register')->name('register');
    Route::post('register', RegisterController::class)->name('register.store');
    Route::inertia('validate', 'auth/validate')->name('validate');
    Route::post('validate', ValidateController::class)->name('validate.store');
    Route::post('logout', function () {
        Auth::logout();

        return to_route('auth.login');
    })->middleware('auth')->name('logout');
});

Route::middleware('auth')->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});
