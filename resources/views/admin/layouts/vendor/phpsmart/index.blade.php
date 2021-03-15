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
<div class="page-loader">
  <div class="bg-primary"></div>
</div>

<!-- Layout wrapper -->
<div class="layout-wrapper layout-2">
  <div class="layout-inner">

    <!-- Layout sidenav -->
    <div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-sidenav-theme">

      <!-- Brand demo (see assets/css/demo/demo.css) -->
      <div class="demo-brand">
        <a href="/admin">
          <img src="/public/img/logo.png">
        </a>
        <a href="index.html" class="demo-brand-name sidenav-text font-weight-normal ml-2"> </a>
        <a href="javascript:void(0)" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
          <i class="ion ion-md-menu align-middle"></i>
        </a>
      </div>

      {{--<div class="demo-brand">--}}
        {{--<a href="/admin">--}}
          {{--<img src="/public/img/logo.png">--}}
        {{--</a>--}}
      {{--</div>--}}

    <div class="sidenav-divider mt-0"></div>

    <!-- Links -->
      <ul class="sidenav-inner py-1 ps ps--active-y">
        <li class="sidenav-item active__">
          <a href="/admin" class="sidenav-link {{ Request::path() == 'admin' ? 'active' : '' }}">
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
          <a href="/admin/clients" class="sidenav-link {{ Request::path() == 'admin/clients' ? 'active' : '' }}">
            <i class="sidenav-icon ion ion-md-list-box"></i>
            <span>Список участков</span>
          </a>
        </li>

        <li class="sidenav-divider mb-1"></li>

        <li class="sidenav-item">
          <a href="/admin/sms" class="sidenav-link {{ Request::path() == 'admin/sms' ? 'active' : '' }}">
            <i class="sidenav-icon ion ion-ios-cellular"></i>
            <span>Рассылка SMS</span>
          </a>
        </li>

        <li class="sidenav-divider mb-1"></li>

        <li class="sidenav-item">
          <a href="/admin/billboard" class="sidenav-link {{ Request::path() == 'admin/billboard' ? 'active' : '' }}">
            <i class="sidenav-icon ion ion-ios-globe"></i>
            <span>Доска объявлений</span>
          </a>
        </li>

        <li class="sidenav-divider mb-1"></li>

        <li class="sidenav-item">
          <a href="/admin/upload/balance-list" class="sidenav-link {{ Request::path() == 'admin/upload/balance-list' ? 'active' : '' }}">
            <i class="sidenav-icon ion ion-md-cloud-upload"></i>
            <span>Загрузка ОСВ</span>
          </a>
        </li>

        <li class="sidenav-divider mb-1"></li>

        <li class="sidenav-item">
          <a href="/admin/logs" class="sidenav-link {{ Request::path() == 'admin/logs' ? 'active' : '' }}">
            <i class="sidenav-icon ion ion-ios-information-circle-outline"></i>
            <span>Статистика активности пользователей</span>
          </a>
        </li>

          @endif
        @endisset

        <li class="sidenav-divider mb-1"></li>

        <li class="sidenav-item" >
          <a href="/admin/accounting-documents" class="sidenav-link {{ Request::path() == 'admin/accounting-documents' ? 'active' : '' }}">
            <i class="sidenav-icon ion ion-ios-download"></i>
            <span>Бухгалтерские документы</span>
            <p></p>
          </a>
        </li>

        <li class="sidenav-divider mb-1"></li>

        <li class="sidenav-item" >
          <a href="/admin/typical-project" class="sidenav-link {{ Request::path() == 'admin/typical-project' ? 'active' : '' }}">
            <i class="sidenav-icon ion ion-ios-download"></i>
            <strong class="">Устав СНТ</strong>
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

        <!-- Links -->



    </div>
    <!-- / Layout sidenav -->

    <!-- Layout container -->
    <div class="layout-container">
      <!-- Layout navbar -->
      <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center container-p-x bg-navbar-theme" id="layout-navbar">

        <!-- Brand demo (see assets/css/demo/demo.css) -->
        <a href="/admin" class="navbar-brand demo-brand d-lg-none py-0">
            <span class="demo-brand-logo bg-primary">
              <svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><lineargradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stop-opacity=".25" offset="0"></stop><stop stop-opacity=".1" offset=".3"></stop><stop stop-opacity="0" offset=".9"></stop></lineargradient><lineargradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlink:href="#a"></lineargradient><lineargradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlink:href="#a"></lineargradient></defs><path style="fill: #fff;" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
            </span>
          <span class="demo-brand-name font-weight-normal ml-2">PHPSMART</span>
        </a>

        <!-- Sidenav toggle (see assets/css/demo/demo.css) -->
        <div class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
          <a class="nav-item nav-link px-0 ml-2 ml-lg-0" href="/admin">
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
            {{--<a class="nav-link dropdown-toggle hide-arrow" href="https://uxpowered.com/products/appwork/v100/html-demo/dashboards_dashboard-2.html#" data-toggle="dropdown">--}}
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
            {{--<a class="nav-link dropdown-toggle hide-arrow" href="https://uxpowered.com/products/appwork/v100/html-demo/dashboards_dashboard-2.html#" data-toggle="dropdown">--}}
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
            {{--<img src="/public/vendor/phpsmart/images/6-small.png" class="d-block ui-w-40 rounded-circle" alt="">--}}
            {{--<div class="media-body ml-3">--}}
            {{--<div class="text-dark line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>--}}
            {{--<div class="text-light small mt-1">--}}
            {{--Mae Gibson &nbsp;צnbsp; 58m ago--}}
            {{--</div>--}}
            {{--</div>--}}
            {{--</a>--}}

            {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
            {{--<img src="/public/vendor/phpsmart/images/4-small.png" class="d-block ui-w-40 rounded-circle" alt="">--}}
            {{--<div class="media-body ml-3">--}}
            {{--<div class="text-dark line-height-condenced">Mea et legere fuisset, ius amet purto luptatum te.</div>--}}
            {{--<div class="text-light small mt-1">--}}
            {{--Kenneth Frazier &nbsp;צnbsp; 1h ago--}}
            {{--</div>--}}
            {{--</div>--}}
            {{--</a>--}}

            {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
            {{--<img src="/public/vendor/phpsmart/images/5-small.png" class="d-block ui-w-40 rounded-circle" alt="">--}}
            {{--<div class="media-body ml-3">--}}
            {{--<div class="text-dark line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>--}}
            {{--<div class="text-light small mt-1">--}}
            {{--Nelle Maxwell &nbsp;צnbsp; 2h ago--}}
            {{--</div>--}}
            {{--</div>--}}
            {{--</a>--}}

            {{--<a href="javascript:void(0)" class="list-group-item list-group-item-action media d-flex align-items-center">--}}
            {{--<img src="/public/vendor/phpsmart/images/11-small.png" class="d-block ui-w-40 rounded-circle" alt="">--}}
            {{--<div class="media-body ml-3">--}}
            {{--<div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>--}}
            {{--<div class="text-light small mt-1">--}}
            {{--Belle Ross &nbsp;צnbsp; 5h ago--}}
            {{--</div>--}}
            {{--</div>--}}
            {{--</a>--}}
            {{--</div>--}}

            {{--<a href="javascript:void(0)" class="d-block text-center text-light small p-2 my-1">Show all messages</a>--}}
            {{--</div>--}}
            {{--</div>--}}

            {{--<!-- Divider -->--}}
            {{--<div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>--}}

            <div class="demo-navbar-user nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                    {{--<img src="/public/vendor/phpsmart/images/1.png" alt="" class="d-block ui-w-30 rounded-circle">--}}
                    <span class="px-1 mr-lg-2 ml-2 ml-lg-0">
                      Меню управления
                    </span>
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
                  <i class="ion ion-ios-log-out text-danger"></i> &nbsp; Выйти</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- / Layout navbar -->

      <!-- Layout content -->
      <div class="layout-content">
        @section('H3')
          <h3 class="card-header">
            @show('H3')

          </h3>
          <!-- Content -->
        @section('content')
          <h4 class="media align-items-center font-weight-bold py-3 mb-4">
            <img src="/public/vendor/phpsmart/images/1.png" alt="" class="ui-w-50 rounded-circle">
            <div class="media-body ml-3">
              Welcome back, Mike!
              <div class="text-muted text-tiny mt-1">
                <small class="font-weight-normal">Today is Tuesday, 8 February 2018</small>
              </div>
            </div>
          </h4>

          <hr class="container-m--x mt-0 mb-4">

          <div class="row">
            <div class="d-flex col-xl-6 align-items-stretch">
              <div class="card d-flex w-50 mb-4">
                <input type="text" class="form-control" id="datepicker-base" placeholder="Datepicker">
              </div>
              <div class="card d-flex w-50 mb-4">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="d-flex col-xl-6 align-items-stretch">
              <div class="card d-flex w-25 mb-4">
                <input type="text" class="form-control">
              </div>
              <div class="card d-flex w-25 mb-4">
                <input type="text" class="form-control">
              </div>
              <div class="card d-flex w-25 mb-4">
                <input type="text" class="form-control">
              </div>
              <div class="card d-flex w-25 mb-4">
                <input type="text" class="form-control">
              </div>
            </div>
          </div>


          <div class="row">

            <div class="d-flex col-xl-6 align-items-stretch">

              <!-- Stats + Links -->
              <div class="card d-flex w-100 mb-4">
                <div class="row no-gutters row-bordered row-border-light h-100">
                  <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

                    <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                      <i class="lnr lnr-chart-bars display-4 d-block text-primary"></i>
                      <span class="media-body d-block ml-3">
                          <span class="text-big font-weight-bolder">$1,342.11</span>
                          <br>
                          <small class="text-muted">Earned this month</small>
                        </span>
                    </a>

                  </div>
                  <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

                    <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                      <i class="lnr lnr-hourglass display-4 d-block text-primary"></i>
                      <span class="media-body d-block ml-3">
                          <span class="text-big">
                            <span class="font-weight-bolder">152</span> Working Hours</span>
                          <br>
                          <small class="text-muted">Spent this month</small>
                        </span>
                    </a>

                  </div>
                  <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

                    <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                      <i class="lnr lnr-checkmark-circle display-4 d-block text-primary"></i>
                      <span class="media-body d-block ml-3">
                          <span class="text-big">
                            <span class="font-weight-bolder">54</span> Tasks</span>
                          <br>
                          <small class="text-muted">Completed this month</small>
                        </span>
                    </a>

                  </div>
                  <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

                    <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                      <i class="lnr lnr-license display-4 d-block text-primary"></i>
                      <span class="media-body d-block ml-3">
                          <span class="text-big">
                            <span class="font-weight-bolder">6</span> Projects</span>
                          <br>
                          <small class="text-muted">Done this month</small>
                        </span>
                    </a>

                  </div>
                </div>
              </div>
              <!-- / Stats + Links -->

            </div>
            <div class="d-flex col-xl-6 align-items-stretch">

              <!-- Daily progress chart -->
              <div class="card w-100 mb-4">
                <div class="card-body">
                  <button type="button" class="btn btn-sm btn-outline-primary icon-btn float-right">
                    <i class="ion ion-md-sync"></i>
                  </button>
                  <div class="text-muted small">Working hours</div>
                  <div class="text-big">Daily Progress</div>
                </div>
                <div class="px-2 mt-4">
                  <div class="w-100" style="height: 120px;">
                    <canvas id="statistics-chart-1" width="424" height="120" style="display: block; width: 424px; height: 120px;"></canvas>
                  </div>
                </div>
              </div>
              <!-- / Daily progress chart -->

            </div>

            <div class="col-xl-5">

              <!-- Tasks -->
              <div class="card mb-4">
                <h6 class="card-header with-elements">
                  <div class="card-header-title">Tasks</div>
                  <div class="card-header-elements ml-auto">
                    <button type="button" class="btn btn-default btn-xs md-btn-flat">Show more</button>
                  </div>
                </h6>
                <div class="card-body">
                  <p class="text-muted small">Today</p>
                  <div class="custom-controls-stacked">
                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <span class="custom-control-label">Buy products</span>
                      <span class="ui-todo-badge badge badge-outline-default font-weight-normal ml-2">58 mins left</span>
                    </label>
                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <span class="custom-control-label">Reply to emails</span>
                    </label>
                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <span class="custom-control-label">Write blog post</span>
                      <span class="ui-todo-badge badge badge-outline-default font-weight-normal ml-2">20 hours left</span>
                    </label>
                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" checked="">
                      <span class="custom-control-label">Wash my car</span>
                    </label>
                  </div>
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <p class="text-muted small">Tomorrow</p>
                  <div class="custom-controls-stacked">
                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <span class="custom-control-label">Buy antivirus</span>
                    </label>
                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <span class="custom-control-label">Jane's Happy Birthday</span>
                    </label>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Type your task">
                    <div class="input-group-append">
                      <button type="button" class="btn btn-primary">Add</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- / Tasks -->

            </div>
            <div class="col-xl-7">

              <!-- Stats -->
              <div class="row">
                <div class="col-md-6">

                  <div class="card mb-4">
                    <h6 class="card-header with-elements border-0 pr-0 pb-0">
                      <div class="card-header-title">Revenue</div>
                      <div class="card-header-elements ml-auto">
                        <div class="btn-group mr-3">
                          <button type="button" class="btn btn-sm btn-default icon-btn borderless btn-round md-btn-flat dropdown-toggle hide-arrow" data-toggle="dropdown">
                            <i class="ion ion-ios-more"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right" id="revenue-dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)">Action 1</a>
                            <a class="dropdown-item" href="javascript:void(0)">Action 2</a>
                          </div>
                        </div>
                      </div>
                    </h6>
                    <div class="mt-5">
                      <div style="height:120px;">
                        <canvas id="statistics-chart-2" width="246" height="120" style="display: block; width: 246px; height: 120px;"></canvas>
                      </div>
                    </div>
                    <div class="card-footer text-center py-3">
                      <div class="row">
                        <div class="col">
                          <div class="text-muted small">Target</div>
                          <strong class="text-big">$2,000.00</strong>
                        </div>
                        <div class="col">
                          <div class="text-muted small">Last month</div>
                          <strong class="text-big">$2,835.22</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-md-6">

                  <div class="card pt-2 mb-4">
                    <div class="d-flex align-items-center position-relative mt-4" style="height:110px;">
                      <div class="w-100 position-absolute" style="height:110px;top:0;">
                        <canvas id="statistics-chart-3" width="246" height="110" style="display: block; width: 246px; height: 110px;"></canvas>
                      </div>
                      <div class="w-100 text-center text-large">54</div>
                    </div>
                    <div class="text-center pb-2 my-3">
                      Tasks completed
                    </div>
                    <div class="card-footer text-center py-3">
                      <div class="row">
                        <div class="col">
                          <div class="text-muted small">Target</div>
                          <strong class="text-big">100</strong>
                        </div>
                        <div class="col">
                          <div class="text-muted small">Last month</div>
                          <strong class="text-big">85</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-md-6">

                  <div class="card mb-4">
                    <h6 class="card-header with-elements">
                      <div class="card-header-title">Task to Do</div>
                      <div class="card-header-elements ml-auto">
                        <button type="button" class="btn btn-outline-secondary btn-xs icon-btn borderless">></button>
                      </div>
                    </h6>
                    <div class="card-body d-flex justify-content-between">
                      <div class="text-large">14</div>
                      <div class="text-right small">
                        10%
                        <br>Last week: 12
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-md-6">

                  <div class="card mb-4">
                    <h6 class="card-header with-elements">
                      <div class="card-header-title">Overdue tasks</div>
                      <div class="card-header-elements ml-auto">
                        <button type="button" class="btn btn-outline-secondary btn-xs icon-btn borderless">></button>
                      </div>
                    </h6>
                    <div class="card-body d-flex justify-content-between">
                      <div class="text-large">5</div>
                      <div class="text-right small">
                        10%
                        <br>Last week: 12
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- / Stats -->

            </div>
          </div>

          <hr class="container-m--x mt-0 mb-4">

          <h6 class="font-weight-semibold mb-4">Current Progress</h6>

          <!-- Project progress -->

          <div class="card pb-4 mb-2">
            <div class="row no-gutters align-items-center">
              <div class="col-12 col-md-5 px-4 pt-4">
                <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a>
                <br>
                <small class="text-muted">Create the new product design</small>
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                <strong>In Progress</strong>
                <br> 3D modeling
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                12 Jan 2018
                <br> 4:45
              </div>
              <div class="col-4 col-md-3 px-4 pt-4">
                <div class="text-right text-muted small">60%</div>
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar" style="width: 60%;"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card pb-4 mb-2">
            <div class="row no-gutters align-items-center">
              <div class="col-12 col-md-5 px-4 pt-4">
                <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a>
                <br>
                <small class="text-muted">Design and development</small>
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                <strong>In Progress</strong>
                <br> Coding
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                19 Jan 2018
                <br> 8:44
              </div>
              <div class="col-4 col-md-3 px-4 pt-4">
                <div class="text-right text-muted small">84%</div>
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar" style="width: 84%;"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card pb-4 mb-2">
            <div class="row no-gutters align-items-center">
              <div class="col-12 col-md-5 px-4 pt-4">
                <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a>
                <br>
                <small class="text-muted">Create the concept</small>
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                <strong>Done</strong>
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                1 Feb 2018
              </div>
              <div class="col-4 col-md-3 px-4 pt-4">
                <div class="text-right text-muted small">100%</div>
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar" style="width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card pb-4 mb-4">
            <div class="row no-gutters align-items-center">
              <div class="col-12 col-md-5 px-4 pt-4">
                <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a>
                <br>
                <small class="text-muted">SEO enchantsment</small>
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                <strong>In Progress</strong>
                <br> Optimizing markup
              </div>
              <div class="col-4 col-md-2 text-muted small px-4 pt-4">
                12 Jan 2018
                <br> 10:21
              </div>
              <div class="col-4 col-md-3 px-4 pt-4">
                <div class="text-right text-muted small">23%</div>
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar" style="width: 23%;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- / Project progress -->

          <hr class="container-m--x mt-0 mb-4">

          <div class="row">
            <div class="col-md-6">

              <!-- Messages -->
              <div class="card mb-4">
                <h6 class="card-header">Messages</h6>
                <div class="card-body">
                  <div class="media pb-1 mb-3">
                    <img src="/public/vendor/phpsmart/images/6-small.png" class="d-block ui-w-40 rounded-circle" alt="">
                    <div class="media-body ml-3">
                      <div class="mb-1">
                        <strong class="font-weight-semibold">Mae Gibson</strong> &nbsp;
                        <small class="text-muted">58m ago</small>
                      </div>
                      <a href="javascript:void(0)" class="text-dark">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
                    </div>
                  </div>
                  <div class="media pb-1 mb-3">
                    <img src="/public/vendor/phpsmart/images/4-small.png" class="d-block ui-w-40 rounded-circle" alt="">
                    <div class="media-body ml-3">
                      <div class="mb-1">
                        <strong class="font-weight-semibold">Kenneth Frazier</strong> &nbsp;
                        <small class="text-muted">1h ago</small>
                      </div>
                      <a href="javascript:void(0)" class="text-dark">Mea et legere fuisset, ius amet purto luptatum te.</a>
                    </div>
                  </div>
                  <div class="media pb-1 mb-3">
                    <img src="/public/vendor/phpsmart/images/5-small.png" class="d-block ui-w-40 rounded-circle" alt="">
                    <div class="media-body ml-3">
                      <div class="mb-1">
                        <strong class="font-weight-semibold">Nelle Maxwell</strong> &nbsp;
                        <small class="text-muted">2h ago</small>
                      </div>
                      <a href="javascript:void(0)" class="text-dark">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
                    </div>
                  </div>
                  <div class="media">
                    <img src="/public/vendor/phpsmart/images/1-small.png" class="d-block ui-w-40 rounded-circle" alt="">
                    <div class="media-body ml-3">
                      <div class="mb-1">
                        <strong class="font-weight-semibold">Mike Greene</strong> &nbsp;
                        <small class="text-muted">1d ago</small>
                      </div>
                      <a href="javascript:void(0)" class="text-dark">Lorem ipsum dolor sit amet, vis erat denique in.</a>
                    </div>
                  </div>
                </div>
                <a href="javascript:void(0)" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
              </div>
              <!-- / Messages -->

            </div>
            <div class="col-md-6">

              <!-- Feed -->
              <div class="card mb-4">
                <h6 class="card-header">Feed</h6>
                <div class="card-body">
                  <div class="media pb-1 mb-3">
                    <div class="ui-feed-icon-container">
                      <span class="ui-icon ui-feed-icon ion ion-ios-thumbs-up bg-success text-white"></span>
                      <img src="/public/vendor/phpsmart/images/7-small.png" class="ui-w-40 rounded-circle" alt="">
                    </div>
                    <div class="media-body align-self-center ml-3">
                      <a href="javascript:void(0)">Alice Hampton</a> liked
                      <a href="javascript:void(0)">Article Name</a>
                      <div class="text-muted small">2 hours ago</div>
                    </div>
                  </div>
                  <div class="media pb-1 mb-3">
                    <div class="ui-feed-icon-container">
                      <span class="ui-icon ui-feed-icon ion ion-ios-text bg-secondary text-white"></span>
                      <img src="/public/vendor/phpsmart/images/8-small.png" class="ui-w-40 rounded-circle" alt="">
                    </div>
                    <div class="media-body align-self-center ml-3">
                      <a href="javascript:void(0)">Hallie Lewis</a> commented on
                      <a href="javascript:void(0)">Article Name</a>
                      <div class="my-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                      </div>
                      <div class="text-muted small">2 hours ago</div>
                    </div>
                  </div>
                  <div class="media pb-1 mb-3">
                    <div class="ui-feed-icon-container">
                      <span class="ui-icon ui-feed-icon ion ion-ios-thumbs-down bg-danger text-white"></span>
                      <img src="/public/vendor/phpsmart/images/9-small.png" class="ui-w-40 rounded-circle" alt="">
                    </div>
                    <div class="media-body align-self-center ml-3">
                      <a href="javascript:void(0)">Amanda Warner</a> disliked
                      <a href="javascript:void(0)">Article Name</a>
                      <div class="text-muted small">2 hours ago</div>
                    </div>
                  </div>
                  <div class="media">
                    <div class="ui-feed-icon-container">
                      <span class="ui-icon ui-feed-icon ion ion-md-checkmark bg-primary text-white"></span>
                      <img src="/public/vendor/phpsmart/images/11-small.png" class="ui-w-40 rounded-circle" alt="">
                    </div>
                    <div class="media-body align-self-center ml-3">
                      <a href="javascript:void(0)">Belle Ross</a> followed
                      <a href="javascript:void(0)">Nelle Maxwell</a>
                      <div class="text-muted small">2 hours ago</div>
                    </div>
                  </div>
                </div>
                <a href="javascript:void(0)" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
              </div>
              <!-- / Feed -->

            </div>
          </div>
      @show('content')
      <!-- / Content -->

        <!-- Layout footer -->
        <nav class="layout-footer footer bg-dark">
          <div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
            <div class="pt-3">
              <span class="text-muted font-weight-bolder__">ТСН СНТ Загорье  © @php echo Date('Y') @endphp Все права защищены.</span>
            </div>
            <div>
              <a href="http://sntzagorie.ru" class="footer-link pt-3">Сайт</a>
              <a href="/login" class="footer-link pt-3 ml-4">Авторизация</a>
              <a href="/register" class="footer-link pt-3 ml-4">Регистрация</a>
              <a href="/logout" class="footer-link pt-3 ml-4">Выйти</a>
            </div>
          </div>
        </nav>
        <!-- / Layout footer -->

      </div>
      <!-- Layout content -->

    </div>
    <!-- / Layout container -->

  </div>

  <!-- Overlay -->
  <div class="layout-overlay layout-sidenav-toggle"></div>
</div>
<!-- / Layout wrapper -->

<!-- Core scripts -->
<script src="/public/vendor/phpsmart/js/popper.js"></script>
<script src="/public/vendor/phpsmart/js/bootstrap.js"></script>
<script src="/public/vendor/phpsmart/js/sidenav.js"></script>

<!-- Libs -->
<script src="/public/vendor/phpsmart/js/perfect-scrollbar.js"></script>
<script src="/public/vendor/phpsmart/libs/charts/chartjs.js"></script>

<!-- Demo -->
<script src="/public/vendor/phpsmart/js/demo.js"></script>
<script src="/public/vendor/phpsmart/js/dashboards_dashboard-2.js"></script>

<script src="/public/vendor/phpsmart/js/bootstrap-datepicker.js"></script>
<script src="/public/vendor/phpsmart/js/forms_pickers.js"></script>


</body>
</html>
