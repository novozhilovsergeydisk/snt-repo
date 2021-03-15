<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DebtsController extends Controller
{
	public function show($id)
	{
		$user = Auth::user();
		$name = $user->name;
//		$email = $user->email;

//		dump($user->id);
//
//		return;
		
		$fio = '';
		
		if ($user->id) {
			$sql = "SELECT a.name, d.accruals, d.payments FROM dealings d, aef a WHERE d.aef_id = a.id AND d.client_id = (SELECT id FROM clients WHERE user_id = $id)";
			$fio_array = DB::select('SELECT * FROM clients WHERE user_id = '.$id);
			$user_id = $id;
			
			if (isset($fio_array[0])) {
				$fio = $fio_array[0]->last_name.' '.$fio_array[0]->first_name.' '.$fio_array[0]->middle_name;
			}

//			$dealings_result = DB::table('dealings')->select($sql);
			
			$results = DB::select($sql);

//			foreach ($results as $item) {
//				echo $item->name;
//				echo '<br>';
//			}
			
//			dump($id);
		}
		
//		return;
		
		return view('admin.debts', ['user_id' => $user_id, 'fio' => $fio, 'results' => $results]);
	}
}
	