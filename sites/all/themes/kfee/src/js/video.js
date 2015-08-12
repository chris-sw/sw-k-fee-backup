$(document).ready(function() {
    var videos = $('.js-play-video'),
        overlay = $('.js-overlay'),
        cancel = $('.js-cancel');

    videos.each(function () {
        $(this).on('click', videoPlayButtonClicked);
    });

    overlay.on('click', videoCancelPlayback);
    cancel.on('click', videoCancelPlayback);

    /**
     * Any video play button has been clicked.
     *
     * @param {Event} e Button click event.
     */
    function videoPlayButtonClicked (e) {
        var currentTarget = $(e.currentTarget),
            video = currentTarget.find('video'),
            button = currentTarget.find('.js-play');

        if (e.target === button[0] && video.length) {
            currentTarget.addClass('is-playing');
            video[0].play();
            video.on('ended', videoHasEnded.bind(null, currentTarget));
            overlay.addClass('is-visible');
        }
    }

    /**
     * Video playback has ended.
     *
     * @param {object} container Video container.
     */
    function videoHasEnded (container) {
        container.removeClass('is-playing');
        overlay.removeClass('is-visible');
    }

    /**
     * Cancel video playback.
     *
     * @param {Event} e Event that triggered the cancelling.
     */
    function videoCancelPlayback (e) {
        if (e.keyCode === 27 || e.target === e.currentTarget) {
            var playingVideos = $('.is-playing');

            playingVideos.each(function () {
                var video = $(this).find('video');

                $(this).removeClass('is-playing');

                video[0].pause();
                video[0].currentTime = 0;
            });

            overlay.removeClass('is-visible');
        }
    }

    $(document).on('keyup', videoCancelPlayback);
});
