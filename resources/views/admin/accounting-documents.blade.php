@extends('admin.layouts.vendor.phpsmart.index')

@section('title', 'Панель управления. Бухгалтерские документы.')
@section('keywords', 'панель управления, бухгалтерские документы')
@section('description', 'панель управления, бухгалтерские документы')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('H1', '')--}}

{{--@section('welcome-j', $date_now)--}}


{{--@section('H3')--}}
    {{--Бухгалтерские документы--}}
{{--@endsection--}}

@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="card mb-4">
            <div class="card-header">
                <h3 class="panel-heading">
                    <span class="text-muted">Бухгалтерские документы</span>
                </h3>
            </div>

            <div class="card-body">
                <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="/public/pdf/breakdown_contribution.pdf">
                <img style="width: 64px;" src="/public/images/adobe_pdf.png" alt="фото">
                    Расшифровка взноса
                </a>
            </div>
            

            <div class="card-body">
                <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="/public/pdf/act.pdf">
                    <img style="width: 64px;" src="/public/images/adobe_pdf.png" alt="фото">
                    Акт ревизионной комиссии
                </a>
            </div>

            <div class="card-body">
                <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="/public/pdf/smeta.pdf">
                    <img style="width: 64px;" src="/public/images/adobe_pdf.png" alt="фото">
                    Смета 2020 - 2021
                </a>
            </div>

        </div>

    </div>

@endsection
