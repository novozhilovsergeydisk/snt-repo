{{--<!DOCTYPE html>--}}
{{--<html lang="ru">--}}
{{--<head>--}}
    {{--<title>Admin panel - Dashboard Panel</title>--}}

    {{--<meta charset="utf-8"/>--}}
    {{--<meta http-equiv="X-UA-Compatible" content="IE=edge" />--}}
    {{--<meta name="viewport" content="width=device-width, initial-scale=1" />--}}
    {{--<meta name="csrf_token" content="zARqkeWjcCHri4SRz9gQH3ETzmPzPyf5feACftZZ" />--}}
    {{--<meta name="keywords" content="admin, admin panel" />--}}
    {{--<meta name="description" content="Dashboard Panel" />--}}
    {{--<meta name="http-equiv" content="X-DNS-Prefetch-Control" />--}}
    {{--<meta name="author" content="Novozhilov Sergey" />--}}
    {{--<meta name="copyright" content="PHPSMART" />--}}
    {{--<meta name="Author" lang="ru" content="Новожилов Сергей" />--}}

    {{--<link rel="dns-prefetch" href="https://fonts.googleapis.com" />--}}
    {{--<link rel="icon" href="/public/img/favicon.ico" type="image/x-icon" />--}}
    {{--<link rel="stylesheet" href="/public/css/cobra.css" />--}}

    {{--<script src="/public/js/cobra.js" type="text/javascript"></script>--}}
    {{--<script src="/public/js/ajax-crud.js" type="text/javascript"></script>--}}
    {{--<script>--}}
      {{--$(document).ready(function(){--}}
        {{--$(".navi > ul > li").click(function(){--}}
          {{--$(".navi").removeClass('hidden');--}}
        {{--});--}}
      {{--});--}}
    {{--</script>--}}
{{--</head>--}}
@extends('admin.layouts.index')

