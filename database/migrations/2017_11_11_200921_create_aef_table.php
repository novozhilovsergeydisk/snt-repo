<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAefTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	// appointment earmarked funds (aef) - назначение целевых средств
        Schema::create('aef', function (Blueprint $table) {
            $table->increments('id');
	        $table->string('name');
	        $table->smallInteger('is_active');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aef');
    }
}
