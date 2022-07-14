$(document).ready(function()
{

  // slider
	if(window.location.href.indexOf("index") > -1){
 
  $('.bxslider').bxSlider
    ({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    pager: true
  		
	});
    }


if(window.location.href.indexOf("index") > -1){
  // Posts
  //array de json UTILIZARE LA LIBRERIA MOMENT
  // date: moment().format("MMMM dddd YYYY"),
  var post=[
  {
    title: "Prueba de titulo 1",
    date: "Publicado el dia: "+moment().date()+ " de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut consectetur lectus. Cras dolor diam, eleifend ac eros id, ultrices lacinia lorem. Duis dignissim odio enim, quis cursus tortor bibendum eu. Curabitur porttitor, ex at venenatis aliquam, arcu sem pellentesque massa, nec placerat leo quam nec massa. Duis iaculis, turpis a ornare scelerisque, justo nisl vehicula justo, imperdiet placerat quam ex ut nisl. Praesent varius lectus est, id facilisis arcu eleifend ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, risus eu porttitor feugiat, eros neque auctor lectus, sit amet bibendum est quam sit amet leo. Ut a nibh dignissim, tempor nisl nec, sodales diam. Vestibulum orci nisi, sagittis quis interdum ut, tempor eu ex. Vivamus sollicitudin iaculis leo, eget facilisis purus lacinia eu. Proin a libero et lacus rhoncus pretium quis et nulla."
    },
   {
    title: "Prueba de titulo 2",
    date: "Publicado el dia: "+moment().date()+ " de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut consectetur lectus. Cras dolor diam, eleifend ac eros id, ultrices lacinia lorem. Duis dignissim odio enim, quis cursus tortor bibendum eu. Curabitur porttitor, ex at venenatis aliquam, arcu sem pellentesque massa, nec placerat leo quam nec massa. Duis iaculis, turpis a ornare scelerisque, justo nisl vehicula justo, imperdiet placerat quam ex ut nisl. Praesent varius lectus est, id facilisis arcu eleifend ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, risus eu porttitor feugiat, eros neque auctor lectus, sit amet bibendum est quam sit amet leo. Ut a nibh dignissim, tempor nisl nec, sodales diam. Vestibulum orci nisi, sagittis quis interdum ut, tempor eu ex. Vivamus sollicitudin iaculis leo, eget facilisis purus lacinia eu. Proin a libero et lacus rhoncus pretium quis et nulla."
    },
    {
    title: "Prueba de titulo 3",
    date: "Publicado el dia: "+moment().date()+ " de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut consectetur lectus. Cras dolor diam, eleifend ac eros id, ultrices lacinia lorem. Duis dignissim odio enim, quis cursus tortor bibendum eu. Curabitur porttitor, ex at venenatis aliquam, arcu sem pellentesque massa, nec placerat leo quam nec massa. Duis iaculis, turpis a ornare scelerisque, justo nisl vehicula justo, imperdiet placerat quam ex ut nisl. Praesent varius lectus est, id facilisis arcu eleifend ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, risus eu porttitor feugiat, eros neque auctor lectus, sit amet bibendum est quam sit amet leo. Ut a nibh dignissim, tempor nisl nec, sodales diam. Vestibulum orci nisi, sagittis quis interdum ut, tempor eu ex. Vivamus sollicitudin iaculis leo, eget facilisis purus lacinia eu. Proin a libero et lacus rhoncus pretium quis et nulla."
    },
    {
    title: "Prueba de titulo 4",
    date: "Publicado el dia: "+moment().date()+ " de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut consectetur lectus. Cras dolor diam, eleifend ac eros id, ultrices lacinia lorem. Duis dignissim odio enim, quis cursus tortor bibendum eu. Curabitur porttitor, ex at venenatis aliquam, arcu sem pellentesque massa, nec placerat leo quam nec massa. Duis iaculis, turpis a ornare scelerisque, justo nisl vehicula justo, imperdiet placerat quam ex ut nisl. Praesent varius lectus est, id facilisis arcu eleifend ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, risus eu porttitor feugiat, eros neque auctor lectus, sit amet bibendum est quam sit amet leo. Ut a nibh dignissim, tempor nisl nec, sodales diam. Vestibulum orci nisi, sagittis quis interdum ut, tempor eu ex. Vivamus sollicitudin iaculis leo, eget facilisis purus lacinia eu. Proin a libero et lacus rhoncus pretium quis et nulla."
    },
    {
    title: "Prueba de titulo 5",
    date: "Publicado el dia: "+moment().date()+ " de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut consectetur lectus. Cras dolor diam, eleifend ac eros id, ultrices lacinia lorem. Duis dignissim odio enim, quis cursus tortor bibendum eu. Curabitur porttitor, ex at venenatis aliquam, arcu sem pellentesque massa, nec placerat leo quam nec massa. Duis iaculis, turpis a ornare scelerisque, justo nisl vehicula justo, imperdiet placerat quam ex ut nisl. Praesent varius lectus est, id facilisis arcu eleifend ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, risus eu porttitor feugiat, eros neque auctor lectus, sit amet bibendum est quam sit amet leo. Ut a nibh dignissim, tempor nisl nec, sodales diam. Vestibulum orci nisi, sagittis quis interdum ut, tempor eu ex. Vivamus sollicitudin iaculis leo, eget facilisis purus lacinia eu. Proin a libero et lacus rhoncus pretium quis et nulla."
    },

    {
    title: "Prueba de titulo 6",
    date: "Publicado el dia: "+moment().date()+ " de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut consectetur lectus. Cras dolor diam, eleifend ac eros id, ultrices lacinia lorem. Duis dignissim odio enim, quis cursus tortor bibendum eu. Curabitur porttitor, ex at venenatis aliquam, arcu sem pellentesque massa, nec placerat leo quam nec massa. Duis iaculis, turpis a ornare scelerisque, justo nisl vehicula justo, imperdiet placerat quam ex ut nisl. Praesent varius lectus est, id facilisis arcu eleifend ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, risus eu porttitor feugiat, eros neque auctor lectus, sit amet bibendum est quam sit amet leo. Ut a nibh dignissim, tempor nisl nec, sodales diam. Vestibulum orci nisi, sagittis quis interdum ut, tempor eu ex. Vivamus sollicitudin iaculis leo, eget facilisis purus lacinia eu. Proin a libero et lacus rhoncus pretium quis et nulla."
    },

  ];


post.forEach((item, index) =>{
  var post=`

  <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
          ${item.content}
          </p>
          <a href="" class="button-more">Leer más</a>
        </article>

  `;

 
 $("#posts").append(post);
});

}


//Selector de tema

var theme=$("#theme");

$("#to-green").click(function(){
 theme.attr("href","css/green.css");

})

$("#to-red").click(function(){
 theme.attr("href","css/red.css");

})
$("#to-blue").click(function(){
 theme.attr("href","css/blue.css");

});

// Scroll arriba de la web

$(".subir").click(function(e){
  e.preventDefault();

  $("html, body").animate({
    scrollTop:0
  }, 500);
  return false;

})

  // login falso

  $("#login form").submit(function(){
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name",form_name);

  });

  var form_name = localStorage.getItem("form_name");

  if(form_name != null && form_name != "undefined"){
    var about_p=$("#about p");

   about_p.html("<br><strong>Bienvenido, "+form_name+"</strong>");
    about_p.append("<a href='#' id='logout'>Cerrar sesion</a>");

    $("#login").hide();

    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });

  }

  //ACORDEON
if(window.location.href.indexOf("about") > -1){

  $("#acordeon").accordion();
 

}

  //RELOJ

if(window.location.href.indexOf("reloj") > -1){

  setInterval(function(){
      var reloj=moment().format("h:mm:ss");
      $("#reloj").html(reloj);

  },1000);
  /*Para que se muestre el reloj se mete en un setInterval, para que ejecute esto
  cada segundo*/
  

}


//Validacion

if(window.location.href.indexOf("contact") > -1){

$("form input[name='date']").datepicker();
$("#form_contact").validate({
/*errorMenssagePosition: "top",
scrollToTopOnError: true NO FUNCIONA EN STE PUGLIN*/
})

}


});