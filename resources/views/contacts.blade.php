@extends('layouts.e-commerce.master')

{{-- HEAD --}}
@section('Title')
    <title>ТСН СНТ Загорье. Контакты.</title>
@endsection
{{-- END HEAD --}}

{{-- CONTENT --}}
@section('Header')
    @parent
@endsection

@section('Revolution Slider')
    {{--@parent--}}
@endsection

@section('Features')
    {{--@parent--}}
@endsection

@section('Categories')
    {{--@parent--}}
@endsection

@section('Products')
    {{--@parent--}}
@endsection

@section('Promo Block')

@endsection

@section('Main Content Block ')
    <hr>

    <div class="container {{--g-pt-100--}} g-pb-70">
        <div class="text-left mx-auto {{--g-max-width-600 g-mb-50--}}">
            <h1 class="g-color-black mb-4">Контакты</h1>
        </div>

        <div class="text-left mx-auto {{--g-max-width-600 g-mb-50--}}">
            <h2 class="g-color-black mb-4">
                Товарищество Собственников Недвижимости
                <br>(Садоводческое Некоммерческое Товарищество) «Загорье»
            </h2>
        </div>

        <p>140713, Московская область, г. Шатура, мкр. Керва.</p>

        <p>Председатель правления: Родченков Никита Сергеевич.</p>

        <p>тел. +7 (496) 457-25-60</p>

        <p>e-mail: <a href="mailto:mail@sntzagorie.ru">mail@sntzagorie.ru</a></p>


        <hr>

        <div class="text-left mx-auto {{--g-max-width-600 g-mb-50--}}">
            <h2 class="g-color-black mb-4">Банковские реквизиты:</h2>
        </div>

        <p>инн 5049005295</p>

        <p>кпп 504901001</p>

        <p>р/с. 40703810400000001086</p>

        <p>бик 044525411</p>

        <p>к/с. 30101810145250000411</p>

        <p>Банк  ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)</p>

        <p>Для зачисления платежей обязательно указывать номер участка и наименование платежа.</p>

        <p class="text-left">
            <input id="print" class="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25" name="print" type="button" value="Печать реквизитов" />
        </p>

        <hr>

        <div class="text-left mx-auto {{--g-max-width-600 g-mb-50--}}">
            <h2 class="g-color-black mb-4">Документы</h2>
        </div>

        <p><a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="http://sntzagorie.ru/docs/inn.pdf" target="_blank"><img style="width: 64px;" src="/public/images/adobe_pdf.png" alt="фото" /> ЕГРЮЛ</a><p>

        <p><a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="http://sntzagorie.ru/docs/ogrn.pdf" target="_blank"><img style="width: 64px;" src="/public/images/adobe_pdf.png" alt="фото" /> ОГРН</a><p>

        {{--<p><a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="http://sntzagorie.ru/docs/ustav.pdf" target="_blank"><img style="width: 64px;" src="/public/images/adobe_pdf.png" alt="фото" /> Устав</a><p>--}}

        <hr>

        {{--</div>--}}

        {{--<div class="container --}}{{--g-pt-100--}}{{-- g-pb-70">--}}
        <div class="text-left mx-auto {{--g-max-width-600 g-mb-50--}}">
            <h2 class="g-color-black mb-4">Карта</h2>
        </div>
        <script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=OzGr3pC64sOsvjw9TeVVlmRCRqpnMifa{{--&width=1140--}}&height=590&lang=ru_RU&sourceType=constructor"></script>
    </div>

    <div id="zag" class="container hidden">
        <h1 class="text-left mx-auto">СНТ &laquo;Загорье&raquo;</h1>

        <div class="text-left mx-auto {{--g-max-width-600 g-mb-50--}}">
            <h2 class="g-color-black mb-4">Банковские реквизиты</h2>
        </div>

        <p>инн 5049005295</p>

        <p>кпп 504901001</p>

        <p>р/с. 40703810400000001086</p>

        <p>бик 044525411</p>

        <p>к/с. 30101810145250000411</p>

        <p>Банк  ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)</p>

        <p>Для зачисления платежей обязательно указывать номер участка и наименование платежа.</p>

    </div>

@endsection

@section('Product Blocks')
    {{--@parent--}}
@endsection

@section('Categories Promo')
    {{--@parent--}}
@endsection

@section('News')
    {{--@parent--}}
@endsection

@section('Subscribe')
    {{--@parent--}}
@endsection

@section('Social Icons')
    {{--@parent--}}
@endsection

@section('Footer')
    @parent
@endsection
{{-- END CONTENT --}}

{{-- JS --}}

{{-- END JS --}}
