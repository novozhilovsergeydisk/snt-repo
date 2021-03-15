<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Client;
use Illuminate\Support\Facades\DB;

class ClientsController extends Controller
{
    public function index()
    {
        $clients = DB::select(/*
			SELECT 
				cl.plot, cl.code_1c, cl.last_name, cl.first_name, cl.middle_name, u.name,
				u.email	 
			FROM 
				clients cl, users u
			WHERE
				cl.user_id = u.id
	    */


'
			SELECT 
				cl.id, cl.plot, cl.code_1c, cl.last_name, cl.first_name, cl.middle_name, u.name,
				u.email	 
			FROM 
				clients cl left join users u on cl.user_id = u.id
                        ORDER BY cl.id ASC
	    ');

        $depts = [];

        $data_depts = DB::select('
            select
              (select plot from `clients` where clients.id = dealings.client_id) as plot, sum(payments) - sum(accruals) as depts
            FROM 
              `dealings`
            group by
                client_id
        ');
//var_dump($data_depts);
        foreach ($data_depts as $item) {
            $depts[$item->plot] = $item->depts;

        }

//        dump($depts);
//dump($clients);
//
//        return;
	    
    	return view('admin.clients', ['clients_active' => 'active', 'clients' => collect($clients), 'depts' => $depts]);
//        return view('admin.dashboard', ['clients_active' => 'active', 'clients' => $clients]);
    }
}
