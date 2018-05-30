<!-- start sidebar menu -->
<div class="sidebar-container">
    <div class="sidemenu-container navbar-collapse collapse fixed-menu">
        <div id="remove-scroll">
            <ul class="sidemenu  page-header-fixed" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="100">
                <li class="sidebar-toggler-wrapper hide">
                    <div class="sidebar-toggler">
                        <span></span>
                    </div>
                </li>
                <li class="sidebar-user-panel">
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="{{ asset(Auth::user()->photo) }}" class="img-thumbnail user-img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p> {{ Auth::user()->name }}</p>
                            <a href="#"><i class="fa fa-circle user-online"></i><span class="txtOnline"> Online</span></a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="{{ url('/') }}" class="nav-link nav-toggle">
                        <i class="material-icons">comments</i>
                        <span class="title">News Feed</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- end sidebar menu -->
