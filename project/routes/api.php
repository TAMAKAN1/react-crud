<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('users','UserController@index');
Route::post('store-users','UserController@store');
Route::get('/users/{id}/edit','UserController@edit');
Route::put('/users-update/{id}','UserController@update');
Route::get('/users-view/{id}','UserController@view');
Route::delete('/users-delete/{id}','UserController@delete');
