@extends('admin.layouts.index')
@section('title', 'Личный кабинет')
@section('keywords', 'личный кабинет')
@section('description', 'личный кабинет')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('menu_systems', 'active')--}}
@section('H1', 'Личный кабинет')
@section('welcome-j', $actual_date)

@if (isset($admin_active))
    @section('admin_active', $admin_active)
@endif

@section('content')
    <section class="wrapper">
        <div class="bg-white-only bg-auto no-border-xs visible-xs">
            <p>HI.Joker</p>
        </div>
        <div class="bg-white-only bg-auto no-border-xs">
            <div class="nav-tabs-alt">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="active">
                        <a data-target="#tab-information" role="tab" data-toggle="tab">
                            Общая информация -
                        </a>
                    </li>
                </ul>
            </div>
            <form class="form-horizontal">
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active "
                         id="tab-information">
                        <div class="wrapper-md">
                            <div class="bg-white">
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Участок</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="name" class="form-control" value="{{ $name }}"
                                               placeholder="Name">
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">ФИО</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="fio" class="form-control" value="{{ $fio }}"
                                               placeholder="ФИО">
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" name="email" class="form-control" value="{{ $email }}"
                                               placeholder="Email">
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="tab-permission">
                        <div class="wrapper-md">
                            <div class="bg-white">
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Roles</label>
                                    <div class="col-sm-10">
                                        <select data-placeholder="Select roles" name="roles[]" multiple class="select2 form-control w-full">
                                            <option value="dungeon-master" >Dungeon Master</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>
                                <span class="text-muted">Main</span>

                                <div class="row padder-v">
                                    <div class="col-xs-12">
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.index]" value="1"
                                                       checked="checked" >
                                                <i></i> Main menu
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.pages]" value="1"
                                                       checked="checked" >
                                                <i></i> Pages
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.posts]" value="1"
                                                       checked="checked" >
                                                <i></i> Posts
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.tools]" value="1"
                                                       checked="checked" >
                                                <i></i> Tools
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems]" value="1"
                                                       checked="checked" >
                                                <i></i> Systems
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.marketing]" value="1"
                                                       checked="checked" >
                                                <i></i> Shop
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <span class="text-muted">Pages</span>

                                <div class="row padder-v">
                                    <div class="col-xs-12">
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.posts.type.demo-page]" value="1"
                                                       checked="checked" >
                                                <i></i> Page
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <span class="text-muted">Posts</span>

                                <div class="row padder-v">
                                    <div class="col-xs-12">
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.posts.type.demo]" value="1"
                                                       checked="checked" >
                                                <i></i> Post
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <span class="text-muted">Tools</span>

                                <div class="row padder-v">
                                    <div class="col-xs-12">
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.tools.menu]" value="1"
                                                       checked="checked" >
                                                <i></i> Menu
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.tools.attachment]" value="1"
                                                       checked="checked" >
                                                <i></i> File upload
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.tools.media]" value="1"
                                                       checked="checked" >
                                                <i></i> Media
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <span class="text-muted">Systems</span>

                                <div class="row padder-v">
                                    <div class="col-xs-12">
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.backup]" value="1"
                                                       checked="checked" >
                                                <i></i> Backups
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.defender]" value="1"
                                                       checked="checked" >
                                                <i></i> Defender
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.monitor]" value="1"
                                                       checked="checked" >
                                                <i></i> Monitor
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.logs]" value="1"
                                                       checked="checked" >
                                                <i></i> Logs
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.roles]" value="1"
                                                       checked="checked" >
                                                <i></i> Roles
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.schema]" value="1"
                                                       checked="checked" >
                                                <i></i> Schema
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.settings]" value="1"
                                                       checked="checked" >
                                                <i></i> Settings
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.systems.users]" value="1"
                                                       checked="checked" >
                                                <i></i> Users
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <span class="text-muted">Shop</span>

                                <div class="row padder-v">
                                    <div class="col-xs-12">
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.marketing.comment]" value="1"
                                                       checked="checked" >
                                                <i></i> Comments
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.marketing.advertising]" value="1"
                                                       checked="checked" >
                                                <i></i> Advertising
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.marketing.utm]" value="1"
                                                       checked="checked" >
                                                <i></i> UTM tags
                                            </label>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-xs m-b-xs">
                                            <label class="i-checks m-b-none">
                                                <input type="checkbox" name="permissions[dashboard.marketing.robots]" value="1"
                                                       checked="checked" >
                                                <i></i> Robots.txt
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="bg-white-only bg-auto no-border-xs">
            <div class="nav-tabs-alt">

            @if ($depts)
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
                            <td class="center" colspan="4"><span class="center {{--green--}} bold">{{ $totals_debts }}</span></td>
                        </tr>
                    </tbody>
                </table>
            @endif
            </div>
        </div>

    </section>
@endsection



