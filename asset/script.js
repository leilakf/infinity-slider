    // ساختن هر کدام از فیگ های کوچک
    let turn = 0
    let $fig = document.querySelectorAll('.line>figure');
    document.getElementsByClassName('line')[0].style.width = (500 * $fig.length) + "px"
    for (i = 0; i < $fig.length; i++) {

    }
    // ....................................end create span for thumb
    let $img = document.querySelectorAll('#thumb>figure')
    $img.forEach(function (val, index) {
        val.addEventListener('click', function () {
            for (i = 0; i < $fig.length; i++) {

            }
            turn = index
            document.getElementsByClassName('line')[0].style.transform = 'translateX(-' + (turn * 500) + 'px)';

        })
    });
    // ..................................................end thumb
    function $right() {
        if (turn < $fig.length - 1) {
            turn++
            $img[turn - 1].style.transform = 'scale(1)';


        } else {
            turn = 0
            $img[turn].style.transform = 'scale(1.2)';
            $img[$fig.length - 1].style.transform = 'scale(1)';
        }
        $move()

    }

    function $left() {

        if (turn > 0) {
            turn--
            $img[turn + 1].style.transform = 'scale(1)';
        } else {
            turn = $fig.length - 1
            $img[$fig.length - 1].style.transform = 'scale(1.2)';
            $img[0].style.transform = 'scale(1)';

        }
        $move()

    }

    function $move() {
        document.getElementsByClassName('line')[0].style.transform = 'translateX(-' + (turn * 500) + 'px)';
        $img[turn].style.transform = 'scale(1.2)';
    }
    // .......................................................
    // ساخت بکگراند رنگی و ست اینترول کردن رنگ
    let myInterval = setInterval(setColor, 900);

    function setColor() {
        let x = document.body;
        x.style.backgroundColor = x.style.backgroundColor == "lightgray" ? "#fbce35" : "lightgray";
    }

    function stopColor() {
        clearInterval(myInterval);
    }
    // .....................................................................
    let myInterval1 = setInterval($right, 2000);

    function stopMove() {
        clearInterval(myInterval1);
    }