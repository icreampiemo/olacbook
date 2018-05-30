let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .styles([
        'public/plugins/simple-line-icons/simple-line-icons.min.css',
        'public/plugins/font-awesome/css/font-awesome.min.css',
        'public/plugins/material/material.min.css',
    	'public/theme/css/material_style.css',
    	'public/theme/css/animate_page.css',
        'public/theme/css/style.css',
        'public/theme/css/plugins.min.css',
        'public/theme/css/responsive.css',
    	'public/theme/css/theme-color.css',
        'public/theme/css/custom_style.css'
    ], 'public/css/theme.css')
    .scripts([
        'public/plugins/jquery-blockui/jquery.blockui.min.js',
    	'public/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
    	'public/theme/js/app.js',
        'public/theme/js/layout.js',
    	'public/theme/js/theme-color.js',
    	'public/plugins/material/material.min.js',
    	'public/theme/js/animations.js'
    ], 'public/js/theme.js')
    .styles([
        'public/plugins/font-awesome/css/font-awesome.min.css',
        'public/theme/css/login.css',
    ],'public/css/login.css')
