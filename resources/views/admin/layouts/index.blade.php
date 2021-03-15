<!DOCTYPE html>
<html lang="ru">
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
    <meta name="Author" lang="ru" content="Новожилов Сергей!" />
    <link rel="icon" type="image/x-icon" href="http://sntzagorie.ru/favicon.ico">

    <link rel="dns-prefetch" href="@yield('dns_prefetch')" />
    {{--<link rel="icon" href="/public/img/favicon.ico" type="image/x-icon" />--}}
    {{--<link rel="icon" href="/public/e-commerce/assets/img/favicon.ico" type="image/x-icon" />--}}
    <link rel="stylesheet" href="/public/css/cobra.css" />
    <link rel="stylesheet" href="/public/css/custom.css" />

    <link rel="stylesheet" href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" />

    <script src="/public/js/cobra.js" type="text/javascript"></script>
    {{--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>--}}

    <script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js" type="text/javascript"></script>

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
<div id="app" class="app app-aside-fixed">

@section('header')
<!-- header  -->
<header id="header" class="app-header navbar" role="menu">
    <!-- navbar header  -->
    <div class="navbar-header bg-black">
        <button class="pull-right visible-xs dk">
            <i class="fa fa-cog"></i>
        </button>
        <button class="pull-right visible-xs">
            <i class="fa fa-bars"></i>
        </button>
        <!-- brand  -->
        <a href="/admin">
            <img src="/public/img/logo.png">
        </a>
        <!-- / brand  -->
    </div>
    <!-- / navbar header  -->

    <!-- navbar collapse  -->
    <div class="app-header wrapper navbar-collapse box-shadow bg-white-only">
        <div class="col-xs-8 col-xs-12">
            <h1 class="m-n font-thin h3 text-black">@yield('H1')</h1>
            <h3>@section('h3') @show</h3>
        </div>

        <div class="col-sm-4 col-xs-12 text-right">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle clear">
                        <span class="">Меню управления</span>
                        <b class="caret"></b>
                    </a>
                    <!-- dropdown  -->
                    <ul class="dropdown-menu animated fadeInRight w-full">
                        <li>
                            <a href="/">
                                <span>Сайт</span>
                            </a>
                        </li>

                        <li>
                            <a href="/login">
                                <span>Авторизация</span>
                            </a>
                        </li>

                        <li>
                            <a href="/register">
                                <span>Регистрация</span>
                            </a>
                        </li>

                        <li class="divider"></li>

                        <li>
                            <a href="/logout">
                                Выйти
                            </a>

                            <form id="logout-form" action="/logout" method="POST" style="display: block;">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            </form>
                        </li>
                    </ul>
                    <!-- / dropdown  -->
                </li>
            </ul>
        </div>



    </div>
    <!-- / navbar collapse  -->
</header>
<!-- / header  -->
@show

@section('aside')
<!-- aside  -->
<aside id="aside" class="app-aside hidden-xs">
    <div class="aside-wrap-main b-b b-dark">
        <div class="navi-wrap">
            @include('admin.layouts.partials.nav')
        </div>

    </div>

    <!-- aside wrap -->
    {{--@include('admin.layouts.parts.aside-wrap')--}}
</aside>
<!-- / aside  -->
@show




<!-- content  -->
<div id="content" class="app-content" role="main">
    <div class="app-content-body" id="app-content-body">
        <!-- main content  -->
        @section('content')
        <div>
            Here content
        </div>
        @show
        <!-- / main content  -->
    </div>
</div>
<!-- /content  -->


@section('footer')
<!-- footer  -->
<footer id="footer" class="app-footer" role="footer">
    <div class="wrapper b-t bg-light">
        <span class="pull-right">{{--Система--}} {{--сайтом--}}
            {{--<a href="#" class="m-l-sm text-muted"> <i class="fa fa-asterisk"></i></a>--}}
        </span>
        ТСН СНТ Загорье  © {{ date('Y') }} Все права защищены
    </div>
</footer>
<!-- / footer  -->
@show
</div>

</body>
</html>
