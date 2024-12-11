new WOW().init();
$(".team_object").hover(
    function () {
      $(this).find(".team_word_box").css({
        opacity: 1
      }).find(".team_word").css({
        transform:"translateY(0px)"
      }).siblings(".team_p").css({
        transform:"translateY(0px)"
      })
    },
    function () {
        $(this).find(".team_word_box").css({
            opacity: 0
        }).find(".team_word").css({
          transform:"translateY(80px)"
        }).siblings(".team_p").css({
          transform:"translateY(80px)"
        })
    }
  );


  