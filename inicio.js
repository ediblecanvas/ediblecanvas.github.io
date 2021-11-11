//$(document).ready(()=>{
//    alert('Jquery esta listo');
//});

$(document).ready(main) ;
var contador = 1;
function main(){
    $(".menu_bar").click(function(){
       // $('nav').toggle (); aparece el menu de la nada
       if(contador ==1){
          
          $('nav').animate ({
              left: '0'
            });
            
          contador = 0;
          
        }else{
          contador = 1;
          $('nav'). animate( {
          left: '-100%'
          });
          
          
        }
    });
};