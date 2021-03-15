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

Route::group(['prefix'=>'admin', 'middleware'=>['auth', 'statistics']], function () {
	
	Route::get('/', ['as'=>'admin', 'uses'=>'Admin\AdminController@show']);
	
//	Route::get('/pages', ['as'=>'pages', 'uses'=>'Admin\PagesController@index']);
	
//	Route::get('/product', ['as'=>'product.list', 'uses'=>'Sfa\ProductController@list']);
	
//	Route::get('/menus', ['as'=>'menus', 'uses'=>'Admin\MenusController@index']);
	
//	Route::get('/posts', ['as'=>'posts', 'uses'=>'Admin\PostsController@index']);
	

	
//	Route::get('/profile', ['as'=>'profile', 'uses'=>'Admin\ProfileController@index']);
	
//	Route::get('/tools', ['as'=>'tools', 'uses'=>'Admin\ToolsController@index']);
//
//	Route::get('/settings', ['as'=>'settings', 'uses'=>'Admin\SettingsController@list']);
//
//	Route::get('/download/files', ['as'=>'download.files', 'uses'=>'Admin\DownloadFilesController@index']);
	
	Route::get('/debts/{id}', ['as'=>'debts', 'middleware'=>'App\Http\Middleware\Roles', 'uses'=>'Admin\DebtsController@show']);
	
	Route::get('/clients', ['as'=>'clients_index', 'middleware'=>'App\Http\Middleware\Roles', 'uses'=>'Admin\ClientsController@index']);


	Route::get('/upload/balance-list',['as' => 'upload_form', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\UploadController@getForm']);
	
	Route::post('/upload/balance-list',['as' => 'upload_balance_list', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\UploadController@upload']);
	
	Route::get('/upload/clients',['as' => 'upload_form_clients', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\UploadController@getFormClients']);
	
	Route::post('/upload/clients',['as' => 'upload_clients', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\UploadController@uploadClients']);

    Route::get('/cott', ['as' => 'cott', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\CottController@index']);

	Route::get('/dashboard', ['as' => 'dashboard', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\DashboardController@index']);

Route::get('/billboard', ['as' => 'billboard', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\BillboardController@create']);

Route::post('/billboard/upload-photo',['as' => 'billboard_upload_photo', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\BillboardController@uploadPhoto']);

Route::post('/billboard/add',['as' => 'billboard_add', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\BillboardController@store']);


	
	Route::get('/sms',['as' => 'sms_index', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\SMSController@index']);
	
	Route::post('/sms',['as' => 'sms_store', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\SMSController@store']);
	
	Route::get('/ajax', ['as' => 'ajax_index', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\AjaxController@index']);
	
	Route::post('/zzz', ['as' => 'sms_store', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\SMSController@store']);

    Route::get('/logs', ['as' => 'logs', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\LogsController@index']);

    Route::get('/print', ['as' => 'logs', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\UploadController@print']);

    Route::get('/accounting-documents', ['as' => 'accounting_documents', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\AdminController@accountingDocuments']);

    Route::get('/typical-project', ['as' => 'typical_project', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'Admin\AdminController@TypicalProject']);

});

Route::get('/logout', function () {
	Auth::logout();
	
	return Redirect::route('login');
});

Route::get('/', function () {
    return view('index', ['active_main' => 'active-link']);
});

Route::get('/news', function () {
	return view('news', ['active_news' => 'active-link']);
});

//Route::get('/billboard', function () {
//    return view('billboard', ['active_billboard' => 'active-link']);
//});

Route::get('/billboard', ['as' => 'billboard', 'middleware'=>'App\Http\Middleware\Roles', 'uses' => 'BillboardController@index']);

Route::get('/contacts', function () {
	return view('contacts', ['active_contact' => 'active-link']);
});

//Route::get('/login',['as' => 'login', 'uses' => 'Auth\AuthController@showLoginForm']);

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