@section('content')
<div id="app" class="app app-aside-dock">
    <!-- content  -->
    <div id="content" class="app-content" role="main">
        <div class="app-content-body" id="app-content-body">
            <div class="hbox hbox-auto-xs hbox-auto-sm" id="menu-vue">

                <div class="col w-xxl bg-white-only b-r bg-auto no-border-xs">
                    <div class="nav-tabs-alt hidden">
                        <ul class="nav nav-tabs nav-justified" role="tablist">
                            <li>
                                <a data-target="#static-pages" role="tab" data-toggle="tab" aria-expanded="false">
                                    <i class="icon-note text-md text-muted wrapper-sm"></i>
                                    Pages
                                </a>
                            </li>
                            <li class="active">
                                <a id="ahref-custom-pages" data-target="#custom-pages" role="tab" data-toggle="tab"
                                   aria-expanded="true">
                                    <i class="icon-wrench text-md text-muted wrapper-sm"></i>
                                    Custom
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane" id="static-pages">

                            <div class="wrapper-md">
                                <label class="small">Search</label>
                                <input class="form-control form-control-grey input-sm" placeholder="Not Work">
                            </div>


                            <div class="list-group">
                            </div>

                        </div>

                        <div role="tabpanel" class="tab-pane tab-3 active" id="custom-pages">
                            <div class="wrapper-md">


                                <div class="form">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" v-model="label" placeholder="About us">
                                    </div>
                                    <div class="form-group">
                                        <label>Alternative name</label>
                                        <input type="text" class="form-control" v-model="title"
                                               placeholder="History of the company">
                                    </div>
                                    <div class="form-group">
                                        <label>URL</label>
                                        <input type="text" class="form-control" v-model="slug" placeholder="/about">
                                    </div>

                                    <div class="form-group">
                                        <label>Display</label>
                                        <select class="form-control" v-model="auth">
                                            <option value="0" selected>Visible to everyone</option>
                                            <option value="1">Only authorized users</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Relations</label>

                                        <select class="form-control" v-model="robot">
                                            <option value="answer">Answer to the question</option>
                                            <option value="chapter">Section or chapter of the current document</option>
                                            <option value="co-worker">Link to a colleague&#039;s page</option>
                                            <option value="colleague">Link to a colleague&#039;s page (not at work)</option>
                                            <option value="contact">Link to the page with contact information</option>
                                            <option value="details">Link to page with details</option>
                                            <option value="edit">Editable version of the current document</option>
                                            <option value="friend">Link to friend page</option>
                                            <option value="question">Question</option>
                                            <option value="archives">Link to the site archive</option>
                                            <option value="author">Link to the page about the author on the same domain</option>
                                            <option value="bookmark">Permanent link to a section or entry</option>
                                            <option value="first">Link to the first page</option>
                                            <option value="help">Link to a document with help</option>
                                            <option value="index">Link to content</option>
                                            <option value="last">Link to the last page</option>
                                            <option value="license">Link to a page with a license agreement or copyrights</option>
                                            <option value="me">Link to author page on another domain</option>
                                            <option value="next">Link to next page or section</option>
                                            <option value="nofollow">Do not pass on the link TIC and PR.</option>
                                            <option value="noreferrer">Do not pass HTTP headers over the link</option>
                                            <option value="prefetch">Indicates that you must cache the specified resource in advance</option>
                                            <option value="prev">Link to the previous page or section</option>
                                            <option value="search">Link to search</option>
                                            <option value="sidebar">Add link to browser favorites</option>
                                            <option value="tag">Indicates that the tag (tag) is relevant to the current document</option>
                                            <option value="up">Link to the parent page</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Class</label>
                                        <input type="text" class="form-control" v-model="style" placeholder="red">
                                    </div>
                                    <div class="form-group">
                                        <label>Link Target</label>
                                        <select class="form-control" v-model="target">
                                            <option value="_self" selected>In the current window</option>
                                            <option value="_blank">In a new window</option>
                                        </select>

                                    </div>


                                </div>


                                <div class="text-center">


                                    <div class="btn-group btn-group-sm  btn-group-justified" role="group" aria-label="...">


                                        <div class="btn-group" role="group" v-if="exist()">
                                            <button type="button" v-on:click="remove()"
                                                    class="btn btn-sm btn-danger padder-md m-b text-ellipsis"
                                                    data-dismiss="modal">Remove

                                            </button>
                                        </div>

                                        <div class="btn-group" role="group" v-if="exist()">
                                            <button type="button" v-on:click="clear()"
                                                    class="btn btn-sm btn-default padder-md m-b text-ellipsis"
                                                    data-dismiss="modal">Reset
                                            </button>

                                        </div>

                                        <div class="btn-group" role="group" v-if="!exist()">
                                            <button type="button" v-on:click="add()"
                                                    class="btn btn-sm btn-primary padder-md m-b text-ellipsis">Create
                                            </button>
                                        </div>

                                        <div class="btn-group" role="group" v-if="exist()">
                                            <button id="add" type="button" v-on:click="save()"
                                                    class="btn btn-sm btn-primary padder-md m-b text-ellipsis">Save
                                            </button>
                                        </div>

                                        <div class="btn-group" role="group" v-if="exist()">
                                            <button id="ajax" type="button" v-on:click="ajax()"
                                                    class="btn btn-sm btn-primary padder-md m-b text-ellipsis">Ajax
                                            </button>
                                        </div>

                                        <input id="test_hidden" type="hidden" value="zxc">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="wrapper-md">


                        <div class="row">
                            <div class="col-sm-12">
                                <div class="dd" data-lang="en" data-name="header">
                                    <ol class="dd-list">
                                        <li class="dd-item dd3-item"
                                            data-id="3090"
                                            data-label="test"
                                            data-title="test2"
                                            data-slug="/test"
                                            data-robot="answer"
                                            data-style="green"
                                            data-target="_self"
                                            data-auth="0"
                                            data-lang="en"
                                            data-parent=""
                                            data-sort="0"
                                            data-type="header"
                                            data-created_at="2017-08-12 11:05:53"
                                            data-updated_at="2017-08-12 11:05:53"
                                        >
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">test</div>
                                            <div class="edit"></div>
                                        </li>
                                        <li class="dd-item dd3-item"
                                            data-id="3091"
                                            data-label="特殊"
                                            data-title="阿斯顿发"
                                            data-slug="/sdf"
                                            data-robot="details"
                                            data-style=""
                                            data-target="_blank"
                                            data-auth="0"
                                            data-lang="en"
                                            data-parent=""
                                            data-sort="0"
                                            data-type="header"
                                            data-created_at="2017-08-12 11:05:53"
                                            data-updated_at="2017-08-12 11:05:53"
                                        >
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">特殊</div>
                                            <div class="edit"></div>
                                        </li>
                                        <li class="dd-item dd3-item"
                                            data-id="3092"
                                            data-label="Test"
                                            data-title="Test"
                                            data-slug="test"
                                            data-robot="help"
                                            data-style=""
                                            data-target="_self"
                                            data-auth="1"
                                            data-lang="en"
                                            data-parent=""
                                            data-sort="0"
                                            data-type="header"
                                            data-created_at="2017-08-12 11:05:53"
                                            data-updated_at="2017-08-12 11:05:53"
                                        >
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">Test</div>
                                            <div class="edit"></div>
                                        </li>
                                        <li class="dd-item dd3-item"
                                            data-id="3093"
                                            data-label="sdfg"
                                            data-title=""
                                            data-slug="jokerto e"
                                            data-robot=""
                                            data-style=""
                                            data-target="_self"
                                            data-auth="0"
                                            data-lang="en"
                                            data-parent=""
                                            data-sort="0"
                                            data-type="header"
                                            data-created_at="2017-08-12 11:05:53"
                                            data-updated_at="2017-08-12 11:05:53"
                                        >
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">Joker</div>
                                            <div class="edit"></div>
                                        </li>
                                        <li class="dd-item dd3-item"
                                            data-id="3094"
                                            data-label="sad"
                                            data-title="asd"
                                            data-slug="asd"
                                            data-robot="follow"
                                            data-style=""
                                            data-target="_self"
                                            data-auth="0"
                                            data-lang="en"
                                            data-parent=""
                                            data-sort="0"
                                            data-type="header"
                                            data-created_at="2017-08-12 11:05:53"
                                            data-updated_at="2017-08-12 11:05:53"
                                        >
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">sad</div>
                                            <div class="edit"></div>
                                        </li>
                                        <li class="dd-item dd3-item"
                                            data-id="3095"
                                            data-label="Test"
                                            data-title=""
                                            data-slug="/"
                                            data-robot=""
                                            data-style=""
                                            data-target="_self"
                                            data-auth="0"
                                            data-lang="en"
                                            data-parent=""
                                            data-sort="0"
                                            data-type="header"
                                            data-created_at="2017-08-12 11:05:53"
                                            data-updated_at="2017-08-12 11:05:53"
                                        >
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">Test</div>
                                            <div class="edit"></div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /content  -->
