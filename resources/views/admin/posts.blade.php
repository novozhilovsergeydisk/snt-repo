@extends('admin.layouts.index')
@section('title', 'Dashboard Panel')
@section('keywords', 'admin, admin panel')
@section('description', 'Dashboard Panel')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('menu_systems', 'active')--}}
@section('H1', 'Dashboard Panel')
@section('welcome-j', 'Welcome to Cobra CMS')
@section('tab-pane-active', 'active')

@section('content')
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-5">
            @foreach($posts as $post)
                <p>Title {{ $post->title }}</p>
            @endforeach
        </div>
        <div class="col-md-5">
            <div class="input-group">
                <input required="" type="text" class="form-control datetimepicker" value="{{ now() }}" placeholder="" name="options[startDate]">
                <span class="input-group-addon">
                    <span class="fa fa-calendar" aria-hidden="true"></span>
                </span>
            </div>
        </div>
        <div class="col-md-1"></div>

        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
        {{--<div class="col-md-1">.col-md-1</div>--}}
    </div>


@endsection