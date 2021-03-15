{{--@extends('admin.layouts.index')--}}
@extends('admin.layouts.vendor.phpsmart.index')

@section('title', 'Панель управления. Загрузка excel файла.')
@section('keywords', 'admin, admin panel')
@section('description', 'Панель управления. Загрузка excel файла.')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
@section('H1', 'Загрузка оборотно-сальдовой ведомости')

@if (isset($upload_active))
    @section('upload_active', $upload_active)
@endif

{{--@section('welcome-j', $date_now)--}}

@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="card mb-4">
            <div class="card-header">
                <h3 class="panel-heading">
                    <span class="text-muted">Форма загрузки excel файла</span>
                </h3>
            </div>
            <div class="card-body">
                <form style="padding: 12px !important;" class="form-horizontal" method="post" action="{{ route('upload_balance_list') }}" enctype="multipart/form-data">
                    <input name="_token" type="hidden" value="{{ csrf_token() }}">

                        {{--<div class="form-group">--}}
                            {{--<div class="input-group" id="datetimepicker2">--}}
                                {{--<input type="text" class="form-control"/>--}}
                                {{--<span class="input-group-addon">--}}
                                    {{--<i class="glyphicon glyphicon-calendar"></i>--}}
                                {{--</span>--}}
                            {{--</div>--}}
                        {{--</div>--}}



                <!-- Инициализация Bootstrap DateTimePicker -->
                {{--<script>--}}
                  {{--$(function () {--}}
                    {{--$('#datetimepicker2').datetimepicker({--}}
                      {{--locale: 'ru'--}}
                    {{--});--}}
                  {{--});--}}
                {{--</script>--}}

                <!-- Инициализация виджета "Bootstrap datetimepicker" -->
                <script>
                  $(function () {
                      // alert('');
                    // идентификатор элемента (например: #datetimepicker1), для которого необходимо инициализировать виджет Bootstrap DateTimePicker
                    $('#datetimepicker1').datetimepicker(
                      {format: 'DD-MM-YYYY', locale: 'en'}
                    );

                    $('#datetimepicker2').datetimepicker(
                      {format: 'DD-MM-YYYY', locale: 'en'}
                    );
                  });
                </script>

                <label>Начало периода</label>
                <div style="width: 300px;" class="input-group date {{--datetimepicker--}}" id="datetimepicker1">
                            <input name="start_date" type="text" class="form-control" value="{{ date('d-m-Y') }}" />
                            <span class="input-group-addon">
                        <span class="icon-calendar"></span>
                    </span>
                        </div>

               <label>Конец периода</label>
                <div style="width: 300px;" class="input-group date {{--datetimepicker--}}" id="datetimepicker2">
                    <input name="end_date" type="text" class="form-control" value="{{ date('d-m-Y') }}" />
                    <span class="input-group-addon">
                        <span class="icon-calendar"></span>
                    </span>
                </div>

                {{--<label>Начало периода</label>--}}
                        {{--<div id='datetimepicker3' style="width: 300px;" class="input-group date datetimepicker">--}}
                            {{--<input type="text" class="form-control" value="" name="publish_start" required>--}}
                            {{--<span class="input-group-addon">--}}
                            {{--<span class="icon-calendar"></span>--}}
                            {{--</span>--}}
                        {{--</div>--}}

                        {{--<label>Конец периода</label>--}}
                        {{--<div style="width: 300px;" class="input-group date datetimepicker">--}}
                            {{--<input type="text" class="form-control" value="" name="publish_end" required>--}}
                            {{--<span class="input-group-addon">--}}
                            {{--<span class="icon-calendar"></span>--}}
                            {{--</span>--}}
                        {{--</div>--}}

                        <input class="btn btn-default" style="margin-top: 12px;" type="file" multiple name="file[]">
                        <button style="margin-top: 12px;" class="btn btn-success" type="submit"><i class="fa fa-upload"></i> Загрузить</button>
                    </form>
                    <div class="panel-body">
                    </div>

                    @if (session('errors'))
                        <div class="alert alert-danger">
                            <ul>
                                {{ session('errors') }}
                            </ul>
                        </div>
                    @endif

                    @if (session('success'))
                        <div class="alert alert-success">
                            <ul>
                                {{ session('success') }}
                            </ul>
                        </div>
                    @endif
                </div>



        </div>
    </div>
@endsection