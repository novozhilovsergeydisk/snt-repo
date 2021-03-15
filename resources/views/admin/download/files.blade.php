@extends('admin.layouts.index')
@section('title', 'Панель управления. Загрузка excel файла.')
@section('keywords', 'admin, admin panel')
@section('description', 'Панель управления. Загрузка excel файла.')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('menu_systems', 'active')--}}
@section('H1', 'Загрузка excel файла')
{{--@section('welcome-j', $date_now)--}}

@section('content')
    <form method="post" action="{{ route('upload_file') }}" enctype="multipart/form-data">
        <input name="_token" type="hidden" value="{{ csrf_token() }}">
        <input type="file" multiple name="file[]">
        <button type="submit">Загрузить</button>
    </form>
@endsection