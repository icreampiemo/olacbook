<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Web Application for OLAC" />
    <meta name="author" content="Arjay Kurt Dela Rosa" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/theme.css') }}" rel="stylesheet">
</head>
<body class="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md logo-blue header-blue blue-sidebar-color">
    <div id="app" class="page-wrapper">
        @include('partials.layout.header')

        <div class="page-container">
            @include('partials.layout.sidebar')

            <div class="page-content-wrapper">
                <div class="page-content">
                    @yield('content')
                </div>
            </div>
        </div>
        @include('partials.layout.footer')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/theme.js') }}" defer></script>
</body>
</html>
