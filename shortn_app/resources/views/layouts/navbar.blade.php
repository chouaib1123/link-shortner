<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">URL shortner</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left:800px; ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
     
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Profil
          </a>
          <ul class="dropdown-menu">
            @guest
            <li><a class="dropdown-item" href="{{route('register')}}">Register</a></li>
            <li><a class="dropdown-item" href="{{route('login')}}">Login</a></li>
            @endguest
            @auth
            <li><a class="dropdown-item" href="#">{{auth()->user()->name}}</a></li>
            <li><a 
             onclick="document.getElementById('logoutForm').submit();"
            class="dropdown-item" href="#">Logout</a></li>
            <form id="logoutForm" action="{{route('logout')}} " method="post"> @csrf</form>

            @endauth
          </ul>
        </li>
     
      </ul>
     
    </div>
  </div>
</nav>