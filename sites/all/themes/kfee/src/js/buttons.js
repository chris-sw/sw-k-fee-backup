$(document).ready(function() {
    $('.js-ks-btn-primary').on('click', shopPrimaryButtonClicked);

    function shopPrimaryButtonClicked () {
        var button = $(this);

        button.addClass('activated');

        setTimeout(function() {
            button.removeClass('activated');
        }, 1500);
    }
});
