<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Auth;
use DB;
use Illuminate\Support\Facades\Session;

//use Illuminate\Http\Request;
//use Illuminate\Support\Facades\DB;


class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $name = $user->name;
        $fio = '';

        if ($user->id) {
            $sql = "SELECT a.name, d.accruals, d.payments FROM dealings d, aef a WHERE d.aef_id = a.id AND d.client_id = (SELECT id FROM clients WHERE user_id = $user->id)";
            $fio_array = DB::select('SELECT * FROM clients WHERE user_id = '.$user->id);
            $user_id = $user->id;

            if (isset($fio_array[0])) {
                $fio = $fio_array[0]->last_name.' '.$fio_array[0]->first_name.' '.$fio_array[0]->middle_name;
            }

            $results = DB::select($sql);

        }

//        dd($fio);

        $user = Auth::user();

        if ($user) {
//			dump($user->id);

//			Session::put('menu_permission', $menu_permission);

//			Session::forget('hide_menu');

//			Session::forget('menu_permission');

            if ($user->id == 201) {
                $menu_permission = 'admin';
            } else {
                $menu_permission = 'user';
            }

            Session::put('menu_permission', $menu_permission);
        }

        $sql = "SELECT d.start_date FROM dealings d LIMIT 1";
        $dealings_results = DB::select($sql);

        if ($dealings_results) {
            $actual_date = $dealings_results[0]->start_date;
            $actual_date_array = explode('-', $actual_date);
            $actual_date = $actual_date_array[2].'-'.$actual_date_array[1].'-'.$actual_date_array[0];
            $params = ['actual_date' => 'По состоянию на ' . $actual_date, 'date_now' => 'Сегодня ' . date('d-m-Y'), 'menu_permission' => $menu_permission, 'name' => $name, 'fio' => $fio, 'email' => '', 'admin_active' => 'active', 'depts' => $results];
        } else {
            $params = ['actual_date' => 'По состоянию на ' . '-', 'date_now' => 'Сегодня ' . date('d-m-Y'), 'menu_permission' => $menu_permission, 'name' => $name, 'fio' => $fio, 'email' => '', 'admin_active' => 'active', 'depts' => $results];
        }

//        $params = ['name' => $name, 'fio' => 'Иванов Иван Иваныч', 'email' => 'admin@domain.ru'];

        return view('admin.dashboard', $params);
//        return view('admin.dashboard')->with('name', 'dashboard');
    }
}