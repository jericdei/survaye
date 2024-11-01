<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ValidateController;
use App\Http\Controllers\User\UpdateProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/auth/login');

Route::prefix('auth')->as('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::inertia('login', 'auth/login')->name('login');
        Route::post('login', LoginController::class)->name('login.store');
        Route::inertia('validate', 'auth/validate')->name('validate');
        Route::post('validate', ValidateController::class)->name('validate.store');
    });

    Route::post('logout', function () {
        Auth::logout();

        return to_route('auth.login');
    })->middleware('auth')->name('logout');
});

Route::middleware('auth')->group(function () {
    Route::prefix('dashboard')->as('dashboard.')->group(function () {
        Route::inertia('/', 'dashboard/index')->name('index');
    });

    Route::prefix('surveys')->as('surveys.')->group(function () {
        Route::inertia('/', 'surveys/index')->name('index');
    });

    Route::prefix('profile')->as('profile.')->group(function () {
        Route::inertia('edit', 'profile/edit')->name('edit');
        Route::post('update', UpdateProfileController::class)->name('update');
    });
});
