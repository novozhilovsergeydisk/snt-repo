<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LogsController extends Controller
{
    public function index()
    {
//        $params[] = [
//            //'id' => $id,
//            'client_id' => $client_id,
//            'aef_id' => $aef_id,
//            'accruals' => $accruals,
//            'payments' => $payments,
//            'start_date' => date('Y-m-d'),
//            'end_date' => date('Y-m-d'),
//        ];



//        dump('test');
//        return;

        $sql = "SELECT distinct user_id, visit_date, session FROM `logs` ORDER BY visit_date DESC";
        $logs = DB::select($sql);
        $sql = "SELECT user_id, created_at as visit_date, url as session FROM `user_statistics` WHERE url = 'admin/typical-project' ORDER BY visit_date DESC";
        $stat = DB::select($sql);


//        if (!empty($logs)) {
//            dump($logs);
//            return;
//        }

        return view('admin.logs', ['logs' => $logs, 'stat' => $stat]);

    }
}
