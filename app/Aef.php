<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aef extends Model
{
	protected $table = 'aef';
	
	protected $fillable = [
		'name', 'is_active'
	];
	
	public $timestamps = false;
}
