{{--@extends('admin.layouts.index')--}}
@extends('admin.layouts.vendor.phpsmart.index')

@section('title', 'SMS')
@section('keywords', 'SMS')
@section('description', 'SMS')
@section('http_equiv', 'X-DNS-Prefetch-Control')
@section('dns_prefetch', 'https://fonts.googleapis.com')
{{--@section('menu_systems', 'active')--}}
{{--@section('H1', 'SMS сообщения')--}}
{{--@section('welcome-j', 'SMS mess')--}}

{{--@if (isset($clients_active))--}}
    {{--@section('clients_active', $clients_active)--}}
{{--@endif--}}

@section('content')

    <script>
        $(document).ready(function(){
            $('#ajax').click(function () {
                getMessage();
            });

            $('#send_sms').click(function () {
                alert('Режим тестирования')
            });

            // alert('');

//            console.log('test');
        });

        function getMessage(){
            $.ajax({
                type:'post',
                url:'{{ route('sms_store') }}',
                data:'_token = {{ csrf_token() }}',
                success:function(data){
//                    alert(data.msg);
                    $("#msg").val(data.msg + ' руб.');

                }
            });
        }

    </script>

    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="card mb-4">
            <div class="card-header">
                <h3 class="panel-heading">
                    <span class="text-muted">Рассылка SMS</span>
                </h3>
            </div>
            <div class="card-body">
                <form class="form-horizontal" action="{{ route('sms_store') }}" method="post">
                <input name="_token" type="hidden" value="{{ csrf_token() }}">
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active " id="tab-information">
                        <div class="wrapper-md">
                            <div class="bg-white">
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Номер телефона</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="phone" class="form-control" value="+79163465407" placeholder="Name">
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Сообщение</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="mess" class="form-control" value="" placeholder="Напишите сообщение">
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Баланс</label>
                                    <div class="col-sm-10">
                                        <input id="msg" type="text" class="form-control" value="">
                                    </div>
                                </div>

                                <div class="line line-dashed b-b line-lg"></div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label"></label>
                                    <div class="col-sm-4">
                                        <input type="button" id="ajax" name="ajax" class="btn btn-info" value="Узнать баланс">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label"></label>
                                    <div class="col-sm-4">
                                        <input type="button" id="send_sms" name="send_sms" class="btn btn-success" value="Послать SMS сообщение">
                                    </div>
                                </div>




                            </div>
                        </div>

                    </div>

                </div>
            </form>
            </div>
        </div>
    </div>

@endsection



