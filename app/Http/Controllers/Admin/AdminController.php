<?php

namespace App\Http\Controllers\Admin;

//use Illuminate\Http\Request;
//use App\Http\Controllers\Controller;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use DB;
//use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
	public function show()
	{
//		return bcrypt('joker_579'); // $2y$10$p6Mt5fyAFucIh3PmUnCaouEe/E3lIemYhvJELCP/x/twhWzrsKtgC
		
		$user = Auth::user();
		$name = $user->name;
//		$email = $user->email;
		
//		dump($user->id);
		
//		if (!Auth::check()) {
//			return 1;
//		} else {
//			return 2;
//		}

//		return;
		
		$fio = '';
		
		if ($user->id) {
			$sql = "SELECT a.name, d.accruals, d.payments FROM dealings d, aef a WHERE d.aef_id = a.id AND d.client_id = (SELECT id FROM clients WHERE user_id = $user->id)";
			$fio_array = DB::select('SELECT * FROM clients WHERE user_id = '.$user->id);
			$user_id = $user->id;
			
			if (isset($fio_array[0])) {
				$fio = $fio_array[0]->last_name.' '.$fio_array[0]->first_name.' '.$fio_array[0]->middle_name;
			}

//			$dealings_result = DB::table('dealings')->select($sql);
			
			$results = DB::select($sql);

//			foreach ($results as $item) {
//				echo $item->name;
//				echo '<br>';
//
//			}
		}



//        dump($fio);
//        return;

    //$results = DB::select('select * from users where id = ?', array(1));

    /*$host = 'u449664.mysql.masterhost.ru';
    $dbname = 'u449664_laravel';
    $this->PDO = new \PDO("mysql:host=$host;dbname=$dbname", 'u449664', '9-E-snerel7s');*/

		//dump($results);

		//return;

//		view()->share('test', 'Joker');

    //$name = 'admin';
		
		$user = Auth::user();
		
		if ($user) {
			if ($user->id == 201) {
				$menu_permission = 'admin';
			} else {
				$menu_permission = 'user';
			}

			Session::put('menu_permission', $menu_permission);
		}

		$sql = "SELECT d.start_date FROM dealings d LIMIT 1";
		$dealings_results = DB::select($sql);

        $sql = "SELECT * from electro_counter_list e inner join clients c on e.user_id = c.user_id where c.user_id = $user->id ";

//        dd($sql);

        $r = DB::select($sql);

//        dd($r);

        try {
            if (count($r)) {
                $created_at = $r[0]->created_at;
                $summ = $r[0]->summ;
                $l = $r[0]->L;
                $m = $r[0]->M;
                $electro_counter = $r[0]->electro_counter;
            } else {
                $created_at = '';
                $summ = 0;
                $l = '';
                $m = '';
                $electro_counter = '';
            }
        } catch (Exception $e) {
            echo $e->getMessage(), PHP_EOL;
        }

//        dd($l);

		if ($dealings_results) {
            $actual_date = $dealings_results[0]->start_date;
            $actual_date_array = explode('-', $actual_date);
            $actual_date = $actual_date_array[2].'-'.$actual_date_array[1].'-'.$actual_date_array[0];

//            $created_at_array = explode('-', $created_at);
//            $created_at = $created_at_array[2].'-'.$created_at_array[1].'-'.$created_at_array[0];

            $params = ['created_at' => $created_at, 'actual_date' => '???????????????????? ???? ?????????????????? ???? ' . $actual_date, 'date_now' => '?????????????? ' . date('d-m-Y'), 'electro_counter' => $electro_counter, 'name' => $name, 'fio' => $fio, 'email' => '', 'admin_active' => 'active', 'depts' => $results, 'l' => $l, 'm' => $m, 'summ' => $summ];
        } else {
            $params = ['created_at' => $created_at, 'actual_date' => '???????????????????? ???? ?????????????????? ???? ' . '-', 'date_now' => '?????????????? ' . date('d-m-Y'), 'name' => $name, 'fio' => $fio, 'email' => '', 'admin_active' => 'active', 'depts' => $results, 'l' => $l, 'm' => $m, 'summ' => $summ];

        }

//        $logs_params[] = [
//            //'id' => $id,
//            'user_id' => $user->id,
//            'session' => Session::get('_token'),
//            'visit_date' => date('Y-m-d'),
//        ];
//
//        DB::table('logs')->insert($logs_params);

//		dump(Session::get('_token'));
//        // Oc1BcGfq7pQWAXYuVXsWjvDUFUqp9DcGEkrSBG8g
//        // Oc1BcGfq7pQWAXYuVXsWjvDUFUqp9DcGEkrSBG8g
//        return;

//        Session::regenerate();
//        dump(Session::all());

//        dd($params);

        return view('admin.dashboard', $params)->with('test', 'XXX');
//		return view('admin.index', $params)->with('test', 'XXX');
	}
	
	public function renderOutput()
	{
//        GET	/photos	index	photos.index
//        GET	/photos/create	create	photos.create
//        POST	/photos	store	photos.store
//        GET	/photos/{photo}	show	photos.show
//        GET	/photos/{photo}/edit	edit	photos.edit
//        PUT/PATCH	/photos/{photo}	update	photos.update
//        DELETE	/photos/{photo}	destroy	photos.destroy

//        $user = Auth::user();
//
//        if ($user) {
//            if ($user->id == 201) {
//                $menu_permission = 'admin';
//            } else {
//                $menu_permission = 'user';
//            }
//
//            Session::put('menu_permission', $menu_permission);
//        }
	}

	public function TypicalProject()
    {
        $params = [];
        return view('admin.typical-project', $params)->with('view', 'typical_project');
    }

    public function accountingDocuments()
    {
        $params = [];
        return view('admin.accounting-documents', $params)->with('view', 'accounting_documents');
    }
}
