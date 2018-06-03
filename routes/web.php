<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Events\notifyUsers;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/fire', function () {
    event(new NotifyUsers);
    return "Fired";
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/profile/{slug}', 'ProfileController@index')->name('profile');
