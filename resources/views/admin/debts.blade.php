@extends('admin.layouts.index')
@section('title', 'Задолженность')
@section('keywords', 'Задолженность')
@section('description', 'Задолженность')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('menu_systems', 'active')--}}
@section('H1', 'Задолженность')
@section('welcome-j', 'Участок №'.$user_id.' | '.$fio)

@if (isset($clients_active))
    @section('clients_active', $clients_active)
@endif

@section('content')
    <section class="wrapper">
        {{--<div style="padding: 15px;" class="bg-white-only bg-auto no-border-xs">--}}
            {{--<p>Задолженность 5</p>--}}
            {{--<p>Участок: {{ $user_id }}</p>--}}
            {{--<p>Задолженность</p>--}}
        {{--</div>--}}

        <div class="bg-white-only bg-auto no-border-xs">
            <div class="nav-tabs-alt">
                @if ($results)
                    <h4 class="text-muted text-ellipsis">@yield('welcome-j')</h4>
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
                            <th style="text-align: center;">
                                Задолженность
                            </th>
                            <th style="text-align: center;">
                                Переплата
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <?php
                                $accruals = 0;
                                $payments = 0;
                            ?>

                            @foreach($results as $row)

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
                                <?php
//                                    $totals = (float)$accruals + (float)$payments;
//	                                $totals_accruals = '';
//	                                $totals_payments = '';
//
//                                    if ($totals > 0)  {
//	                                    $totals_accruals = $totals;
//                                    }
//
//                                    if ($totals < 0)  {
//                                        $totals_payments = $totals;
//                                    }
                                ?>

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
                                <td class="center" colspan="4"><span class="center {{--green--}} bold">{{ $totals_debts }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                @endif
            </div>
        </div>
    </section>
@endsection



