<div class="aside-wrap">
    <div class="navi-wrap">
    @section('aside-wrap')
        <!-- nav  -->
            <nav class="navi clearfix">
                <ul class="nav b-b b-dark tab-content">
                    <div class="tab-pane fade in nav" role="tabpanel" id="Pages"
                         aria-labelledby="Pages-tab">
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">@yield('aside-wrap-title')</li>
                        <li>
                            <a href="/admin/pages">
                                <i class="fa fa-folder-o"></i>
                                <span title="Demo page" class="text-ellipsis">Demo page</span>
                            </a>
                        </li>
                    </div>
                    @section('aside-posts')
                        <div class="tab-pane fade in nav @yield('tab-pane-active')" role="tabpanel" id="Posts"
                             aria-labelledby="Posts-tab">
                            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">Common posts</li>
                            <li>
                                <a href="/admin/posts">
                                    <i class="fa fa-folder-o"></i>
                                    <span title="Demo post" class="text-ellipsis">Posts list</span>
                                </a>
                            </li>
                        </div>
                    @show
                    <div class="tab-pane fade in nav   " role="tabpanel" id="Tools"
                         aria-labelledby="Tools-tab">
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">Posts Managements</li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/tools/menu">
                                <i class="icon-menu"></i>
                                <span title="Menu" class="text-ellipsis">Menu</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/tools/category">
                                <i class="icon-badge"></i>
                                <span title="Sections" class="text-ellipsis">Sections</span>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/tools/media">
                                <i class="icon-folder-alt"></i>
                                <span title="Media" class="text-ellipsis">Media</span>
                            </a>
                        </li>

                    </div>
                    <div class="tab-pane fade in nav" role="tabpanel" id="Systems"
                         aria-labelledby="Systems-tab">
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">General settings</li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/settings">
                                <i class="fa fa-cog"></i>
                                <span title="Constants" class="text-ellipsis">Constants</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/backup">
                                <i class="fa fa-history"></i>
                                <span title="Backups" class="text-ellipsis">Backups</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/schema">
                                <i class="fa fa-database"></i>
                                <span title="Schema" class="text-ellipsis">Schema</span>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">Errors</li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/logs">
                                <i class="fa fa-bug"></i>
                                <span title="Logs" class="text-ellipsis">Logs</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/defender">
                                <i class="fa fa-shield"></i>
                                <span title="Defender" class="text-ellipsis">Defender</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/monitor">
                                <i class="fa fa-television"></i>
                                <span title="Monitor" class="text-ellipsis">Monitor</span>
                            </a>
                        </li>
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">Users</li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/users">
                                <i class="icon-user"></i>
                                <span title="Users" class="text-ellipsis">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/systems/roles">
                                <i class="fa fa-lock"></i>
                                <span title="Roles" class="text-ellipsis">Roles</span>
                            </a>
                        </li>
                        <li class="divider"></li>

                    </div>

                    <div class="tab-pane fade in nav" role="tabpanel" id="Shop" aria-labelledby="Shop-tab">
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">Shop settings</li>
                        <li>
                            <a href="{{ route('product.list') }}">
                                <i class="fa fa-comments-o"></i>
                                <span title="Comments" class="text-ellipsis">Product list</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/marketing/advertising">
                                <i class="icon-target"></i>
                                <span title="Advertising" class="text-ellipsis">Order list</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/marketing/utm">
                                <i class="fa fa-link"></i>
                                <span title="UTM tags" class="text-ellipsis">UTM tags</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://demo-orchid.tk/dashboard/marketing/robots">
                                <i class="fa fa-keyboard-o"></i>
                                <span title="Robots.txt" class="text-ellipsis">Robots.txt</span>
                            </a>
                        </li>

                    </div>

                </ul>
            </nav>
            <!-- nav  -->
        @show
    </div>
</div>