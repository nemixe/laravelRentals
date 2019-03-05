<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link href=" {{ asset('css/app.css') }} " rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="header"></div>
    <div class="is-marginless has-background-link content columns" style="height:100vh;width:100%;position:relative">
        <div class="has-text-white" style="margin: auto 10px auto 15%;position:relative;z-index:2">
            <div style="margin: 10px">
                <small class="has-text-link has-text-weight-semibold has-background-white" style="padding: 5px 15px;margin-bottom:25px;border-radius:25px">Most Popular</small>
            </div>

            <div class="title has-text-white" style="margin-bottom: 0px">
                Black Panther (2018)
            </div>
            <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
            <div>7.3 / 10</div>
            </div>
        </div>
        <div style="position:relative;bottom:50vh;right:10%;transform: translate(90%, 65vh);width:500px;height:500px">
            <img width="200px" src="http://localhost:8000/images/BlackPanther.jpg" style="position:absolute;z-index:2;transform: translate(75%, 15vh);border-radius:15px;border:3px solid lightblue" />
            <svg width="100%" height="100%" viewBox="0 0 10 10" style="position:absolute">
                <circle cx="50%" cy="50%" r="5" fill="#3799e5" />
            </svg>
        </div>
    </div>


</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>