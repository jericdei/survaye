<?php

use App\Models\Survey;

$survey = Survey::query()->first();

dd($survey->getQuestions()->toArray());
