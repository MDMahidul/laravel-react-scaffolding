const mix = require('laravel-mix');

mix.react('resources/js/main.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css');

mix.copyDirectory('resources/images','public/images')
mix.copy('resources/css/style.css','public/css')
mix.copy('resources/css/responsive.css','public/css')
