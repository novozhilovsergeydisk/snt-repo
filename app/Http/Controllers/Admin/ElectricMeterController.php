<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ElectricMeterController extends Controller
{
    public function getForm()
    {
//        dump('test');
//        return;
        return view('admin.electric-meter-upload-form', ['upload_active' => 'active']);
    }

    public function getFormClients()
    {
        return view('admin.upload-clients', ['upload_clients_active' => 'active']);
    }

    public function print()
    {
        $home_dir = '/home/u449664/sntzagorie.ru/www/vendor';
//	    include $home_dir.'/phpoffice/phpspreadsheet/src/PhpSpreadsheet/IOFactory.php';
//        include $home_dir.'/phpoffice/phpspreadsheet/src/PhpSpreadsheet/Shared/File.php';
//        include $home_dir.'/phpoffice/phpspreadsheet/src/PhpSpreadsheet/Reader/Xlsx.php';
//        include $home_dir.'/phpoffice/phpspreadsheet/src/PhpSpreadsheet/Reader/BaseReader.php';

//        $inputFileName = '/home/u449664/sntzagorie.ru/www/storage/app/public/print_act/act.xlsx';
//
//        $reader = IOFactory::load($inputFileName);
//
//        dump($reader);
        $CSVFile = '/home/u449664/sntzagorie.ru/www/storage/app/public/print_act/zzz.xlsx';
        $reader = Reader::createFromPath( $CSVFile);
        $records = (new Statement())->process($reader);

        foreach ($records->getRecords() as $record) {
            dump($record);

            //do something here
        }


        return;

        $path_excel = '/home/u449664/sntzagorie.ru/www/storage/app/public/print_act/act.xlsx';

        $maat = \Maatwebsite\Excel\Facades\Excel::load($path_excel, function($reader) {
            foreach ($reader->getWorksheetIterator() as $worksheet) {
//							dump((array)$worksheet);
                // выгружаем данные из объекта в массив
//                $tables[] = $worksheet->toArray();

                $tables[] = $worksheet;
            }

            dump($tables);

//            foreach ($tables as $row) {
//                foreach ($row as $col) {
//                    dump($col[0]);
//                }
////                    if (($col[0] == 'ФИО') || ($col[0] == null)) {
////                        continue;
////                    }
//
//            }


//            foreach ($tables as $row) {
//                foreach ($row as $col) {
//                    if (($col[0] == 'ФИО') || ($col[0] == null)) {
//                        continue;
//                    }
//
//                    $data = explode('Уч.№', $col[0]);
//                    $fio = trim($data[0]);
//                    $plot = trim($data[1]);
//
//                    $fio_array = explode(' ', $fio);
//                    $last_name = $fio_array[0];
//                    $first_name = $fio_array[1];
//
//                    if (isset($fio_array[2]))
//                    {
//                        $middle_name = $fio_array[2];
//                    } else {
//                        $middle_name = '';
//                    }
//
//                    $code_1c = $col[1];
//
//                    $user = User::find($plot);
//
//                    $data = [
//                        'user_id' => $user->id,
//                        'code_1c' => $code_1c,
//                        'last_name' => $last_name,
//                        'first_name' => $first_name,
//                        'middle_name' => $middle_name,
//                        'plot' => $plot,
//                    ];
//
//                    dump($data);
//                    echo "\n";
//                }
//            }
        });

        return;

        $open_mode = 'r';

        $csv = Reader::createFromPath($inputFileName, $open_mode);
//let's set the output BOM
//        $csv->setOutputBOM(Reader::BOM_UTF8);
//let's convert the incoming data from iso-88959-15 to utf-8
//        $reader->addStreamFilter('convert.iconv.ISO-8859-15/UTF-8');
//BOM detected and adjusted for the output
//        echo $reader->getContent();

//        $csv = Reader::createFromPath($inputFileName, 'r');


//        $csv->setHeaderOffset(0); //set the CSV header offset
//
////get 25 records starting from the 11th row
        $stmt = (new Statement())
            ->offset(10)
            ->limit(25)
        ;

        $header = $csv->getHeader(); //returns ['First Name', 'Last Name', 'E-mail']
        dump($header);
        $records = $stmt->process($csv);
        foreach ($records as $record) {
            //do something here

//            dump($record);
        }

//
//        $reader = IOFactory::load($inputFileName);
//
//		dump( $reader);

//        $z = \Maatwebsite\Excel\Facades\Excel::create($inputFileName);
//        dump($z);
        return;
    }

    public function uploadClients()
    {
        try {

            $path_excel = '/var/www/snt/storage/images/список.xlsx';

            $maat = \Maatwebsite\Excel\Facades\Excel::load($path_excel, function($reader) {
                foreach ($reader->getWorksheetIterator() as $worksheet) {
//							dump($worksheet->toArray());
                    // выгружаем данные из объекта в массив
                    $tables[] = $worksheet->toArray();
                }


                foreach ($tables as $row) {
                    foreach ($row as $col) {
                        if (($col[0] == 'ФИО') || ($col[0] == null)) {
                            continue;
                        }

                        $data = explode('Уч.№', $col[0]);
                        $fio = trim($data[0]);
                        $plot = trim($data[1]);

                        $fio_array = explode(' ', $fio);
                        $last_name = $fio_array[0];
                        $first_name = $fio_array[1];

                        if (isset($fio_array[2]))
                        {
                            $middle_name = $fio_array[2];
                        } else {
                            $middle_name = '';
                        }

                        $code_1c = $col[1];

                        $user = User::find($plot);

                        $data = [
                            'user_id' => $user->id,
                            'code_1c' => $code_1c,
                            'last_name' => $last_name,
                            'first_name' => $first_name,
                            'middle_name' => $middle_name,
                            'plot' => $plot,
                        ];

                        dump($data);
                        echo "\n";
                    }
                }
            });

            return;

//			$this->ipsum = str_replace(',' , '', $this->ipsum);
//			$this->ipsum = str_replace('.' , '', $this->ipsum);
//			$this->ipsum = str_replace('?' , '', $this->ipsum);
//			$this->ipsum = str_replace('»' , '', $this->ipsum);
//			$this->ipsum = str_replace(':' , '', $this->ipsum);
//
//			$ipsum = explode(' ', $this->ipsum);
//			$i = 1;
//
//			foreach ($ipsum as $item) {
//				$len = strlen($item);
//
//				if (($len < 6) || ($len > 10)) {
//					continue;
//				}
//
//				$ipsum_new[] = mb_strtolower($item);
//
//			}
//
//			$array_unique = array_unique($ipsum_new);
//			sort($array_unique);
//
////			DB::table('clients')->truncate();
////			DB::table('users')->truncate();
//
//			foreach ($array_unique as $item) {
////				User::create(['name' => $i, 'email' => $item.'@m.ru', 'password' => bcrypt($item)]);
//				$i++;
//				dump($i.' '.$item);
//			}
//
//			dump(bcrypt('zzzzzz'));
//			dump(Hash::make('zzzzzz'));
//			return;
//
//		if (count($request->file()) == 0) {
////			dump($request->file());
//			return redirect()->back()->with('do_not_select_file', 'Не выбран файл');
//		} else {
//			foreach ($request->file() as $file) {
//				foreach ($file as $f) {
//					if ($f->getMimeType() != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
//						return redirect()->back()->with('big_size_file', 'Неверный тип файла');
//					}
//
//					if ($f->getSize() > 30000) {
//						return redirect()->back()->with('big_size_file', 'Большой размер файла');
//					}
//
////					dump($f->getClientOriginalName());
////					dump($f->getMimeType());
////					dump($f->getSize());
//
//					$client_original_name = $f->getClientOriginalName();
//
//					$f->move(storage_path('images'), $client_original_name);
//
//					$path_excel = '/var/www/snt/storage/images/список.xlsx';
//					$tables = [$path_excel];
//					$maat = \Maatwebsite\Excel\Facades\Excel::load($path_excel, function($reader) {
//						foreach ($reader->getWorksheetIterator() as $worksheet) {
////							dump($worksheet->toArray());
//							// выгружаем данные из объекта в массив
//							$tables[] = $worksheet->toArray();
//						}
//
////						dump($tables);
//
//						foreach ($tables as $row) {
//							foreach ($row as $col) {
//								if (($col[0] == 'ФИО') || ($col[0] == null)) {
//									continue;
//								}
//
//								dump($col);
//								echo "\n";
//							}
////							dump($row[1]);
////							echo "\n";
//						}
//
////						return redirect()->back()->with('tables', $tables);
//					});
//
////					dump($maat);
//				}
//
//				return __METHOD__;
//			}
//		}

        } catch (PostTooLargeException $e) {
            echo $e->getMessage(), PHP_EOL;
            return;
        }

        return __METHOD__;
    }

    public function uploadExcel(Request $request)
    {




//        if (true) {
//            $start_date = $request->start_date;
//            $end_date = $request->end_date;
//        } else {
//            return redirect()->back()->with('errors', 'Выберите даты начала и конца периода периода');
//        }
//
        $path_excel = '';

        try {
            foreach ($request->file() as $file) {
                foreach ($file as $f) {
                    $f->move(storage_path('files/electro_counter'), time().'_'.$f->getClientOriginalName());
                    $path_excel = storage_path('files/electro_counter').'/'.time().'_'.$f->getClientOriginalName();
                }
            }


            if (!file_exists($path_excel)) {
                return redirect()->back()->with('errors', 'Выберите файл для загрузки на сервер');
            }

            \Maatwebsite\Excel\Facades\Excel::load($path_excel, function($reader) use($request) {
                $tables = [];

//				return $tables;

                foreach ($reader->getWorksheetIterator() as $worksheet) {
                    // выгружаем данные из объекта в массив
                    $tables[] = $worksheet->toArray();
                }

//                dump($tables);

                $code_1c = '';
                $id = 1;

//				dump($tables);

//                return "Debug ".__LINE__;

                $params = [];
                $id = 1;

                // Цикл по листам Excel-файла
                foreach( $tables as $table ) {
                    // Цикл по строкам

                    foreach($table as $row) {
                        $electro_counter = $row[2];
                        $summ = $row[8];
                        $l = $row[9];
                        $m = $row[10];
                        $now = time();

                        if ($electro_counter == 'Серийный №') {
                            continue;
                        }

                        $sql = "SELECT * FROM clients WHERE electro_counter = " . $electro_counter;
                        $r = DB::select($sql);
                        $user_id = $r[0]->user_id;

//                        dump($r[0]->user_id);
//                        dump($now);

                        $params[] = [
                            'id' => $id,
                            'user_id' => $user_id,
                            'summ' => $summ,
                            'L' => $l,
                            'M' => $m,
                            'created_at' => date('Y-m-d'),
                        ];

                        $id++;

//                        dump($electro_counter.' --- ' . $l . ' --- ' . $m);
                        echo "\n";
                    }

                    try {
                        DB::table('electro_counter_list')->truncate();
                        DB::table('electro_counter_list')->insert($params);
                    } catch (Exception $e) {
                        echo $e->getMessage(), PHP_EOL;
                    }

//                    dump($params);
                }

                return redirect()->back()->with('success', 'Файл успешно загружен');
            });

//			dump($php_excel);

            return "Данные успешно занесены в базу данных-.";

        } catch (Exception $e) {
            echo $e->getMessage(), PHP_EOL;
        }

        return redirect()->back()->with('errors', 'Joker');
    }
}
