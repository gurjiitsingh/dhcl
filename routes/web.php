<?php

use Illuminate\Support\Facades\Route;

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

//Route::get('/', function () {
 //   return view('welcome');
//});

Route::get('/', function () {
   return view('welcome');
});

Route::get('/about', function () {
    return "About";
});

Route::get('/contact', 'PostsController@contact');
   

//Route::get('/post/{id}', 'PostsController@index') ;

//Route::resource('/post', 'PostsController') ;
Route::get('/post/{id}/{name}/{pass}', 'PostsController@show') ;

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

Route::get('/admin', 'AdminsController@index')->name('admin.index');
