$(document).ready(function(){
  $(".first-ellipse").click(function(){
      $(this).addClass("active");
      $(".second-ellipse").removeClass("active");
      $(".third-ellipse").removeClass("active");
      $(".fourth-ellipse").removeClass("active");
      $(".fifth-ellipse").removeClass("active");
      $(".sixth-ellipse").removeClass("active");
      $(".seventh-ellipse").removeClass("active");
  });
}); 

$(document).ready(function(){
  $(".second-ellipse").click(function(){
      $(this).addClass("active");
      $(".first-ellipse").removeClass("active");
      $(".third-ellipse").removeClass("active");
      $(".fourth-ellipse").removeClass("active");
      $(".fifth-ellipse").removeClass("active");
      $(".sixth-ellipse").removeClass("active");
      $(".seventh-ellipse").removeClass("active");
  });
}); 

$(document).ready(function(){
  $(".third-ellipse").click(function(){
      $(this).addClass("active");
      $(".first-ellipse").removeClass("active");
      $(".second-ellipse").removeClass("active");
      $(".fourth-ellipse").removeClass("active");
      $(".fifth-ellipse").removeClass("active");
      $(".sixth-ellipse").removeClass("active");
      $(".seventh-ellipse").removeClass("active");
  });
}); 

$(document).ready(function(){
  $(".fourth-ellipse").click(function(){
      $(this).addClass("active");
      $(".first-ellipse").removeClass("active");
      $(".second-ellipse").removeClass("active");
      $(".third-ellipse").removeClass("active");
      $(".fifth-ellipse").removeClass("active");
      $(".sixth-ellipse").removeClass("active");
      $(".seventh-ellipse").removeClass("active");
  });
}); 


$(document).ready(function(){
  $(".fifth-ellipse").click(function(){
      $(this).addClass("active");
      $(".first-ellipse").removeClass("active");
      $(".second-ellipse").removeClass("active");
      $(".third-ellipse").removeClass("active");
      $(".fourth-ellipse").removeClass("active");
      $(".sixth-ellipse").removeClass("active");
      $(".seventh-ellipse").removeClass("active");
  });
}); 


$(document).ready(function(){
  $(".sixth-ellipse").click(function(){
      $(this).addClass("active");
      $(".first-ellipse").removeClass("active");
      $(".second-ellipse").removeClass("active");
      $(".third-ellipse").removeClass("active");
      $(".fourth-ellipse").removeClass("active");
      $(".fifth-ellipse").removeClass("active");
      $(".seventh-ellipse").removeClass("active");
  });
}); 

$(document).ready(function(){
  $(".seventh-ellipse").click(function(){
      $(this).addClass("active");
      $(".first-ellipse").removeClass("active");
      $(".second-ellipse").removeClass("active");
      $(".third-ellipse").removeClass("active");
      $(".fourth-ellipse").removeClass("active");
      $(".fifth-ellipse").removeClass("active");
      $(".sixth-ellipse").removeClass("active");
  });
}); 








$(document).ready(function(){
  $("#home").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
});

$(document).ready(function(){
  $("#services").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
});

$(document).ready(function(){
  $("#blog").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
});

$(document).ready(function(){
  $("#contact").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
});
 