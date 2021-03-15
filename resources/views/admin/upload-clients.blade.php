@extends('admin.layouts.index')
@section('title', 'Панель управления. Загрузка файла клиентов.')
@section('keywords', 'admin, admin panel')
@section('description', 'Панель управления. Загрузка excel файла клиентов.')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
@section('H1', 'Загрузка списка клиентов')

@if (isset($upload_clients_active))
    @section('upload_clients_active', $upload_clients_active)
@endif

{{--@section('welcome-j', $date_now)--}}

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default" >
                    <div class="panel-heading">Форма загрузки excel файла</div>

                    <form style="padding: 12px !important;" class="form-horizontal" method="post" action="{{ route('upload_clients') }}" enctype="multipart/form-data">
                        <input name="_token" type="hidden" value="{{ csrf_token() }}">

                        <input class="btn btn-default" style="margin-top: 12px;" type="file" multiple name="file[]">
                        <button style="margin-top: 12px;" class="btn btn-success" type="submit"><i class="fa fa-upload"></i> Загрузить</button>
                    </form>
                    <div class="panel-body">
                    </div>

                    @if (session('tables'))
                        <div class="alert alert-success">
                            <ul>
                                {{ session('tables') }}
                            </ul>
                        </div>
                    @endif

                    @if (session('client_original_name'))
                        <div class="alert alert-success">
                            <ul>
                                {{ session('client_original_name') }}
                            </ul>
                        </div>
                    @endif

                    @if (session('do_not_select_file'))
                        <div class="alert alert-danger">
                            <ul>
                                {{ session('do_not_select_file') }}
                            </ul>
                        </div>
                    @endif

                    @if (session('big_size_file'))
                        <div class="alert alert-danger">
                            <ul>
                                {{ session('big_size_file') }}
                            </ul>
                        </div>
                    @endif

                    @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection