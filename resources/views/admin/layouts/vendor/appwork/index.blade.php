<!DOCTYPE html>

<html lang="ru" class="default-style layout-collapsed">

<head>
    <title>@yield('title')</title>

    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf_token" content="{{ csrf_token() }}" />
    <meta name="keywords" content="@yield('keywords')" />
    <meta name="description" content="@yield('description')" />
    <meta name="http-equiv" content="@yield('http_equiv')" />
    <meta name="author" content="Novozhilov Sergey" />
    <meta name="copyright" content="PHPSMART" />
    <meta name="Author" lang="ru" content="Новожилов Сергей" />

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900" rel="stylesheet">

    <!-- Icon fonts -->
    {{--<link rel="stylesheet" href="/public/vendor/appwork/css/fontawesome.css">--}}
    <link rel="stylesheet" href="/public/vendor/appwork/css/ionicons.css">
    {{--<link rel="stylesheet" href="/public/vendor/appwork/css/linearicons.css">--}}

    <!--
    <link rel="stylesheet" href="https://uxpowered.com/products/appwork/v100/assets_//public/vendor/fonts/open-iconic.css">
    <link rel="stylesheet" href="https://uxpowered.com/products/appwork/v100/assets_//public/vendor/fonts/pe-icon-7-stroke.css">
    -->

    <!-- Core stylesheets -->
    <link rel="stylesheet" href="/public/vendor/appwork/css/bootstrap.css" class="theme-settings-bootstrap-css">
    <link rel="stylesheet" href="/public/vendor/appwork/css/appwork.css" class="theme-settings-appwork-css">
    <link rel="stylesheet" href="/public/vendor/appwork/css/theme-corporate.css" class="theme-settings-theme-css">
    <link rel="stylesheet" href="/public/vendor/appwork/css/colors.css" class="theme-settings-colors-css">
    <link rel="stylesheet" href="/public/vendor/appwork/css/uikit.css">
    <link rel="stylesheet" href="/public/vendor/appwork/css/layout.css">

    {{--<link rel="stylesheet" href="/public/css/cobra.css" />--}}

    {{--<link rel="stylesheet" href="/public/css/custom.css" />--}}

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.0-alpha14/css/tempusdominus-bootstrap-4.min.css" />


@section('link')
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" />
    @show

    <!--
    <script src="https://uxpowered.com/products/appwork/v100/assets_//public/vendor/js/material-ripple.js"></script>
    -->

    <script src="/public/vendor/appwork/js/layout-helpers.js"></script>
    <!-- This file MUST be included after core stylesheets and layout-helpers.js in the <head> section -->
    {{--<script src="/public/vendor/appwork/js/theme-settings.js"></script>--}}

    <script>
        /*window.themeSettings = new ThemeSettings({
          cssPath: '/public/vendor/appwork/css/',
          themesPath: '/public/vendor/appwork/css/'
        });*/
    </script>

    <!-- Core scripts -->
    <script src="/public/vendor/appwork/js/pace.js"></script>
    {{--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>--}}

    <!-- Libs -->
    <link rel="stylesheet" href="/public/vendor/appwork/libs/datatables/datatables.css">

    <link rel="stylesheet" href="https://uxpowered.com/products/appwork/v100/assets_//public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css">

    {{--<link rel="stylesheet" type="text/css" href="https://simplemde.com/stylesheets/stylesheet.css" media="screen">--}}
    {{--<link rel="stylesheet" type="text/css" href="https://simplemde.com/stylesheets/github-light.css" media="screen">--}}

    <script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js" type="text/javascript"></script>

    <script src="/public/js/cobra.js" type="text/javascript"></script>

    <script>
        $(document).ready(function() {
            $('#example').DataTable(
                {
                    stateSave: true,
                    "language": {
                        "lengthMenu": "Показывать _MENU_ записей на страницу",
                        "zeroRecords": "Ничего не найдено - извините",
                        "info": "Показать страницу _PAGE_ из _PAGES_",
                        "infoEmpty": "Нет доступных записей",
                        "infoFiltered": "(отфильтрован из _MAX_ общих записей)",
                        "search": "Поиск:",
                        "paginate": {
                            "first":      "Первая",
                            "last":       "Последняя",
                            "next":       "Следующая",
                            "previous":   "Предыдущая"
                        },
                        "loadingRecords": "Загрузка...",
                        "processing":     "Обработка...",

//                "pagingType": "full_numbers",
                    }
                }
            );
        });
    </script>
