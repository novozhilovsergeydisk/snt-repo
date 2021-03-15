{{--@extends('admin.layouts.index')--}}
@extends('admin.layouts.vendor.phpsmart.index')

@section('title', 'Логи пользователей')
@section('keywords', 'Логи пользователей')
@section('description', 'Логи пользователей')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('menu_systems', 'active')--}}
{{--@section('H1', 'Статистика активности пользователей')--}}
@section('welcome-j', 'SMS mess')

{{--@if (isset($logs_active))--}}
    {{--@section('logs_active', $logs_active)--}}
{{--@endif--}}

@section('content')

    <script>
        $(document).ready(function() {
            $('#stat').DataTable(
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

    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="card mb-4">
            <div class="card-header">
                <h3 class="panel-heading">
                    <span class="text-muted">Общая статистика активности пользователей</span>
                </h3>
            </div>
            <div class="card-body">
                <section class="wrapper">
                    <div class="bg-white-only bg-auto no-border-xs">
                        @if (isset($logs))
                            <table style="" id="example" class="display compact" cellspacing="0" width="100%">
                                <thead class="thead-dark">
                                <tr>
                                    <th>Участок</th>
                                    <th>Дата посещения</th>
                                    <th>session id</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($logs as $log)
                                    @if($log->user_id != 201)
                                        <tr>
                                            <td>{{ $log->user_id }}</td>
                                            <td>{{ $log->visit_date }}</td>
                                            <td>{{ $log->session }}</td>
                                        </tr>
                                    @endif
                                @endforeach
                                </tbody>
                            </table>
                        @endif
                    </div>
                </section>
            </div>

            <div class="card-header">
                <h3 class="panel-heading">
                    <span class="text-muted">Статистика посещения страницы Устав СНТ</span>
                </h3>
            </div>
            <div class="card-body">
                <section class="wrapper">
                    <div class="bg-white-only bg-auto no-border-xs">
                        @if (isset($stat))
                            <table style="" id="stat" class="display compact" cellspacing="0" width="100%">
                                <thead class="thead-dark">
                                <tr>
                                    <th>Участок</th>
                                    <th>Дата посещения</th>
                                    <th>Раздел сайта</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($stat as $log)
                                    @if($log->user_id != 2011)
                                        <tr>
                                            <td>{{ $log->user_id }}</td>
                                            <td>{{ $log->visit_date }}</td>
                                            <td>{{ $log->session }}</td>
                                        </tr>
                                    @endif
                                @endforeach
                                </tbody>
                            </table>
                        @endif
                    </div>
                </section>
            </div>
        </div>
    </div>
@endsection
