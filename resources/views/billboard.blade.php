@extends('layouts.e-commerce.master')

{{-- HEAD --}}
@section('Title')
    <title>ТСН СНТ Загорье. Доска объявлений.</title>
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

    <style>
        .badge-secondary {
            color: #fff;
            background-color: #6c757d;
        }
    </style>

    <div class="container">
        <h1 class="g-color-black mb-4">Доска объявлений</h1>

        @foreach($news /*->sortBy('email')*/ as $idx => $item)
            @php

            @endphp

            @if (($idx % 3) == 0)
                <div class="row">
                    @endif

                    <div class="col-md-4">
                        <p><a href="#"><img style="max-width: 100%;" src="/public/images/billboard/{{ $item->image_name }}"></a></p>
                        <p>{{ $item->message }}</p>
                        <h3><span class="badge badge-secondary">{{ number_format($item->amount, 0, ',', '') }} р</span></h3>
                        <!--<a class="btn btn-secondary" href="#" role="button">Подробнее...</a>-->
                    </div>

                    @if (($idx % 3) == 2)
                </div>

                <p>&nbsp;</p>
            @endif
        @endforeach

        @if ((count($news) % 3) != 2)
    </div>

    <p>&nbsp;</p>
    @endif

    <?php /*        <!-- Example row of columns -->
        <div class="row">
            <div class="col-md-4">
                <p><a href="https://placeholder.com"><img style="max-width: 100%;" src="http://via.placeholder.com/500x400"></a></p>
                <p>Продаётся отличный земельный участок 20 соток ЛПХ земли поселений, удачно расположенный рядом с небольшой речкой, без соседей, на самом краю тихой и симпатичной ... Если Вы хотите оторваться от городской суеты, но при этом иметь возможность в любую секунду в нее погрузиться - это предложение для Вас.</p>
                <h3><span class="badge badge-secondary">75000 ₽</span></h3>
                <a class="btn btn-secondary" href="#" role="button">Подробнее...</a>
            </div>
            <div class="col-md-4">
                <p><a href="https://placeholder.com"><img style="max-width: 100%;" src="http://via.placeholder.com/500x400"></a></p>
                <p>Продаётся отличный земельный участок 20 соток ЛПХ земли поселений, удачно расположенный рядом с небольшой речкой, без соседей, на самом краю тихой и симпатичной ...</p>
                <h3><span class="badge badge-secondary">75000 ₽</span></h3>
                <a class="btn btn-secondary" href="#" role="button">Подробнее...</a>
            </div>
            <div class="col-md-4">
                <p><a href="https://placeholder.com"><img style="max-width: 100%;" src="http://via.placeholder.com/500x400"></a></p>
                <p>Продаётся отличный земельный участок 20 соток ЛПХ земли поселений, удачно расположенный рядом с небольшой речкой, без соседей, на самом краю тихой и симпатичной ...</p>
                <h3><span class="badge badge-secondary">75000 ₽</span></h3>
                <a class="btn btn-secondary" href="#" role="button">Подробнее...</a>
            </div>
        </div>

        <p>&nbsp;</p>

        <div class="row">
            <div class="col-md-4">
                <p><a href="https://placeholder.com"><img style="max-width: 100%;" src="http://via.placeholder.com/500x400"></a></p>
                <p>Продаётся отличный земельный участок 20 соток ЛПХ земли поселений, удачно расположенный рядом с небольшой речкой, без соседей, на самом краю тихой и симпатичной ... Если Вы хотите оторваться от городской суеты, но при этом иметь возможность в любую секунду в нее погрузиться - это предложение для Вас.</p>
                <h3><span class="badge badge-secondary">75000 ₽</span></h3>
                <a class="btn btn-secondary" href="#" role="button">Подробнее...</a>
            </div>
            <div class="col-md-4">
                <p><a href="https://placeholder.com"><img style="max-width: 100%;" src="http://via.placeholder.com/500x400"></a></p>
                <p>Продаётся отличный земельный участок 20 соток ЛПХ земли поселений, удачно расположенный рядом с небольшой речкой, без соседей, на самом краю тихой и симпатичной ...</p>
                <h3><span class="badge badge-secondary">75000 ₽</span></h3>
                <a class="btn btn-secondary" href="#" role="button">Подробнее...</a>
            </div>
            <div class="col-md-4">
                <p><a href="https://placeholder.com"><img style="max-width: 100%;" src="http://via.placeholder.com/500x400"></a></p>
                <p>Продаётся отличный земельный участок 20 соток ЛПХ земли поселений, удачно расположенный рядом с небольшой речкой, без соседей, на самом краю тихой и симпатичной ...</p>
                <h3><span class="badge badge-secondary">75000 ₽</span></h3>
                <a class="btn btn-secondary" href="#" role="button">Подробнее...</a>
            </div>
        </div>

        <p>&nbsp;</p>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="/public/images/z.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/public/images/z.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/public/images/z.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <p>&nbsp;</p>

*/ ?>
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
