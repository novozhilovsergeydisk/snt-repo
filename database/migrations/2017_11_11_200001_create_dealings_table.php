<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDealingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dealings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('client_id')->unsigned();
	        $table->integer('aef_id')->unsigned();
	        $table->decimal('accruals', 5, 2);
	        $table->decimal('payments', 5, 2);
	        $table->date('created_at');
	        $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dealings');
    }
}
