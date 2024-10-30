<?php

namespace App\Console\Commands;

use Illuminate\Support\Str;

use Illuminate\Console\Command;
use function Laravel\Prompts\text;

class RenameProject extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:rename';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Replace `laravel-start` in all affected files with your provided project name.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = text("Input your project name", "Laravel Start");

        $env = $this->replace(file_get_contents(base_path('.env')), $name);
        $envExample = $this->replace(file_get_contents(base_path('.env.example')), $name);
        $compose = $this->replace(file_get_contents(base_path('compose.yaml')), $name);
        $vite = $this->replace(file_get_contents(base_path('vite.config.js')), $name);

        file_put_contents(base_path('.env'), $env);
        file_put_contents(base_path('.env.example'), $envExample);
        file_put_contents(base_path('compose.yaml'), $compose);
        file_put_contents(base_path('vite.config.js'), $vite);
    }

    public function replace(string $file, string $name): string
    {
        $lower = Str::lower($name);

        return str_replace([
            'Laravel Start',
            'laravel-start',
            'laravel_start'
        ], [
            $name,
            Str::kebab($lower),
            Str::snake($lower),
        ], $file);
    }
}
