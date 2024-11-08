<?php

namespace App\Enums;

use App\Traits\ArrayableEnum;

enum QuestionType: string
{
    use ArrayableEnum;

    case SHORT_TEXT = 'SHORT_TEXT';
    case LONG_TEXT = 'LONG_TEXT';
    case SINGLE_CHOICE = 'SINGLE_CHOICE';
    case MULTIPLE_CHOICE = 'MULTIPLE_CHOICE';
    case DATE = 'DATE';
    case TIME = 'TIME';
    case DATETIME = 'DATETIME';
    case BOOLEAN = 'BOOLEAN';

    public function hasOptions()
    {
        return $this === self::SINGLE_CHOICE || $this === self::MULTIPLE_CHOICE;
    }
}
