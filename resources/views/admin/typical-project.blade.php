@extends('admin.layouts.vendor.phpsmart.index')

@section('title', 'Панель управления. Типовой проект.')
@section('keywords', 'панель управления, типовой проект')
@section('description', 'панель управления, типовой проект')
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
                    <span class="text-muted">Устав СНТ</span>
                </h3>
            </div>

            <div class="card-body">
                <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="/public/pdf/Устав.pdf">
                    <img class="pdf-icon" src="/public/images/adobe_pdf.png" alt="фото">
                    Устав СНТ
                </a>
            </div>

        </div>

    </div>

@endsection
