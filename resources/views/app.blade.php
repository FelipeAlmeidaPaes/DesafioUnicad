<!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Delivery System</title>
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app"></div>


        <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDs0GCav2bdNBf9PUycgqoZv7YbkiukODM&callback=initMap">
        </script>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    </html>
