   CountDownTimer('09/07/2017 8:00 AM', 'countdown');

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'Vidíme sa na eD FORUM opäť o rok!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = 'Ostáva ' + days + ' <b style="color:#4d4d4f;">dní</b> ';
            document.getElementById(id).innerHTML += hours + ' <b style="color:#4d4d4f;">hodín</b> ';
            document.getElementById(id).innerHTML += minutes + ' <b style="color:#4d4d4f;">minút</b> ';
            document.getElementById(id).innerHTML += 'a ' + seconds + ' <b style="color:#4d4d4f;">sekúnd</b> do začiatku konferencie.';
        }

        timer = setInterval(showRemaining, 1000);
    }