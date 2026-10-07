# TwoTech Computer Service & Parts

Laravel 11 API and React + TypeScript + Tailwind CSS frontend for the TwoTech customer portal.

## Stack

- Laravel 11
- React 18
- TypeScript
- Vite
- Tailwind CSS
- MySQL
- Laravel Sanctum

## Structure

```text
app/
  Http/Controllers/          API request handling
  Models/                    Eloquent data models
database/migrations/         MySQL schema
resources/
  css/app.css                Tailwind entrypoint
  js/main.tsx                React bootstrap
  js/App.tsx                 Customer landing page
  views/app.blade.php        Laravel shell
routes/
  web.php                    React SPA fallback
  api.php                    REST endpoints
```

## Local setup

```bash
composer install
npm install
copy .env.example .env
php artisan key:generate
php artisan migrate
npm run dev
```

Configure the MySQL values in `.env` before running migrations. The first API endpoints are:

- `POST /api/appointments`
- `POST /api/custom-builds`
