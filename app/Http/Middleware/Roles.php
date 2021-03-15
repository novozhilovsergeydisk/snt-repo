<?php

namespace App\Http\Middleware;

//use App\User;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class Roles
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @param  string|null  $guard
	 * @return mixed
	 */
	public function handle($request, Closure $next, $guard = null)
	{
//		if (Auth::guard($guard)->check()) {
//			return redirect('/admin');
//		}

        $user = Auth::user();
//        Session::put('menu_permission', 'user');

        if ($user) {
            if ($user->id == 201) {
                $menu_permission = 'admin';
            } else {
                $menu_permission = 'user';
            }

            Session::put('menu_permission', $menu_permission);
//            Session::put('user_id', $user->id);
        }
		
		
//		$user = Auth::user();
//
//		if ($user) {
//
////            if ($user->id == 201) {
////                $menu_permission = 'admin';
////            } else {
////                $menu_permission = 'user';
////            }
////
//            Session::put('test_permission', 'test_permission');
//
//			if ($user->id != 201) {
////				return redirect()->back()->with('error', 'Доступ запрещен');
//			} else {
////				Session::put('permission', 'Joker');
//			}
//		}

		return $next($request);
	}
}