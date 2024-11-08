<?php

namespace App\Traits;

use Illuminate\Support\Enumerable;

trait ArrayableEnum
{
    public static function array()
    {
        return collect(self::cases())
            ->map(fn($case) => [
                'label' => $case->name,
                'value' => $case->value
            ])
            ->toArray();
    }

    public static function valuesArray()
    {
        return collect(self::cases())
            ->map(fn($case) => $case->value)
            ->toArray();
    }
}
