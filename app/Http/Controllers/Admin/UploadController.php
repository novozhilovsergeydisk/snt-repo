<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//use League\Csv\Reader;
//use League\Csv\Statement;
//use League\Csv\CharsetConverter;
//use Maatwebsite\Excel\Excel;

use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Exceptions\PostTooLargeException;

use Illuminate\Support\Facades\Hash;
use App\User;
use App\Client;
use Illuminate\Support\Facades\DB;
use App\Aef;
use Illuminate\Support\Facades\Auth;
use App\Dealing;

//require_once '/vendor/autoload.php';
//require_once '/var/www/html/vendor/phpoffice/phpspreadsheet/src/Bootstrap.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

use League\Csv\Reader;
use League\Csv\Statement;
//use PhpOffice\PhpSpreadsheet\Reader\BaseReader;

class UploadController extends Controller
{
	protected $ipsum = 'perspic piciatis perspiciatis, unde omnis iste natus error sit volupta accusan dolorem dantium, totamu aperiam, quallo invento veritat ritatis etquasi hitecto beatit ditasun, explica. Nemenim ipsamvo lupatem, voluptas sit, asperat autodit autfugi, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat Abusus tollit usum Accepto damno Accessio cedit principali bonae fidei Actio factum concepta. Actio concepta personam noxalis poenalis Alibi potiori Argumenta ponderantur numerantum Argumentum oculos Dionysius Maior, Siciliae tyrannus, ipse iudicavit, quam esset beatus. Nam, cum quidam ex eius assentatoribus, commemoraret in sermone copias eius, opes, maiestatem dominatus, rerum abundantiam, magnificentiam aedium regiarum negaretque unquam beatiorem quemquam fuisse proxima igitur,—inquit—о Damocle, quoniam te haec vita delectat, ipse eam degustare et fortunam experiri meam?» Cum se ille cupere dixisset, collocari iussit hominem in aureo lecto, strato pulcherrimo textili stragulo, magnificis operibus picto, abacosque complures ornavit argento auroque caelato2. Tum ad mensam eximia forma pueros delectos iussit consistere eosque, nutum illius intuentes diligenter ministrare. Aderant unguenta, coronae3; incendebantur odores4; mensae conquisitissimis epulis exstruebantur.5 Fortunatus sibi Damocles videbatur. In hoc medio apparatu6 fulgentem gladium e lacunari saeta equina aptum demitti iussit, ut impenderet illius beati cervicibus. Itaque nec pulchros illos ministratores aspiciebat, nec plenum artis argentum7, nec manum porrigebat in mensam, iam ipsae defluebant coronae8. Denique exoravit tyrannum, ut abire liceret, quod iam beatus nollet esse. Satisne videtur declaravisse Dionysius, nihil esse ei beatum, cui semper aliqui terror impendeat';

