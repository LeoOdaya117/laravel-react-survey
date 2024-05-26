<!doctype html>
<html lang="{{ app()->getLocale() }}" class="h-full bg-white">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LaReacVitWind Development</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>

<body class="h-full">
    <div id="root"></div>
    <script>
        window.Laravel = <?php echo json_encode([
    'csrfToken' => csrf_token(),
]); ?>
    </script>
</body>
</html>
