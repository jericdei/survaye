<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdateProfileRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

class UpdateProfileController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateProfileRequest $request)
    {
        /** @var User|null */
        $user = Auth::user();

        if (!$user) {
            throw new Exception('User not found');
        }

        $user->update($request->validated());

        return to_route('dashboard.index');
    }
}
