{{--@extends('admin.layouts.index')--}}
{{--@extends('admin.layouts.vendor.phpsmart.index')--}}

{{--@section('content')--}}

        <!DOCTYPE html>

<html lang="ru" class="default-style layout-fixed-offcanvas">
<head>
    <title>@yield('title')</title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="keywords" content="@yield('keywords')" />
    <meta name="description" content="@yield('description')" />
    <meta name="http-equiv" content="@yield('http_equiv')" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    <meta name="copyright" content="PHPSMART" />
    <meta name="Author" lang="ru" content="Novozhilov Sergey" />

{{--<link rel="icon" type="image/x-icon" href="http://sntzagorie.ru/favicon.ico">--}}

<!--<link href="/public/vendor/phpsmart/css/googleapis.css" rel="stylesheet">-->

    <!-- Icon fonts -->
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/fonts/fontawesome.css">
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/fonts/ionicons.css">
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/fonts/linearicons.css">
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/fonts/open-iconic.css">
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/fonts/pe-icon-7-stroke.css">

    <!-- Core stylesheets -->
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/uikit.css">
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/demo.css">
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/theme-corporate.css">

    <script src="/public/vendor/phpsmart/js/material-ripple.js"></script>

    <script src="/public/vendor/phpsmart/js/layout-helpers.js"></script>

    <style type="text/css">
        .layout-fixed .layout-1 .layout-sidenav,
        .layout-fixed-offcanvas .layout-1 .layout-sidenav {
            /*top: 0px !important;*/
        }
        .layout-container {
            /*padding-top: 0px !important;*/
        }
    </style>

    <!-- Theme settings -->
    <!-- This file MUST be included after core stylesheets and layout-helpers.js in the <head> section
    <script src="/public/vendor/phpsmart/js/theme-settings.js__"></script>
    -->

    <link rel="stylesheet" type="text/css" href="/public/vendor/phpsmart/css/bootstrap.css" class="theme-settings-bootstrap-css">
    <link rel="stylesheet" type="text/css" href="/public/vendor/phpsmart/css/appwork.css" class="theme-settings-appwork-css">
    <link rel="stylesheet" type="text/css" href="/public/vendor/phpsmart/css/colors.css" class="theme-settings-colors-css">
    <link href="/public/vendor/phpsmart/css/theme-twitlight.css" rel="stylesheet" type="text/css" class="theme-settings-theme-css">
    <link rel="stylesheet" href="/public/css/custom.css" />

    <!-- Core scripts -->
    <script src="/public/vendor/phpsmart/js/pace.js"></script>
    <script src="/public/vendor/phpsmart/js/jquery.min.js"></script>

    <!-- Libs -->
    <link rel="stylesheet" href="/public/vendor/phpsmart/css/perfect-scrollbar.css">
    <link rel="stylesheet" href="/public/vendor/phpsmart/libs/bootstrap-datepicker/bootstrap-datepicker.css">
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" />

    <script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js" type="text/javascript"></script>

</head>

<body>

<div class="container flex-grow-1 container-p-y">
    <div class="card mb-4">
        <div class="card-header">
            <h3 class="panel-heading">
                <span class="text-muted">Авторизация</span>
            </h3>
        </div>
        <div class="card-body">
            <form class="form-horizontal" method="POST" action="{{ route('login') }}">
            {{ csrf_field() }}

            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                <label for="name" class="col-md-4 control-label">Логин</label>

                <div class="col-md-6">
                    <input id="name" type="text" class="form-control" name="name" value="{{--{{ old('name') }}--}}" required autofocus>

                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <label for="password" class="col-md-4 control-label">Пароль</label>

                <div class="col-md-6">
                    <input id="password" type="password" class="form-control" name="password" required>

                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Запомнить
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-8 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                        Авторизоваться
                    </button>

                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        Забыли пароль? {{--Forgot Your Password?--}}
                    </a>
                </div>
            </div>
        </form>
        </div>
    </div>
</div>

</body>
</html>

{{--@endsection--}}
