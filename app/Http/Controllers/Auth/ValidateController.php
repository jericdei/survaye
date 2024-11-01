<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ValidateRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\ValidationException;

class ValidateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ValidateRequest $request)
    {
        $key = "register-{$request->email}";
        $code = Cache::get($key);

        if (!$code || $code !== $request->integer('code')) {
            throw ValidationException::withMessages([
                'code' => 'The confirmation code is invalid.',
            ]);
        }

        Cache::forget($key);

        $user = User::updateOrCreate([
            'email' => $request->email,
        ], [
            'email_verified_at' => now(),
        ]);

        Auth::login($user);

        return to_route('dashboard.index');
    }
}
