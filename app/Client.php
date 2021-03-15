<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
	protected $fillable = [
		'user_id', 'code_1c', 'last_name', 'first_name', 'middle_name', 'plot', 'created_at', 'updated_at'
	];
	
	public $timestamps = false;
}