</head>

<body>
<div class="page-loader">
    <div class="bg-primary"></div>
</div>

<!-- Layout wrapper -->
<div class="layout-wrapper layout-1">
    <div class="layout-inner">

        <!-- Layout navbar -->
        <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x" id="layout-navbar">

            <!-- Brand demo (see assets/css/demo/demo.css) -->
            {{--<a href="index.html" class="navbar-brand demo-brand d-lg-none py-0">--}}
          {{--<span class="demo-brand-logo bg-primary">--}}
            {{--<svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">--}}
                {{--<defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stop-opacity=".25" offset="0"></stop><stop stop-opacity=".1" offset=".3">--}}
                            {{----}}
                        {{--</stop><stop stop-opacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlink:href="#a">--}}
                        {{----}}
                    {{--</linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlink:href="#a"></linearGradient></defs>--}}
                {{--<path style="fill: #fff;" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>--}}
          {{--</span>--}}
                {{--<span class="demo-brand-name font-weight-normal ml-2">Appwork 777</span>--}}
            {{--</a>--}}

            <a href="/admin">
                <img src="/public/img/logo.png">
            </a>

            <!-- Sidenav toggle (see assets/css/demo/demo.css) -->
            <div class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
                <a class="nav-item nav-link px-0 ml-2 ml-lg-0" href="javascript:void(0)">
                    <i class="ion ion-md-menu text-large align-middle"></i>
                </a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="layout-navbar-collapse">
                <!-- Divider -->
                <hr class="d-lg-none w-100 my-2">

                {{--<div class="navbar-nav align-items-lg-center">--}}
                    {{--<!-- Search -->--}}
                    {{--<label class="nav-item navbar-text navbar-search-box p-0 active">--}}
                        {{--<i class="ion ion-ios-search navbar-icon align-middle"></i>--}}
                        {{--<span class="navbar-search-input pl-2">--}}
                {{--<input type="text" class="form-control navbar-text mx-2" placeholder="Search..." style="width:200px">--}}
              {{--</span>--}}
                    {{--</label>--}}
                {{--</div>--}}

                <div class="navbar-nav align-items-lg-center ml-auto">
                    {{--<div class="demo-navbar-notifications nav-item dropdown mr-lg-3">--}}
                        {{--<a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">--}}
                            {{--<i class="ion ion-md-notifications-outline navbar-icon align-middle"></i>--}}
                            {{--<span class="badge badge-primary badge-dot indicator"></span>--}}
                            {{--<span class="d-lg-none align-middle">&nbsp; Notifications</span>--}}
                        {{--</a>--}}
                        {{--<div class="dropdown-menu dropdown-menu-right">--}}
                            {{--<div class="bg-primary text-center text-white font-weight-bold p-3">--}}
                                {{--4 New Notifications--}}
                            {{--</div>--}}
                            {{--<div class="list-group list-group-flush">--}}
                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<div class="ui-icon ui-icon-sm ion ion-md-home bg-secondary border-0 text-white"></div>--}}
                                    {{--<div class="media-body line-height-condenced ml-3">--}}
                                        {{--<div class="text-dark">Login from 192.168.1.1</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--Aliquam ex eros, imperdiet vulputate hendrerit et.--}}
                                        {{--</div>--}}
                                        {{--<div class="text-light small mt-1">12h ago</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}

                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<div class="ui-icon ui-icon-sm ion ion-md-person-add bg-info border-0 text-white"></div>--}}
                                    {{--<div class="media-body line-height-condenced ml-3">--}}
                                        {{--<div class="text-dark">You have--}}
                                            {{--<strong>4</strong> new followers</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--Phasellus nunc nisl, posuere cursus pretium nec, dictum vehicula tellus.--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}

                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<div class="ui-icon ui-icon-sm ion ion-md-power bg-danger border-0 text-white"></div>--}}
                                    {{--<div class="media-body line-height-condenced ml-3">--}}
                                        {{--<div class="text-dark">Server restarted</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--19h ago--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}

                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<div class="ui-icon ui-icon-sm ion ion-md-warning bg-warning border-0 text-dark"></div>--}}
                                    {{--<div class="media-body line-height-condenced ml-3">--}}
                                        {{--<div class="text-dark">99% server load</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--Etiam nec fringilla magna. Donec mi metus.--}}
                                        {{--</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--20h ago--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}
                            {{--</div>--}}

                            {{--<a href="javascript:void(0)" class="d-block text-center text-light small p-2 my-1">Show all notifications</a>--}}
                        {{--</div>--}}
                    {{--</div>--}}

                    {{--<div class="demo-navbar-messages nav-item dropdown mr-lg-3">--}}
                        {{--<a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">--}}
                            {{--<i class="ion ion-ios-mail navbar-icon align-middle"></i>--}}
                            {{--<span class="badge badge-primary badge-dot indicator"></span>--}}
                            {{--<span class="d-lg-none align-middle">&nbsp; Messages</span>--}}
                        {{--</a>--}}
                        {{--<div class="dropdown-menu dropdown-menu-right">--}}
                            {{--<div class="bg-primary text-center text-white font-weight-bold p-3">--}}
                                {{--4 New Messages--}}
                            {{--</div>--}}
                            {{--<div class="list-group list-group-flush">--}}
                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<img src="https://uxpowered.com/products/appwork/v100/assets_/img/avatars/6-small.png" class="d-block ui-w-40 rounded-circle" alt>--}}
                                    {{--<div class="media-body ml-3">--}}
                                        {{--<div class="text-dark line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--Mae Gibson - 58m ago--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}

                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<img src="https://uxpowered.com/products/appwork/v100/assets_/img/avatars/4-small.png" class="d-block ui-w-40 rounded-circle" alt>--}}
                                    {{--<div class="media-body ml-3">--}}
                                        {{--<div class="text-dark line-height-condenced">Mea et legere fuisset, ius amet purto luptatum te.</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--Kenneth Frazier - 1h ago--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}

                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<img src="https://uxpowered.com/products/appwork/v100/assets_/img/avatars/5-small.png" class="d-block ui-w-40 rounded-circle" alt>--}}
                                    {{--<div class="media-body ml-3">--}}
                                        {{--<div class="text-dark line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--Nelle Maxwell - 2h ago--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}

                                {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
                                    {{--<img src="https://uxpowered.com/products/appwork/v100/assets_/img/avatars/11-small.png" class="d-block ui-w-40 rounded-circle" alt>--}}
                                    {{--<div class="media-body ml-3">--}}
                                        {{--<div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>--}}
                                        {{--<div class="text-light small mt-1">--}}
                                            {{--Belle Ross - 5h ago--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</a>--}}
                            {{--</div>--}}

                            {{--<a href="javascript:void(0)" class="d-block text-center text-light small p-2 my-1">Show all messages</a>--}}
                        {{--</div>--}}
                    {{--</div>--}}

                    <!-- Divider -->
                    <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1"> |</div>

                    <div class="demo-navbar-user nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                              <img src="img/avatars/1.png" alt class="d-block ui-w-30 rounded-circle">
                              <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Меню управления 2</span>
                            </span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">

                            <a href="/" class="dropdown-item">
                                <i class="ion ion-ios-person text-lightest"></i> &nbsp; Сайт</a>

                            <a href="/login" class="dropdown-item">
                                <i class="ion ion-ios-mail text-lightest"></i> &nbsp; Авторизация</a>

                            {{--<a href="/register" class="dropdown-item">--}}
                                {{--<i class="ion ion-md-settings text-lightest"></i> &nbsp; Регистрация</a>--}}

                            <div class="dropdown-divider"></div>
                            <a href="/logout" class="dropdown-item">
                                <i class="ion ion-md-log-out text-info"></i> &nbsp; Выйти</a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
        <!-- / Layout navbar -->

        <!-- Layout container -->
        <div class="layout-container">

            <!-- Layout sidenav -->
            <div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-dark">

                <!-- Brand demo (see assets/css/demo/demo.css) -->
                <div class="demo-brand d-lg-none">
            <span class="demo-brand-logo bg-primary">
              <svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stop-opacity=".25" offset="0"></stop><stop stop-opacity=".1" offset=".3"></stop><stop stop-opacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlink:href="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlink:href="#a"></linearGradient></defs><path style="fill: #fff;" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
            </span>
                    <a href="index.html" class="demo-brand-name sidenav-text font-weight-normal ml-2"> </a>
                    <a href="javascript:void(0)" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
                        <i class="ion ion-md-menu align-middle"></i>
                    </a>
                </div>

                <div class="sidenav-divider mt-0"></div>

                <!-- Links -->
                <ul class="sidenav-inner py-1">
                    <li class="sidenav-item">
                        <a href="/admin" class="sidenav-link">
                            <i class="sidenav-icon ion ion-md-home"></i>
                            <div>Главная</div>
                        </a>
                    </li>

                    @php
                        if (Session::get('menu_permission')) {
                            $menu_permission = Session::get('menu_permission');
                        }

                    @endphp

                    @isset($menu_permission)
                    @if ($menu_permission == 'admin')

                    <li class="sidenav-divider mb-1"></li>

                    <li class="sidenav-item">
                        <a href="/admin/clients" class="sidenav-link">
                            <i class="sidenav-icon ion ion-md-list-box"></i>
                            <span>Список участков</span>
                        </a>
                    </li>

                    <li class="sidenav-divider mb-1"></li>

                    <li class="sidenav-item">
                        <a href="/admin/sms" class="sidenav-link">
                            <i class="sidenav-icon ion ion-ios-cellular"></i>
                            <span>Рассылка SMS</span>
                        </a>
                    </li>

                    <li class="sidenav-divider mb-1"></li>

                    <li class="sidenav-item">
                        <a href="/admin/billboard" class="sidenav-link">
                            <i class="sidenav-icon ion ion-ios-globe"></i>
                            <span>Доска объявлений</span>
                        </a>
                    </li>

                    <li class="sidenav-divider mb-1"></li>

                    <li class="sidenav-item">
                        <a href="/admin/upload/balance-list" class="sidenav-link">
                            <i class="sidenav-icon ion ion-md-cloud-upload"></i>
                            <span>Загрузка ОСВ</span>
                        </a>
                    </li>

                    <li class="sidenav-divider mb-1"></li>

                    <li class="sidenav-item">
                        <a href="/admin/logs" class="sidenav-link">
                            <i class="sidenav-icon ion ion-ios-information-circle-outline"></i>
                            <span>Статистика активности пользователей</span>
                        </a>
                    </li>

                    @endif
                    @endisset

                    <li class="sidenav-divider mb-1"></li>

                    <li class="sidenav-item" >
                        <a href="/admin/accounting-documents" class="sidenav-link">
                            <i class="sidenav-icon ion ion-ios-download"></i>
                            <span>Бухгалтерские документы</span>
                            <p></p>
                        </a>
                    </li>

                    {{--<li class="sidenav-item" >--}}
                        {{--<a href="/public/pdf/Act.pdf" target="_blank" class="sidenav-link">--}}
                            {{--<i class="sidenav-icon ion ion-ios-download"></i>--}}
                            {{--<span>Акт ревизионной комиссии</span>--}}
                            {{--<p></p>--}}
                        {{--</a>--}}
                    {{--</li>--}}


                </ul>
            </div>
            <!-- / Layout sidenav -->

            <!-- Layout content -->
            <div class="layout-content">

                    <div class="container-fluid flex-grow-1 container-p-y">
                        <h3 class="font-weight-bold py-3 mb-4">
                            @section('H3')

                            @show('H3')
                        </h3>


                        <!-- Content -->
                        <div class="container-fluid flex-grow-1 container-p-y">
                            @section('content')
                            <h4 class="font-weight-bold py-3 mb-4">
                                <span class="text-muted font-weight-light">Layouts /</span> Layout 1
                            </h4>

                            <div class="layout-example-block layout-example-block-1">
                                <code>.layout-wrapper.layout-1</code>

                                <div class="layout-example-block">
                                    <code>.layout-inner</code>

                                    <div class="layout-example-block layout-example-block-navbar">
                                        <code>.layout-navbar</code>
                                    </div>

                                    <div class="layout-example-block layout-example-block-container">
                                        <code>.layout-container</code>

                                        <div class="layout-example-block-inner">

                                            <div class="layout-example-block layout-example-block-sidenav">
                                                <code>.layout-sidenav</code>
                                            </div>

                                            <div class="layout-example-block layout-example-block-content">
                                                <code>.layout-content</code>

                                                <div class="layout-example-block bg-white">
                                                    <code class="text-dark">.container-fluid</code>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            @show('content')
                        </div>
                        <!-- / Content -->


                        <!-- Layout footer -->
                        {{--<nav style="margin-bottom: 10px;" class="layout-footer footer bg-footer-theme">--}}
                            {{--<div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">--}}
                                {{--<div class="pt-3">--}}
                                    {{--<span class="footer-text font-weight-bolder">Панель управления</span> ©--}}
                                {{--</div>--}}
                                {{--<div>--}}
                                    {{--<a href="javascript:void(0)" class="footer-link pt-3">About Us</a>--}}
                                    {{--<a href="javascript:void(0)" class="footer-link pt-3 ml-4">Help</a>--}}
                                    {{--<a href="javascript:void(0)" class="footer-link pt-3 ml-4">Contact</a>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                        {{--</nav>--}}
                        <!-- / Layout footer -->

                    </div>
                    <!-- Layout content -->

            </div>
            <!-- / Layout container -->

        </div>

        @section('footer')
        <footer class="footer bg-dark">
            {{--<div class="container">--}}

                    <div class="container-fluid d-flex flex-wrap justify-content-center text-center container-p-x pb-3">
                        <div class="pt-3">
                            <span class="footer-text font-weight-light">ТСН СНТ Загорье  © {{ date('Y') }} Все права защищены.</span>
                        </div>
                        {{--<div>--}}
                            {{--<a href="/admin" class="footer-link pt-3">Главная</a>--}}
                            {{--<a href="/admin/clients" class="footer-link pt-3 ml-4">Список участков</a>--}}
                            {{--<a href="/admin/sms" class="footer-link pt-3 ml-4">Рассылка SMS</a>--}}
                            {{--<a href="//admin/billboard" class="footer-link pt-3">Доска объявлений</a>--}}
                            {{--<a href="admin/upload/balance-list" class="footer-link pt-3">Загрузка ОСВ</a>--}}
                            {{--<a href="/admin/logs" class="footer-link pt-3">Статистика активности пользователей</a>--}}

                        {{--</div>--}}
                    </div>
            {{--</div>--}}
        </footer>
        @show('footer')

        {{--<footer class="footer">--}}
            {{--<div class="container">--}}
                {{--<nav class="layout-footer footer bg-footer-theme">--}}
                    {{--<div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">--}}
                        {{--<div class="pt-3">--}}
                            {{--<span class="footer-text font-weight-bolder">Панель управления</span> ©--}}
                        {{--</div>--}}
                        {{--<div>--}}
                            {{--<a href="javascript:void(0)" class="footer-link pt-3">About Us</a>--}}
                            {{--<a href="javascript:void(0)" class="footer-link pt-3 ml-4">Help</a>--}}
                            {{--<a href="javascript:void(0)" class="footer-link pt-3 ml-4">Contact</a>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</nav>--}}
            {{--</div>--}}
        {{--</footer>--}}

        <!-- Overlay -->
        {{--<div class="layout-overlay layout-sidenav-toggle">BNM</div>--}}
    </div>
    <!-- / Layout wrapper -->


    <!-- Core scripts -->
    <script src="/public/vendor/appwork/libs/popper/popper.js"></script>
    <script src="/public/vendor/appwork/js/bootstrap.js"></script>
    <script src="/public/vendor/appwork/js/sidenav.js"></script>

    <!-- Libs -->
    <script src="/public/vendor/appwork/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="/public/vendor/appwork/libs/datatables/datatables.js"></script>


    <!-- Layout -->
    <script src="/public/vendor/appwork/js/layout.js"></script>
    {{--<script src="/public/vendor/appwork/js/datatables.js"></script>--}}
</div>
</body>

</html>
