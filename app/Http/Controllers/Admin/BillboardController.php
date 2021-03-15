<?php

namespace App\Http\Controllers\Admin;

//use Illuminate\Http\Request;
//use App\Http\Controllers\Controller;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Session;

//use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Session;

class BillboardController extends Controller
{
    public function create()
    {
//        $j = Route::middleware('web')
//            ->namespace('App\Http\Controllers')
//            ->group(base_path('routes/web.php'));

//        $j = Route::get('/', function () {
//            dump('test');
//
//            //return view('index', ['active_main' => 'active-link']);
//        });
//
//        $z = include base_path('routes/web.php');
//
//        dump($z);
//
//        return;

//        Session::put('menu_permission', $menu_permission);

//        $z = Session::get('test_permission');
//
//        dump($z);
//
//        return;

        $billboard = DB::table('billboard')->select(['id', 'name'])->get();

//        dump($billboard);
//
//        return;

        $params = ['billboard' => $billboard];
        return view('admin.billboard', $params)->with('name', 'billboard');
    }

    public function store(Request $request)
    {
//        try {
//            $params[] = [
////                'id' => $id,
////                'client_id' => $client_id,
////                'aef_id' => $aef_id,
////                'accruals' => $accruals,
////                'payments' => $payments,
////                'start_date' => date('Y-m-d'),
////                'end_date' => date('Y-m-d'),
//            ];
//
////            DB::table('dealings')->insert($params);
//        } catch (Exception $e) {
//            echo $e->getMessage(), PHP_EOL;
//        }

//        dump($request->start_date);

//        return $request->get('name');

//        $validator = $this->validate($request, [
//            'start_date' => 'required|max:255'
////            'body' => 'required',
//        ]);

//        dump($request);

//        return response()->json($request->billboard_name);


        $validator = Validator::make($request->all(), [
            'date_from' => 'required|max:10',
            'billboard_name' => 'required|max:50',
            'billboard_amount' => 'required|max:20',
            'billboard_message' => 'required'
        ]);

//        $validator = Validator::make($request->all(), [
//            'start_date' => 'required|max:255'
//        ]);

        if (!$validator->passes()) {
//            dump('test');
//            $arr = ['response' => 'DATABASE_INSERT_SUCCESS'];
            $arr = ['response' => 'NO_VALIDATE', 'msg' => 'Проверьте правильность заполнения полей формы'];
        //            $arr = ['msg' => $v->errors()];
                    return response()->json($arr);
        //            return redirect()->back()->withErrors($v->errors());


        } else {
            try {
                $date_from = $request->date_from;
                $date_from = Carbon::createFromFormat('d-m-Y', $date_from)->toDateString();
                $date_to = $request->date_to;
                $billboard_name = $request->billboard_name;
                $billboard_amount = $request->billboard_amount;
                $billboard_message = $request->billboard_message;

                $params[] = [
                    //'id' => $id,
                    'date_from' => $date_from ,
                    'date_to' => $date_to,
                    'name' => $billboard_name,
                    'amount' => $billboard_amount,
                    'message' => $billboard_message,
                    'actual' => true,
                ];

                $id = DB::table('billboard')->where('name', $billboard_name)->value('id');

                if ($id > 0) {
                    $arr = ['response' => 'VALID', 'msg' => 'Информация с такими данными уже есть в базе данных'];
                } else {
//                    $arr = ['response' => 'NO_RECORD'];

                    DB::table('billboard')->insert($params);

                    $arr = ['response' => 'SUCCESS', 'msg' => 'Информация записана в базу данных'];
                }
            } catch (Exception $e) {
                $arr = ['response' => 'ERROR_DB'];
            }
        }

////        $error = $v->errors()->all();
//        if ($validator->fails())
//        {
//            $arr = ['msg' => 'test1'];
//        //            $arr = ['msg' => $v->errors()];
//        //            return response()->json($arr);
//        //
//        //            return redirect()->back()->withErrors($v->errors());
//    }
// else {
//        $arr = ['msg' => 'test2'];
//    }

//return;

        return response()->json($arr);
    }

    public function uploadPhoto(Request $request) {
//        Storage::makeDirectory(storage_path('images/billboard').'/'.$request->billboard_list);
        try {
            foreach ($request->file() as $file) {
                foreach ($file as $f) {
                    $f->move(storage_path('images/billboard'), $f->getClientOriginalName());

                    $params[] = [
                        //'id' => $id,
                        'billboard_id' => $request->billboard_list,
                        'image_name' => $f->getClientOriginalName()
                    ];

//                    dump($f->getClientOriginalName());
                    //$path_to_xlsx = storage_path('images') . '/' . time() . '_' . $f->getClientOriginalName();
                }
            }

            DB::table('billboard_image')->insert($params);

            dump(storage_path('images/billboard').'/'.$request->billboard_list);
//            dump($request->billboard_list);
//            dump($request->file());

            return;

            return response()->json(['response' => 'success']);
        } catch (Exception $e) {
            return response()->json(['response' => 'error']);
        }

        //return response()->json(['msg' => __METHOD__]);
//        return __METHOD__;
    }
}