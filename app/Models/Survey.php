<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Survey extends Model
{
    /** @use HasFactory<\Database\Factories\SurveyFactory> */
    use HasFactory;

    protected $casts = [
        'template' => AsCollection::class,
    ];

    public array $interfaces = [
        'questions' => [
            'type' => "Question[][]",
        ]
    ];

    public function questions(): Attribute
    {
        return Attribute::make(
            get: function (): Collection {
                /** @var Collection<int, int> */
                $ids = $this->template->flatten()->unique()->values();

                /** @var Collection<int, Question> */
                $questions = Question::query()->whereIn('id', $ids)->get();

                /** @var Collection<int, Collection<int, Question>> */
                return $this->template->map(fn(array $part) => $questions->whereIn('id', $part)->values());
            }
        );
    }
}
