<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Mail\RegisterEmailVerification;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Send a new registration confirmation email to the user.
     */
    public function __invoke(LoginRequest $request)
    {
        $code = random_int(100000, 999999);
        $key = "register-{$request->email}";

        if (Cache::has($key)) {
            throw ValidationException::withMessages([
                'email' => 'A new confirmation code has already been sent to your email address.',
            ]);
        }

        // Store the code in the cache for 5 minutes
        Cache::remember($key, now()->addMinutes(10), fn() => $code);

        // Send the email
        Mail::to($request->email)->send(new RegisterEmailVerification($code));

        return to_route('auth.validate', ['email' => $request->email]);
    }
}
