up:
    docker compose up -d
down:
    docker compose down
rebuild:
    docker compose up -d --build --force-recreate
sh:
    docker compose exec app bash
php *COMMAND:
    docker compose exec app php {{COMMAND}}
artisan *COMMAND:
    docker compose exec app php artisan {{COMMAND}}
composer *COMMAND:
    docker compose exec app composer {{COMMAND}}
bun *COMMAND:
    docker compose exec app bun {{COMMAND}}
dev:
    docker compose exec app bun run dev
build:
    docker compose exec app bun run build
ide:
    docker compose exec app php artisan ide-helper:generate;
    docker compose exec app php artisan ide-helper:models -N;
ts:
    docker compose exec app php artisan model:typer
