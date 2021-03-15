{{--@extends('admin.layouts.index')--}}
@extends('admin.layouts.vendor.phpsmart.index')
@section('title', 'Список участков')
@section('keywords', 'Список участков')
@section('description', 'Список участков')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('menu_systems', 'active')--}}
{{--@section('H3', 'Список участков')--}}
{{--@section('welcome-j', $date_now)--}}


{{--@if (isset($clients_active))--}}
    {{--@section('clients_active', $clients_active)--}}
{{--@endif--}}

@section('content')
    <script>
        $(document).ready(function() {
            $('#example').DataTable(
                {
                    stateSave: true,
                order: [],
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
                    <span class="text-muted">Список участков</span>
                </h3>
            </div>
            <div class="card-body">
                <section class="wrapper">
        <div class="bg-white-only  no-border-xs">
            {{--<p>HI.Joker</p>--}}

            @if (isset($clients))
                <table style="" id="example" class="display compact" cellspacing="0" width="100%">
                    <thead class="thead-dark">
                    <tr>
                        <th>
                            Участок
                        </th>
                        <th>
                            code_1c
                        </th>

                        <th>
                            ФИО
                        </th>

                        {{--<th>--}}
                        {{--Фамилия--}}
                        {{--</th>--}}
                        {{--<th>--}}
                        {{--Имя--}}
                        {{--</th>--}}
                        {{--<th>--}}
                        {{--Отчество--}}
                        {{--</th>--}}
                        <th>
                            E-mail
                        </th>
                        <th>
                            Задолженность
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($clients /*->sortBy('email')*/ as $client)
                        <tr>
                            <td>
                                {{ $client->plot }}
                            </td>
                            <td>
                                {{ $client->code_1c }}
                            </td>
                            {{--<td>--}}
                            {{--{{ $client->name }}--}}
                            {{--</td>--}}
                            <td>
                                {{ $client->last_name }} {{ $client->first_name }} {{ $client->middle_name }}
                            </td>
                            {{--<td>--}}
                            {{----}}
                            {{--</td>--}}
                            {{--<td>--}}
                            {{----}}
                            {{--</td>--}}
                            <td>
                                {{ $client->email }}
                            </td>
                            <td>

                                <a href="/admin/debts/{{ $client->plot }}">
                                    <i class="sidenav-icon ion ion-md-link"></i>
                                    {{--подробно --}}
                                </a>

                                <i><?php echo number_format($depts[$client->plot], 2, ',', ' '); ?> р.</i>
                            </td>
                        </tr>

                    @endforeach
                    </tbody>
                </table>
                {{--{{ $clients }}--}}
            @endif

            {{--@php--}}
                {{--dump($depts);--}}
            {{--@endphp--}}

        </div>
    </section>
            </div>
        </div>
    </div>
@endsection



