<!-- nav  -->

<nav class="navi clearfix">
    <ul class="nav" role="tablist">
        <li {{--style="border-bottom: solid gray 2px;"--}}>
            <a href="/admin">
                <img src="/public/img/logo.png"> {{--СНТ Загорье--}}
            </a>
        </li>

        <li role="presentation" class="{{ Request::path() ==  'admin' ? 'active' : ''  }}" >
            <a href="/admin" id="Posts-tab" role="tab" {{--data-toggle="tab"--}}>
                <i class="fa fa-file-o"></i>
                <span>Главная</span>
                <p></p>
            </a>
        </li>

        <?php
            $permission = Session::get('menu_permission');
        ?>

        @if (isset($permission))
            @if ($permission == 'admin')
                <li role="presentation" class="{{ Request::path() ==  'admin/clients' ? 'active' : ''  }}" >
                    <a href="/admin/clients" id="Systems-tab" role="tab">
                        <i class="icon-layers"></i>
                        <span>Список участков</span>
                    </a>
                </li>
                <li role="presentation" class="{{ Request::path() ==  'admin/sms' ? 'active' : ''  }}" >
                    <a href="/admin/sms" id="Systems-tab" role="tab">
                        <i class="fa fa-mobile"></i>
                        <span>Рассылка SMS</span>
                    </a>
                </li>

                {{--<li role="presentation" class="@yield('tools_active')" >--}}
                {{--<a href="/admin/tools" id="Tools-tab" role="tab">--}}
                {{--<i class="icon-wrench"></i>--}}
                {{--<span>Инструменты</span>--}}
                {{--</a>--}}
                {{--</li>--}}

                {{--<li role="presentation" class="@yield('settings_active')" >--}}
                {{--<a href="/settings" id="Systems-tab" role="tab">--}}
                {{--<i class="icon-layers"></i>--}}
                {{--<span>Настройки</span>--}}
                {{--</a>--}}
                {{--</li>--}}

                {{--<li role="presentation" class="@yield('upload_clients_active')" >--}}
                {{--<a href="/admin/upload/clients" id="Systems-tab" role="tab"  title="Загрузка клиентов">--}}
                {{--<i class="fa fa-file-excel-o"></i>--}}
                {{--<span>Загрузка клиентов</span>--}}
                {{--</a>--}}
                {{--</li>--}}

                <li role="presentation" class="{{ Request::path() ==  'admin/billboard' ? 'active' : ''  }}" >
                    <a href="/admin/billboard" id="Systems-tab" role="tab" title="Доска объявлений">
                        <i class="fa fa-file-image-o"></i>
                        <span>Доска объявлений</span>
                    </a>
                </li>

                <li role="presentation" class="{{ Request::path() ==  'admin/upload/balance-list' ? 'active' : ''  }}" >
                    <a href="/admin/upload/balance-list" id="Systems-tab" role="tab" title="Загрузка оборотно-сальдовой ведомости">
                        <i class="fa fa-file-excel-o"></i>
                        <span>Загрузка ОСВ</span>
                    </a>
                </li>

                <li role="presentation" class="{{ Request::path() ==  'admin/logs' ? 'active' : ''  }}" >
                    <a href="/admin/logs" id="Systems-tab" role="tab" title="Логи пользователей">
                        <i class="fa fa-leanpub"></i>
                        <span>Статистика активности пользователей</span>
                    </a>
                </li>
            @endif
        @endif

        <li role="presentation" class="{{ Request::path() ==  'admin' ? 'active' : ''  }}" >
            <a href="/storage/app/public/pdf" id="Posts-tab" role="tab" {{--data-toggle="tab"--}}>
                <i class="fa fa-file-o"></i>
                <span>Смета ревизионной комиссии</span>
                <p></p>
            </a>
        </li>

    </ul>

    <ul class="nav-footer-fix">
        <li><a href="/admin"><i class="icon-grid" aria-hidden="true"></i> </a></li>
    </ul>
</nav>
<!-- nav  -->

{{--<li role="presentation"  class="@yield('menu_posts')" >--}}
{{--<a href="/profile" id="Posts-tab" role="tab" data-toggle="tab">--}}
{{--<i class="icon-notebook"></i>--}}
{{--<span>Профиль</span>--}}
{{--</a>--}}
{{--</li>--}}