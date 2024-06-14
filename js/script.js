var acc = document.getElementsByClassName('accordion');
var i;

for(i = 0;i < acc.length;i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active')

        var panel = this.nextElementSibling;
        if(panel.style.display === 'block'){
            panel.style.display = 'none'
        } else {
            panel.style.display = 'block'
        }
    })
}

var menu = document.getElementsByClassName('menu-mobile');
var u;

for (u = 0; u < menu.length; u++) {
    menu[u].addEventListener('click', function() {
        this.classList.toggle('active-menu');

        var buttons = document.querySelector('.btn-header-mobile')

        if (buttons.style.display === 'flex') {
            buttons.style.display = 'none';
        } else {
            buttons.style.display = 'flex';
        }
    })
}


window.addEventListener('DOMContentLoaded', () => {
    var buttom = document.querySelector('.btn-header-mobile')
    function verificarTamanhoTela() {
      if (window.innerWidth > 600) {
        buttom.style.display = 'none';
       
        var menuItems = document.getElementsByClassName('menu-mobile');
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove('active-menu');
            }
      } 
    }
    verificarTamanhoTela();
  
    window.addEventListener('resize', verificarTamanhoTela);

});