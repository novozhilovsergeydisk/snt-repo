<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class UserStatistics
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

//        dump('TEST');

        $user = Auth::user();

//        dump($user->id);
//        dump($request->path());

        try {
//            $date_from = $request->date_from;
//            $date_from = Carbon::createFromFormat('d-m-Y', $date_from)->toDateString();
//            $date_to = $request->date_to;
//            $billboard_name = $request->billboard_name;
//            $billboard_amount = $request->billboard_amount;
//            $billboard_message = $request->billboard_message;

            $params[] = [
                'user_id' => $user->id,
                'url' => $request->path(),
                'created_at' => date("Y.m.d H:i:s"),
                'updated_at' => date("Y.m.d H:i:s"),

//                'date_to' => $date_to,
//                'name' => $billboard_name,
//                'amount' => $billboard_amount,
//                'message' => $billboard_message,
//                'actual' => true,
            ];

//            dump($params);

//            $id = DB::table('user_statistics')->where('name', $billboard_name)->value('id');
//
//            if ($id > 0) {
//                $arr = ['response' => 'VALID', 'msg' => 'Информация с такими данными уже есть в базе данных'];
//            } else {
////                    $arr = ['response' => 'NO_RECORD'];

                DB::table('user_statistics')->insert($params);

//                $arr = ['response' => 'SUCCESS', 'msg' => 'Информация записана в базу данных'];
//            }
        } catch (Exception $e) {
            $arr = ['response' => 'ERROR_DB'];
        }

//        Session::put('menu_permission', 'user');

//        if ($user) {
//            if ($user->id == 201) {
//                $menu_permission = 'admin';
//            } else {
//                $menu_permission = 'user';
//            }
//
//            Session::put('menu_permission', $menu_permission);
////            Session::put('user_id', $user->id);
//        }

        return $next($request);
    }
}
