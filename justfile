up:
    docker compose up -d
down:
    docker compose down
rebuild:
    docker compose up -d --build --force-recreate
sh:
    docker compose exec -u 1000 app bash
php *COMMAND:
    docker compose exec -u 1000 app php {{COMMAND}}
artisan *COMMAND:
    docker compose exec -u 1000 app php artisan {{COMMAND}}
composer *COMMAND:
    docker compose exec -u 1000 app composer {{COMMAND}}
bun *COMMAND:
    docker compose exec -u 1000 app bun {{COMMAND}}
dev:
    docker compose exec -u 1000 app bun run dev
build:
    docker compose exec -u 1000 app bun run build
