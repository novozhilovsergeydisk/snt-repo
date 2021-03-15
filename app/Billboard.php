<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Billboard extends Model
{
    protected $table = 'billboard';

    protected $fillable = [
        'name', 'amount', 'message', 'date_from', 'date_to', 'actual'
    ];

	public $incrementing = TRUE; // Автоинкремент

    public $timestamps = FALSE;

//	protected $guarded = []; // Свойство $guarded содержит список полей недоступных для записи
}