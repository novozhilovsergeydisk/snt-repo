<?php
/**
 * Created by PhpStorm.
 * User: SERGEY
 * Date: 18.02.2018
 * Time: 20:01
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AjaxController extends Controller
{
	public function index(Request $request)
	{
		if ($request->isMethod('get')){
			return response()->json(['response' => 'This is post method']);
		}
		
		return response()->json(['response' => 'This is get method__']);
	}
	
	public function store(Request $request)
	{
//		return 'Joker';
		
		if ($request->isMethod('post')){
			return response()->json(['response' => 'This is post method']);
		}
		
		return response()->json(['response' => 'This is get method__']);
	}
}