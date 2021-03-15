<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dealing extends Model
{
	protected $table = 'dealings';
	
	protected $fillable = [
		'client_id', 'aef_id', 'accruals', 'payments', 'start_date', 'end_date'
	];
	
//	public $incrementing = TRUE; // Автоинкремент
	
	public $timestamps = FALSE;
	
//	protected $guarded = []; // Свойство $guarded содержит список полей недоступных для записи
}
