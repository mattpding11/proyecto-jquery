'use strict'

$(document).ready(function(){

    //slider

    //if(window.location.href.indexOf('index')>-1){} que se ejecute para determinado archivo html

        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
      });
    

//post



var posts = [
    {
        title: 'prueba de titulo1',
        date: 'Publicado el dia: '+ moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem sit expedita nisi veritatis rem officiis exercitationem, omnis reprehenderit corporis excepturi dolore tenetur accusamus quas quod voluptatem libero vero nemo!'
    },
    {
        title: 'prueba de titulo2',
        date: 'Publicado el dia: '+ moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem sit expedita nisi veritatis rem officiis exercitationem, omnis reprehenderit corporis excepturi dolore tenetur accusamus quas quod voluptatem libero vero nemo!'
    },
    {
        title: 'prueba de titulo3',
        date: 'Publicado el dia: '+ moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem sit expedita nisi veritatis rem officiis exercitationem, omnis reprehenderit corporis excepturi dolore tenetur accusamus quas quod voluptatem libero vero nemo!'
    },
    {
        title: 'prueba de titulo4',
        date: 'Publicado el dia: '+ moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem sit expedita nisi veritatis rem officiis exercitationem, omnis reprehenderit corporis excepturi dolore tenetur accusamus quas quod voluptatem libero vero nemo!'
    },   {
        title: 'prueba de titulo5',
        date: 'Publicado el dia: '+ moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem sit expedita nisi veritatis rem officiis exercitationem, omnis reprehenderit corporis excepturi dolore tenetur accusamus quas quod voluptatem libero vero nemo!'
    }

 
];


   posts.forEach((item, index)=>{

    var posts = ` <article class="post">
    <h2> ${item.title}</h2>
    <span class="date">${item.date}</span>
    <p> ${item.content} </p>
        <a href="#" class="button-more">Leer mas</a>
</article>
<br>
<br>
    
    `;
    
   
    $('#post').append(posts);

   });

//SElector de temas

var theme = $('#theme');

$('#to-green').click(function(){

    theme.attr('href','css/green.css')
});

$('#to-red').click(function(){

    theme.attr('href','css/red.css')
});

$('#to-blue').click(function(){

    theme.attr('href','css/blue.css')
});


//SCROLL ARRIBA DE LA WEB

$('.subir').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//login falso

$('#login form').submit(function(){
var form_name = $('#form_name').val();
localStorage.setItem('form_name',form_name);

});

var form_name = localStorage.getItem('form_name');


if(form_name !=  null && form_name!='undefined'){

    $('#about p').html('<br><strong> Bienvenido, '+form_name+'<strong>');
    $('#about p').append('<a href="#" id="logout" > Cerrar sesion </a>');

    $('#login').hide();

    $('#logout').click(function(){
        localStorage.clear();
        location.reload();
    });
}

//Acordeon
if(window.location.href.indexOf('about')>-1){ 

    $('#acordeon').accordion();
    

}

//Reloj
if(window.location.href.indexOf('reloj')>-1){ 

    setInterval(function(){
    var reloj = moment().format('hh:mm:ss');
    $('#reloj').html(reloj);

    },10);
    

}

if(window.location.href.indexOf('contact')>-1){ 

    $('form input[name="date"]').datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
      });

}


});//FINAL