	public function getForm()
	{
		return view('admin.upload-files', ['upload_active' => 'active']);
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

        $path_to_xlsx = '/home/u449664/sntzagorie.ru/www/storage/app/public/print_act/act.xlsx';

        $maat = \Maatwebsite\Excel\Facades\Excel::load($path_to_xlsx, function($reader) {
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
			
			$path_to_xlsx = '/var/www/snt/storage/images/список.xlsx';
			
			$maat = \Maatwebsite\Excel\Facades\Excel::load($path_to_xlsx, function($reader) {
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
//					$path_to_xlsx = '/var/www/snt/storage/images/список.xlsx';
//					$tables = [$path_to_xlsx];
//					$maat = \Maatwebsite\Excel\Facades\Excel::load($path_to_xlsx, function($reader) {
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
	
	public function upload(Request $request)
	{
		if (($request->start_date) && ($request->end_date)) {
			$start_date = $request->start_date;
			$end_date = $request->end_date;
		} else {
			return redirect()->back()->with('errors', 'Выберите даты начала и конца периода периода');
		}
		
		$path_to_xlsx = '';


		
		try {
			foreach ($request->file() as $file) {
				foreach ($file as $f) {
					$f->move(storage_path('images'), time().'_'.$f->getClientOriginalName());
					$path_to_xlsx = storage_path('images').'/'.time().'_'.$f->getClientOriginalName();
				}
			}

			
			if (!file_exists($path_to_xlsx)) {
				return redirect()->back()->with('errors', 'Выберите файл для загрузки на сервер');
			}
			
			$php_excel = \Maatwebsite\Excel\Facades\Excel::load($path_to_xlsx, function($reader) use($request, $start_date, $end_date) {
				$tables = [];

//				return $tables;
				
				foreach ($reader->getWorksheetIterator() as $worksheet) {
					// выгружаем данные из объекта в массив
					$tables[] = $worksheet->toArray();
				}
				
				$code_1c = '';
				$id = 1;

//				dump($tables);

//                return "Debug ".__LINE__;
				
				// Цикл по листам Excel-файла
				foreach( $tables as $table ) {
					// Цикл по строкам

					foreach($table as $row) {
						$excludes = [
//						'Выводимые данные:',
//						'Счет',
//						'Сортировка:',
//						'Назначение целевых средств',
//						'Работники организаций.Код',
//						'76.10',
							'Итого',
							''
						];
						
						$excludes_dump = [
							'СНТ "Загорье"',
							'Оборотно-сальдовая ведомость по счету 76.10 за 01.01.2016 - 06.11.2017',
						];

						if (in_array($row[0], $excludes)) {
							continue;
						}
						
						if (isset($row[0])) {
//						if (in_array($row[0], $excludes_dump)) {
//							echo '<tr><td colspan="9">';
//							dump($row[0]);
//							echo '</td></tr>';
//							continue;
//						}
						}

						// Цикл по колонкам
						$j = 1;
						$aef_id = '';
						$user_id = '';
						$client_id = '';
						$accruals = '';
						$payments = '';
						
//						dump($row);
						
						foreach( $row as $col ) {
//							dump($col);
							
							if ($j == 1) {
								$mystring = $col;
								$findme   = '00-';
								$pos = strpos($mystring, $findme);
									
								if ($pos !== false) {
									$code_1c = $col;
								} else {
									$sql = "SELECT id FROM aef WHERE name = '".$col."'";
									$aef = DB::select($sql);
									
									if (empty($aef)) {
										$sql__ = "SELECT max(id) AS max_id FROM aef";
										$aef__ = DB::select($sql__);
										$params__ = [
											'id' => $aef__[0]->max_id + 1,
											'name' => $col,
											'is_active' => 1,
										];

										DB::table('aef')->insert($params__);
									} else {
										$aef_id = $aef[0]->id;
//										$user_id = Auth::id();
										$sql = "SELECT id FROM clients WHERE code_1c = '".$code_1c."'";
										$client_collections = DB::select($sql);
										
										if (isset($client_collections[0]->id)) {
											$client_id = $client_collections[0]->id;
										}
									}
								}
								
							}
							
							if ($j == 4) {
								if ($aef_id != '') {
									$accruals = $col;
									
//									echo '<td>';
//									dump($aef_id.' '.$user_id.' '.$client_id.' '.$col);
//									echo '</td>';
								}
							}
							
							if ($j == 5) {
								if ($aef_id != '') {
									$payments = $col;
									
									$accruals = str_replace(',', '', $accruals);
									$payments = str_replace(',', '', $payments);
									
									if ($accruals == '') {
										$accruals = 0;
									}
									
									if ($payments == '') {
										$payments = 0;
									}
									
									$params[] = [
										//'id' => $id,
										'client_id' => $client_id,
										'aef_id' => $aef_id,
										'accruals' => $accruals,
										'payments' => $payments,
										'start_date' => date('Y-m-d'),
										'end_date' => date('Y-m-d'),
									];
									
									$id++;
								}
							}
							
							$j++;
						}
					}
				}


                try {
//                dump($params);
				DB::table('dealings')->truncate();
				DB::table('dealings')->insert($params);
                } catch (Exception $e) {
                    echo $e->getMessage(), PHP_EOL;
                }

				
//				DB::table('dealings')->truncate();
//				DB::table('dealings')->insert($params);
				
				return redirect()->back()->with('success', 'Файл успешно загружен');
			});

//			dump($php_excel);

            return "Данные успешно занесены в базу данных-.";
			
		} catch (Exception $e) {
			echo $e->getMessage(), PHP_EOL;
		}
		
//		return "Данные успешно занесены в базу данных.";
	}
}
