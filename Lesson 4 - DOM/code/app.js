window.addEventListener('DOMContentLoaded', function() {
    //When the page structure is loaded...
    $weight = document.querySelector('.weight > input');
    $height = document.querySelector('.height > input');

    $weightSpan = document.querySelector('.weight > span');
    $heightSpan = document.querySelector('.height > span');

    $bmi = document.querySelector('h1 > span');
    $preferredHeight = document.querySelector('h2 > span');

    var updateBMI = function() {
        var bmi = $weight.value / ($height.value * $height.value * 0.0001);
        $bmi.textContent = bmi;
        switch (true) {
            case (bmi >= 19 && bmi <= 25):
                $bmi.setAttribute('class', 'ok');
                break;
            case (bmi >= 17 && bmi <= 30):
                $bmi.setAttribute('class', 'medium');
                break;
            default:
                $bmi.setAttribute('class', 'bad');
                break;
        }

        $preferredHeight.textContent = Math.round(Math.sqrt($weight.value / 22) * 100);
    };

    $weight.addEventListener('change', function(event) {
        $weightSpan.textContent = $weight.value;
        updateBMI();
    });

    $height.addEventListener('change', function(event) {
        $heightSpan.textContent = $height.value;
        updateBMI();
    });

    updateBMI();
});
