{{--@extends('admin.layouts.index')--}}
{{--@extends('admin.layouts.vendor.appwork.index')--}}
@extends('admin.layouts.vendor.phpsmart.index')

@section('title', 'Панель управления. Настройки доски объявлений.')
@section('keywords', 'панель управления, настройки доски объявлений')
@section('description', 'панель управления, настройки доски объявлений')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
@section('H1', 'Настройки доски объявлений')

{{--@if (isset($upload_active))--}}
    {{--@section('upload_active', $upload_active)--}}
{{--@endif--}}

{{--@section('welcome-j', $date_now)--}}

@section('content')
    <script>
        var Validator__ = new Object();

        Validator__.getValue = function(selector) {
            alert($('#'+selector).val());
            return $('#'+selector).val();
        };

        Validator__.empty = function(selector) {
            if (Validator__.getValue(selector) == '')
            {
                // alert(selector);
                $('#'+selector).addClass('control-red');
                return false;
            } else {
                $('#'+selector).removeClass('control-red');
                return true;
            }
            // alert($('#datetimepicker_from').val());
        };

        $(document).ready(function(){
            $('#billboard-add').click(function () {
                var noEmpty = true;

                // Validator__.empty('datetimepicker_from');

                // alert($('#datetimepicker_from').val());

                // alert(Validator.isEmpty('billboard_name'));

                if (Validator.isEmpty('datetimepicker_from') == false) {
                    $('#datetimepicker_from').addClass('control-red');
                    noEmpty = false;
                }

                if (Validator.isEmpty('billboard_name') == false) {
                    $('#billboard_name').addClass('control-red');
                    noEmpty = false;
                }

                if (Validator.isEmpty('billboard_amount') == false) {
                    $('#billboard_amount').addClass('control-red');
                    noEmpty = false;
                }

                if (Validator.isEmpty('billboard_message') == false) {
                    $('#billboard_message').addClass('control-red');
                    noEmpty = false;
                }

                if (noEmpty == true) {
                    ajaxRequest('{{ route('billboard_add') }}', 'response-failed');
                }
            });

            $('#upload-photo').click(function () {
                // alert('');

                __ajaxRequest('{{ route('billboard_upload_photo') }}', 'billboard_upload_form');


                {{--var el = 'billboard_upload_photo';--}}
                {{--var el_failed = 'response-upload-failed';--}}
                {{--var route = 'billboard_upload_photo';--}}
                {{--Validator.addClass(el_failed, 'hidden');--}}

                {{--alert('');--}}


                {{--if (Validator.isEmpty(el) == false) {--}}
                    {{--Validator.removeClass(el_failed, 'hidden');--}}
                    {{--Validator.setMessage(el_failed, 'Выберите фото для загрузки');--}}
                {{--} else {--}}
                    {{--ajaxRequestUploadPhoto('{{ route('billboard_upload_photo') }}', el_response);--}}
                {{--}--}}

                //alert('');
            });
        });

        // ------- Object Validator

        var Validator = new Object();

        Validator.getValue = function(selector) {
            alert($('#'+selector).val());
            return $('#'+selector).val();
        };

        Validator.isEmpty = function (selector) {

            if (Validator.getValue(selector) == '')
            {
                // alert(selector);
                $('#'+selector).addClass('control-red');
                return false;
            } else {
                $('#'+selector).removeClass('control-red');
                return true;
            }
        };

        Validator.getValue = function(selector) {
            return $('#'+selector).val();
        };

        Validator.addClass = function(selector, _class) {
            return $('#'+selector).addClass(_class);
        };

        Validator.removeClass = function(selector, _class) {
            return $('#'+selector).removeClass(_class);
        };

        Validator.setMessage = function(selector, msg) {
            return $('#'+selector).html(msg);
        };


        // ------- End Object Validator

        function ajaxRequestUploadPhoto(route, selector){
            var form_data = $('#billboard_upload_form').serialize();
            $.ajax({
                type: 'post',
                url: route,
                data: form_data,
                success: function(data){
                    // alert(selector);

                    if (data.response == 'success') {
                        $('#'+selector).removeClass('hidden').html(data.response);
                    }
                }
            });
        }

        function __ajaxRequest(route, form_selector){
            var form_data = $('#'+form_selector).serialize();

            alert(form_data);

            return;

            // alert(route);

            $.ajax({
                type:'post',
                url:route,
                data:form_data,
                success:function(data){
                    // alert(data.response);

                    if (data.response == 'NO_VALIDATE'){
                        alert('NO_VALIDATE');
                        $('#'+selector).removeClass('hidden').html(data.response);
                    }

                    if(data.response == 'SUCCESS'){
                        alert('SUCCESS');
                        $('#'+selector).removeClass('hidden').html('success');
                    }

                    if(data.response == 'ERROR_DB'){
                        alert('ERROR_DB');
                        $('#'+selector).removeClass('hidden').html('ERROR_DB');
                    }

                    if(data.response == 'NO_RECORD'){
                        alert('NO_RECORD');
                        $('#'+selector).removeClass('hidden').html('NO_RECORD');
                    }
                }
            });
        }

        function ajaxRequest(route, selector){
            var form_data = $('#billboard_form').serialize();
            // $('.alert-danger').addClass('hidden');
            // $(':input').removeClass('control-red');

            // alert(route);

            $.ajax({
                type:'post',
                url:route,
                data:form_data,
                success:function(data){
                    // alert(data.response);

                    if (data.response == 'VALID'){
                        // alert('VALID');
                        // $('#msg').show().html(data.msg);
                        $('#msg').removeClass('element-hidden').html(data.msg);
                        // $('#'+selector).removeClass('hidden').html(data.response);
                    }

                    if(data.response == 'SUCCESS'){
                        // alert('SUCCESS');
                        $('#msg').removeClass('element-hidden').html(data.msg);
                        // $('#'+selector).removeClass('hidden').html(data.msg);
                    }

                    // if(data.response == 'ERROR_DB'){
                    //     alert('ERROR_DB');
                    //     $('#'+selector).removeClass('hidden').html('ERROR_DB');
                    // }
                    //
                    // if(data.response == 'NO_RECORD'){
                    //     alert('NO_RECORD');
                    //     $('#'+selector).removeClass('hidden').html('NO_RECORD');
                    // }
                }
            });
        }
    </script>

    <div class="container-fluid flex-grow-1 container-p-y">

        {{--<h2 class="font-weight-bold py-3 mb-4">--}}
            {{--<span class="text-muted font-weight-bold__"> </span>--}}
            {{--Добавление объявлений--}}
        {{--</h2>--}}

        <div class="card mb-4">
            <h3 class="card-header">
                <span class="text-muted">Форма добавления объявления</span>
            </h3>
            <div class="card-body">
                <form method="post" id="billboard_form" action="{{ route('billboard_add') }}">
                    <input name="_token" type="hidden" value="{{ csrf_token() }}">

                    <!-- Инициализация виджета "Bootstrap datetimepicker" -->
                    <script>
                        $(function () {


                            // идентификатор элемента (например: #datetimepicker1), для которого необходимо инициализировать виджет Bootstrap DateTimePicker
                            // $('#datetimepicker_from').datetimepicker(
                            //     {format: 'DD-MM-YYYY', locale: 'ru'}
                            // );
                            //
                            // $('#datetimepicker_to').datetimepicker(
                            //     {format: 'DD-MM-YYYY', locale: 'ru'}
                            // );
                        });
                    </script>

                    <div class="form-group">
                        <label for="billboard_name">Название объекта продажи</label>
                        <input type="text" class="form-control" id="billboard_name" name="billboard_name" value="Продажа участка" required>
                    </div>

                    <div class="form-group">
                        <label for="date_from">Дата начала действия объявления</label>
                        <div  style="width: 280px;" class="input-group date" id="datetimepicker_from__">
                            {{--<input id="date_from" name="date_from" type="text" class="form-control" value="{{ date('d-m-Y') }}" required />--}}

                            <input type="text" class="form-control w-280" id="datetimepicker_from" name="date_from" placeholder="Datepicker" value="{{ date('d-m-Y') }}" required>

                            <span class="input-group-addon">
                                <span class="icon-calendar"></span>
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="date_to">Дата окончания действия объявления</label>
                        <div style="width: 280px;" class="input-group date" id="datetimepicker_to">
                            <input id="date_to" name="date_to" type="text" class="form-control" />

                            <span class="input-group-addon">
                                <span class="icon-calendar"></span>
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="billboard_amount">Стоимость объекта продажи</label>
                        <input type="text" class="form-control" id="billboard_amount" name="billboard_amount" value="23000" required>
                    </div>

                    <div class="form-group">
                        <label for="billboard_message">Текст объявления</label>
                        <textarea class="form-control" id="billboard_message" name="billboard_message" rows="3" required>Продается участок вместе с домом и сараем</textarea>
                    </div>

                    <button class="btn btn-success" type="button" id="billboard-add"><i class="fa fa-arrow-circle-o-right"></i> Записать</button>
                </form>
            </div>
        </div>

        <div id="msg" class="card mb-4 alert alert-success alert-dismissible fade show element-hidden">

        </div>

        <div class="card mb-4">
            <h3 class="card-header">
                <span class="text-muted">Форма загрузка фото</span>
            </h3>
            <div class="card-body">
                <form name="billboard_upload_form"  method="post" action="{{ route('billboard_upload_photo') }}" enctype="multipart/form-data">
                    <input name="_token" type="hidden" value="{{ csrf_token() }}">
                    <div class="form-group">
                        <?php
//                            dump($billboard);
                        ?>

                        <label for="billboard_list">Список объявлений</label>
                        <select class="form-control" id="billboard_list" name="billboard_list">
                            <option value="">Выбрать нужное объявление для загрузки фото</option>
                            @foreach($billboard as $item)
                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="billboard_photo">Фото для зарузки</label>
                        <input type="file" multiple class="form-control-file" id="billboard_upload_photo" name="billboard_upload_photo[]">
                    </div>
                    <button class="btn btn-success" type="submit" name="upload-photo"><i class="fa fa-upload"></i> Загрузить фото</button>
                </form>
            </div>
        </div>
    </div>

@endsection