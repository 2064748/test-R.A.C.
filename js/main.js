var skip = $('#skip');
var back = $('.back');

$(document).ready(function () {

    $('.intro').ready(function () {
        setTimeout(function () {
            $('#start').show();
        }, 3000);
    });

    var start = $('.earth a');

    start.click(function (event) {
        event.preventDefault();
        console.log('start multimedia story');

        $('#intro').animate({
            left: '-100%'
        }, 200);

        $('#video').animate({
            left: '0'
        }, 200);
    });

    if (skip.click(function (event) {
        event.preventDefault();
        console.log("geklikt");

        $('#video').animate({
            left: '-100%'
        }, 200);

        $('#worldmap').animate({
            left: '0'
        }, 200);
    }));

    $('#worldmap').ready(function () {
        back.click(function (event) {
            event.preventDefault();
            console.log("back");

            $('#worldmap').animate({
                left: '100%'
            }, 200);

            $('#video').animate({
                left: '0'
            }, 200);
        });

        $('.info').click(function (event) {
            event.preventDefault();

            let href = $(this).attr("href");

            $.ajax({
                url: href,

                success: function (data) {
                    $('body').append('<div class="open-info">' + data + '</div>');

                    $('.info').addClass('info-active');
                    var openInfo = $('.open-info');

                    openInfo.animate({
                        top: "0"
                    }, 300);

                    $('body').on('click', '#return-info', function (event) {
                        event.preventDefault();
                        $('.open-info, #return-info').remove();
                        $('.info').removeClass('info-active');
                        console.log('info gesloten');

                        openInfo.animate({
                            top: originTop
                        }, 300);
                    });
                }
            })
        });

        var ellipse = $("#stories a");

        ellipse.click(function (event) {
            event.preventDefault();

            thisPanel = $(this).parent().attr('id');
            panel = $(this).attr('id');
            let href = $(this).attr("href");

            console.log(thisPanel + panel);

            $.ajax({
                url: href,

                success: function (data) {
                    $('body').append('<div class="open">' + data + '</div>');

                    var nummerContent = 0;

                    $('.content').append('<div class="gono"> <button id="no">&lt;</button> <button id="go">&gt;</button> </div>');

                    var gonoBtn = $('.gono button');
                    var gono = $('.gono');

                    gonoBtn.click(function (event) {
                        event.preventDefault();

                        let direction = $(this).attr('id');

                        if (direction == 'go') {
                            nummerContent = nummerContent + 1;

                            $("#no").css("display", "block");

                            $('.content').animate({
                                left: "-=100vw"
                            }, 200);

                            gono.animate({
                                left: "+=100vw"
                            }, 200);

                            $('.content-header').animate({
                                left: "+=100vw"
                            }, 200);

                            console.log(direction + ' verder geluktt');


                            if (nummerContent == 7) {
                                nummerContent = 0;
                                $(".content").animate({
                                    left: "0"
                                });

                                gono.animate({
                                    left: "0"
                                });

                                $("#go").animate({
                                    right: "2%"
                                });

                                $("#no").css("display", "none");

                                $('.content-header').animate({
                                    left: "0"
                                });
                            }
                        };
                        if (direction == 'no') {
                            nummerContent = nummerContent - 1;

                            $('.content').animate({
                                left: "+=100vw"
                            }, 200);

                            gono.animate({
                                left: "-=100vw"
                            }, 200);

                            console.log(direction + ' terug geluktt');

                            $('.content-header').animate({
                                left: "-=100vw"
                            }, 200);

                            if (nummerContent == 0) {
                                $("#no").css("display", "none");
                            }
                        };
                    });

                    var flag = $('#flag');

                    flag.click(function (event) {
                        event.preventDefault();

                        let href = $(this).attr("href");

                        $.ajax({
                            url: href,

                            success: function (data) {
                                $('body').append('<div class="open-flag">' + data + '</div>');
                                console.log('gelukt openen vlag')

                                let retour = $('.content-flag #retour');

                                retour.on('click', function (event) {
                                    event.preventDefault()
                                    $('.open-flag').remove();
                                    console.log('ok gesloten vlag-info');
                                });
                            }
                        })
                    });

                    $('body').on('click', '#return', function (event) {
                        event.preventDefault();
                        $('.open, #return').remove();
                        console.log('ok gesloten');

                        $('.open').animate({
                            bottom: originBottom
                        }, 200);
                    });

                    var projectimg = $('.project-info-img');

                    projectimg.click(function (event) {
                        event.preventDefault();

                        let href = $(this).attr("href");

                        $.ajax({
                            url: href,

                            success: function (data) {
                                $('body').append('<div class="diduknow">' + data + '</div>');
                                console.log('gelukt openen project')

                                let retour = $('.data-project #retour');

                                retour.on('click', function (event) {
                                    event.preventDefault()
                                    $('.diduknow').remove();
                                    console.log('ok gesloten project-info');
                                });
                            }
                        })
                    });

                    var carouselBtn = $('.carousel button');

                    $('.carousel').ready(function () {
                        $(".car-img-1").css("margin-left", "0");
                        var nummerCarousel = 0;

                        carouselBtn.click(function (e) {
                            e.preventDefault();

                            let direction = $(this).attr('id');
                            console.log(direction);

                            if (direction == 'next') {
                                // console.log('next active')
                                nummerCarousel = nummerCarousel + 1;
                                $(".carousel-images").animate({
                                    left: "-=650px"
                                }, 50);
                                $("#prev").css("display", "block");

                                if (nummerCarousel == 5) {
                                    nummerCarousel = 0;
                                    $(".carousel-images").animate({
                                        left: "0"
                                    });
                                    $("#prev").css("display", "none");
                                }
                            }
                            else if (direction == 'prev') {
                                // console.log('prev active')
                                nummerCarousel = nummerCarousel - 1;
                                $(".carousel-images").animate({
                                    left: "+=650px"
                                }, 50);

                                if (nummerCarousel == 0) {
                                    nummerCarousel = 4;
                                    $("#prev").css("display", "none");
                                }
                            }
                        })
                    });

                    var closerBtn = $('.closer-look-carousel button')

                    $('.closerlook-look-carousel').ready(function () {
                        $(".closer-img-1").css("left", "0");

                        var nummerCloser = 0;

                        closerBtn.click(function (e) {
                            e.preventDefault();

                            let direction = $(this).attr('id');
                            console.log(direction + ' closer-look');

                            if (direction == 'next') {
                                // console.log('next active')
                                nummerCloser = nummerCloser + 1;
                                $(".closer-look-images").animate({
                                    left: "-=900px"
                                }, 50);
                                $("#previous").css("display", "block");

                                if (nummerCloser == 5) {
                                    nummerCloser = 0;
                                    $(".closer-look-images").animate({
                                        left: "0"
                                    });
                                    $("#previous").css("display", "none");
                                }
                            }
                            else if (direction == 'previous') {
                                // console.log('prev active')
                                nummerCloser = nummerCloser - 1;
                                $(".closer-look-images").animate({
                                    left: "+=900px"
                                }, 50);

                                if (nummerCloser == 0) {
                                    nummerCloser = 4;
                                    $("#previous").css("display", "none");
                                }
                            }
                        })
                    });
                }
            })
        });
    });
})