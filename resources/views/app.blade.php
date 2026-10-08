<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>TwoTech — Computer Service & Parts</title>
    <link rel="icon" type="image/jpeg" href="/images/two-tech-logo.jpg">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/main.tsx'])
  </head>
  <body class="bg-paper">
    <div id="app"></div>
  </body>
</html>
