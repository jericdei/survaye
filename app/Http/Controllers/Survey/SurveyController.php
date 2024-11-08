<?php

namespace App\Http\Controllers\Survey;

use App\Http\Controllers\Controller;
use App\Models\Survey;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class SurveyController extends Controller
{
    public function index()
    {
        $surveys = Auth::user()->surveys()->get(['id', 'title', 'created_at', 'updated_at']);

        return inertia('surveys/index', [
            'surveys' => $surveys,
        ]);
    }

    public function show(Survey $survey)
    {
        Gate::allowIf(fn(User $user) => $user->id === $survey->user_id);

        return inertia('surveys/show', [
            'survey' => $survey->append('questions')->setHidden(['template']),
        ]);
    }
}
