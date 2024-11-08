<?php

namespace Database\Factories;

use App\Enums\QuestionType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        /** @var QuestionType */
        $type = $this->faker->randomElement(QuestionType::cases());
        $options = null;

        if ($type->hasOptions()) {
            $count = $this->faker->numberBetween(2, 5);
            $options = collect(range(1, $count))->map(fn() => $this->faker->word())->toArray();
        }

        return [
            'title' => substr_replace($this->faker->sentence(), '?', -1),
            'type' => $type,
            'options' => $options,
            'with_others' => $type->hasOptions() && $this->faker->boolean(),
        ];
    }
}
