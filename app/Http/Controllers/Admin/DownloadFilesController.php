<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DownloadFilesController extends Controller
{
    public function index()
    {
    	return view('admin.upload-files');
    }
	
	public function upload(Request $request)
	{
		foreach ($request->file() as $file) {
			foreach ($file as $f) {
				$f->move(storage_path('images'), time().'_'.$f->getClientOriginalName());
			}
		}
		return "Успех";
	}
}
