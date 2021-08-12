{{--@extends('admin.layouts.vendor.appwork.index')--}}
@extends('admin.layouts.vendor.phpsmart.index')
@section('title', 'Личный кабинет. Общая информация.')
@section('keywords', 'личный кабинет')
@section('description', 'личный кабинет')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
@section('welcome-j', $actual_date)

{{--@if (isset($upload_active))--}}
    {{--@section('upload_active', $upload_active)--}}
{{--@endif--}}

@section('content')
    <style>
        li {
            list-style-type: none; /* Убираем маркеры */
        }
    </style>

    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="card mb-4">
            <div class="card-header">
                <h3 class="panel-heading">
                    <span class="text-muted">Общая информация</span>
                </h3>

                <div>
                    <h4>Объявление</h4>
                    <h5>4 сентября в 16-00</h5>
                    <p><i>Возле правления СНТ состоится</i></p>
                    <h6>очередное общее собрание</h6>

                    <p>Повестка дня</p>
                    <ul>
                        <li>1. Отчет правления о проделанной работе за период 2020-2021гг</li>
                        <li>2. Отчет ревизионной комиссии за период 2020-2021гг</li>
                        <li>3. Утверждение расходной сметы на 2021-2022гг</li>
                        <li>4. Прием в члены СНТ новых собственников участков по списку</li>
                        <li>5. Разное</li>
                    </ul>

                    <p></p>Регистрация участников с 15-30
                    <p></p>Явка строго обязательна
                    <div>
                        В случае отсутствия возможности участия в собрании, просим<br />
                        Вас оформить простую письменную форму доверенности<br />
                        Вашему доверенному лицу.
                    </div>

                    <p>С Уважением!</p>
                    <div>Правление ТСН «СНТ Загорье»</div>
                </div>
            </div>

            <div class="card-body">
                <h4 class="panel-heading">
                    <span class="text-muted">Показания электросчетчика <strong><i>{{ $electro_counter }}</i></strong> на {{$created_at}}.</span>
                </h4>

                <table class="table">
                    <thead>
                        <th>
                            Т1 день
                        </th>
                        <th>
                            Т2 ночь
                        </th>
                        <th>
                            Сумма (Общий тариф)
                        </th>

                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                {{ $m }}
                            </td>
                            <td>
                                {{ $l }}
                            </td>
                            <td>
                                {{ $summ  }}
                            </td>
                        </tr>
                    </tbody>

                </table>

                {{--<p>--}}
                    {{--20 июня 2020г. в 17-00, на площадке возле правления,--}}
                    {{--<br>состоится собрание членов ТСН СНТ «Загорье»--}}
                    {{--<br>повестка дня:--}}
                {{--</p>--}}

                {{--<ol>--}}
                    {{--<li>--}}
                        {{--Выборы председателя правления--}}
                        {{--<br><strong>кандидаты:</strong>--}}
                        {{--<br>Родченков Никита Сергеевич уч.87--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--Выборы в состав правления--}}
                        {{--<br><strong>кандидаты:</strong>--}}
                        {{--<br> Арапова Раиса Николаевна уч.148--}}
                        {{--<br> Шпнева Елена Ивановна уч.96--}}
                        {{--<br> Сусоев Алексей Михайлович уч.112--}}
                        {{--<br> Шутов Николай Филиппович уч.159--}}
                        {{--<br> Борисов Борис Борисович уч.98--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--Отчет ревизионной комиссии, утверждение сметы 2020-2021 гг--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--Разное--}}
                        {{--<br>Регистрация участников с 16-30. Ношение масок и перчаток, а также соблюдение дистанции, обязательно!--}}
                    {{--</li>--}}
                {{--</ol>--}}

                {{--<p>--}}
                {{--<h3>--}}
                    {{--20 июня 2020г. в 17-00, на площадке возле правления, состоится собрание членов ТСН СНТ «Загорье»--}}
                {{--</h3>--}}
                {{--</p>--}}

                {{--<p><strong>Повестка дня:</strong></p>--}}

                {{--<p>--}}
                    {{--Выборы председателя правления, кандидаты:--}}
                {{--<ul>--}}
                    {{--<li>Родченков Никита Сергеевич уч.87</li>--}}
                {{--</ul>--}}
                {{--</p>--}}

                {{--<p>--}}
                    {{--Выборы в состав правления, кандидаты:--}}
                {{--<ul>--}}
                    {{--<li>Арапова Раиса Николаевна уч.148</li>--}}
                    {{--<li>Шпнева Елена Ивановна уч.96</li>--}}
                    {{--<li>Сусоев Алексей Михайлович уч.112</li>--}}
                    {{--<li>Шутов Николай Филиппович уч.159</li>--}}
                    {{--<li>Борисов Борис Борисович уч.98</li>--}}
                {{--</ul>--}}
                {{--</p>--}}

                {{--<p><strong>Отчет ревизионной комиссии, утверждение сметы</strong></p>--}}

                {{--<p><strong>Разное</strong></p>--}}

                {{--<p><strong>Регистрация участников с 16-30. Ношение масок и перчаток, а также соблюдение дистанции, обязательно!</strong></p>--}}
            {{----}}
            </div>

            <div class="card-body">
                <p>
                    <span class="text-muted font-weight-bolder">Логин:</span> <span>@if ($name) {{ $name }} @endif</span>
                </p>
                <p>
                    <span class="text-muted font-weight-bolder">ФИО:</span>  <span>@if ($fio) {{ $fio }} @endif</span>
                </p>
                <p>
                    <span class="text-muted font-weight-bolder">E-mail:</span> <span>@if ($email) {{ $email }} @endif</span>
                </p>

                @if ($depts)
                <h4 class="text-muted text-ellipsis">@yield('welcome-j')</h4>
                <hr>
                <table class="table table-striped table-bordered table-responsive-sm">
                    <thead>
                    <tr>
                        <th>
                            Целевое назначение
                        </th>
                        <th>
                            Начислено
                        </th>
                        <th>
                            Оплачено
                        </th>
                        <th>
                            Задолженность
                        </th>
                        <th>
                            Переплата
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php
                    $accruals = 0;
                    $payments = 0;
                    ?>

                    @foreach($depts as $row)

                        <tr>
                            <td>
                                {{ $row->name }}
                            </td>
                            <td>
                                {{ $row->accruals }}
                            </td>
                            <td>
                                {{ $row->payments }}
                            </td>
                            <td>
                                @if ($row->accruals > $row->payments)
                                    <?php $accruals += ($row->accruals - $row->payments); ?>
                                    <span class="green">{{ $row->accruals - $row->payments }}</span>
                                @endif
                            </td>
                            <td>
                                @if ($row->accruals < $row->payments)
                                    <?php $payments += ($row->accruals - $row->payments); ?>
                                    <span class="red">{{ $row->accruals - $row->payments }}</span>
                                @endif
                            </td>
                        </tr>

                    @endforeach

                    <tr>
                        <td colspan="3"><span class="bold">Итого:</span></td>
                        <td><span class="green bold">{{ $accruals }}</span></td>
                        <td><span class="red bold">{{ $payments }}</span></td>
                    </tr>

                    <tr>
                        <?php
                        $totals_debts = 0;

                        if (abs($accruals) > abs($payments))  {
                            $totals_debts = -(abs($accruals) - abs($payments));
                        }

                        if (abs($accruals) < abs($payments))  {
                            $totals_debts = abs($payments) - abs($accruals);
                        }
                        ?>

                        <td colspan="3"><span class="bold">Баланс:</span></td>
                        <td class="center" colspan="4"><span class="center {{--green--}} bold" style="font-weight: bold;">{{ $totals_debts }}</span></td>
                    </tr>
                    </tbody>
                </table>
            @endif
            </div>
        </div>
    </div>
@endsection

{{--@section('footer')--}}

{{--@endsection--}}