</div>


<script>
  $(function () {
//    alert('HI');

    $('#ajax').click(function () {
        alert('HI-');
    });

    const menu = new Vue({
      el: '#menu-vue',
      data: {
        count: 0,
        id: '',
        label: '',
        title: '',
        slug: '',
        auth: 0,
        robot: 'follow',
        style: '',
        target: '_self'
      },
      methods: {
        load: function (object) {
          this.id = object.id;
          this.label = object.label;
          this.slug = object.slug;
          this.auth = object.auth;
          this.robot = object.robot;
          this.style = object.style;
          this.target = object.target;
          this.title = object.title;
        },
        add: function () {


//          $.ajaxSetup({
//            headers: {
//              'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
//            }
//          });

//          e.preventDefault();

//          this.axios.get('/').then((response) => {
//            console.log(response.data)
//        });

//          alert('j');

//          var encoded = $.toJSON($('.app-content'));

          var js_obj = {plugin: 'jquery-json', version: 2.3};

//          var encoded = $.toJSON( js_obj );

          var formData = {
            test_hidden: $('#test_hidden').val(),
          };

          var type = "POST";

          $.ajax({
            type: type,
            url: '/menu/show',
            data: formData,
            dataType: 'json',
            success: function (data) {
              console.log(data);

              alert('J');
            },
            error: function (data) {
              console.log('Error:', data);
            }
          });

          alert(js_obj);

          return;

          $(".dd > .dd-list").append("<li class='dd-item dd3-item' data-id='" + this.count + "'> " +
            "<div  class='dd-handle dd3-handle'>Drag</div><div  class='dd3-content'>" + this.label + "</div> " +
            "<div  class='edit'></div>" +
            "</li>");

          alert(this.count);

//          return;

          $('li[data-id=' + this.count + ']').data({
            'label': this.label,
            'title': this.title,
            'auth': this.auth,
            'slug': this.slug,
            'robot': this.robot,
            'style': this.style,
            'target': this.target
          });

          this.count--;
          this.clear();
          this.send();
        },
        addStatic: function (name, slug) {

          if (slug.charAt(0) != '/') {
            slug = '/' + slug;
          }

          this.label = name;
          this.slug = slug;

          $('#ahref-custom-pages').tab('show');
        },
        edit: function (element) {
          var data = $(element).parent().data();
          data.label = $(element).prev().text();
          this.load(data);
        },
        save: function () {

          $('li[data-id=' + this.id + ']').data({
            'label': this.label,
            'title': this.title,
            'auth': this.auth,
            'slug': this.slug,
            'robot': this.robot,
            'style': this.style,
            'target': this.target
          });
          $('li[data-id=' + this.id + '] > .dd3-content').html(this.label);

          this.clear();
          $('#menuEdit').modal('hide');
          menu.send();
        },
        remove: function () {
          $('li[data-id=' + this.id + ']').remove();
          $('#menuEdit').modal('hide');
          this.clear();
          this.send();
        },
        clear: function () {
          this.label = '';
          this.title = '';
          this.auth = 0;
          this.slug = '';
          this.robot = 'follow';
          this.style = '';
          this.target = '_self';
          this.id = '';
        },
        send: function () {
          //Отправка данных

          var name = $('.dd').attr('data-name');

          var data = {
            'lang': $('.dd').attr('data-lang'),
            'data': $('.dd').nestable('serialize')
          };

          this.$http.put('/dashboard/tools/menu/' + name, data).then(function (response) {
          });
        },
        exist: function () {
          return !!(Number.isInteger(this.id) && $('li[data-id=' + this.id + ']').length > 0);
        }
      }
    });

    $('.dd').nestable({});

    $('.dd-item').each(function (i, item) {
      $(item).data('sort', i);
    });

    $('.dd').on('change', function () {
      menu.send();
    });

    $('.dd').on('click', '.edit', function () {
      menu.edit(this);
    });

    $('.menu-save').click(function () {
      menu.send();
    });

  });
</script>
@endsection

{{--</body>--}}
{{--</html>--}}
