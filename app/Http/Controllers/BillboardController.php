<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

//use Illuminate\Http\Request;
//use Auth;
//use DB;
//use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Session;

class BillboardController extends Controller
{
    public function index()
    {
//        Session::put('menu_permission', $menu_permission);

//        return;

            try {
                $news = DB::table('billboard')->leftJoin('billboard_image', 'billboard.id', '=', 'billboard_image.billboard_id')->get();
            } catch (Exception $e) {
                $arr = ['response' => 'ERROR_DB'];
            }

//dump($news);
        $params = ['news' => $news];
        return view('billboard', $params)->with('name', 'billboard');
    }
}