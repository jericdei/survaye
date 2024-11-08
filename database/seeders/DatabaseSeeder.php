<?php

namespace Database\Seeders;

use App\Models\Question;
use App\Models\Survey;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = User::factory(25)->create();
        $questions = Question::factory(50)->create();

        Survey::factory(25)->recycle($users)->state(fn() => [
            'template' => collect(range(1, fake()->numberBetween(2, 5)))
                ->map(
                    fn() => $questions->random(fake()->numberBetween(3, 6))
                        ->pluck('id')
                        ->toArray()
                )
                ->toArray()
        ])->create();
    }
}
