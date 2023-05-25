window.onscroll = function() {
      showScrollButton();
    };

    function showScrollButton() {
      var scrollButton = document.getElementById("scrollButton");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }

    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    function performSearch() {
      var searchInputValue = document.getElementById("searchInput").value.toLowerCase();
      var pageContent = document.body.innerHTML.toLowerCase();

      if (pageContent.includes(searchInputValue)) {
        alert("Texto encontrado!");
      } else {
        alert("Texto não encontrado.");
      }
    }
   // Função Popup de Busca
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("searchPopup").style.display = "none";
    });
    
    function openSearchPopup() {
      document.getElementById("searchPopup").style.display = "block";
    }
    
    function closeSearchPopup() {
      document.getElementById("searchPopup").style.display = "none";
    }

  // Função para alternar o modo de alto contraste
function toggleContrast() {
  var body = document.querySelector('body');
  body.classList.toggle('contrast');
}

// Fixar o Menu ao Rolar a Página

window.addEventListener('scroll', function() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  // Verificar se a largura da tela é maior que 960px
  if (screenWidth >= 960) {
    var menu = document.querySelector('.main-menu');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var offset = menu.offsetTop;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    if (scrollTop > offset && scrollTop + windowHeight < bodyHeight) {
      menu.classList.add('fixed-menu');
      document.body.style.paddingTop = menu.offsetHeight + 'px';
    } else {
      menu.classList.remove('fixed-menu');
      document.body.style.paddingTop = 0;
    }
  }
});


//Menu Principal em Telas Pequenas

// Seleciona o botão de menu e o menu principal
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');

// Adiciona um evento de clique ao botão de menu
menuToggle.addEventListener('click', function() {
  // Adiciona ou remove a classe 'active' no botão de menu
  menuToggle.classList.toggle('active');
});




// Menu Sanduíche

function toggleMenu() {
  var navbarMenu = document.getElementById('navbarMenu');
  navbarMenu.classList.toggle('show');
}


// Menu Sanduíche 2
function toggleMainMenu() {
  var navbarMenu = document.getElementById('navbarMenu2');
  navbarMenu.classList.toggle('show');
}


// Mudar o Tamanho dos Ícones das Redes Sociais

function updateIconClasses() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Facebook Icon
  var instagramIcon = document.getElementById('facebookIcon');
  if (screenWidth <= 960) {
    instagramIcon.classList.remove('fa-2x');
    instagramIcon.classList.add('fa-x');
  } else {
    instagramIcon.classList.remove('fa-x');
    instagramIcon.classList.add('fa-2x');
  }

  // Instagram Icon
  var instagramIcon = document.getElementById('instagramIcon');
  if (screenWidth <= 960) {
    instagramIcon.classList.remove('fa-2x');
    instagramIcon.classList.add('fa-x');
  } else {
    instagramIcon.classList.remove('fa-x');
    instagramIcon.classList.add('fa-2x');
  }

  // Twitter Icon
  var twitterIcon = document.getElementById('twitterIcon');
  if (screenWidth <= 960) {
    twitterIcon.classList.remove('fa-2x');
    twitterIcon.classList.add('fa-x');
  } else {
    twitterIcon.classList.remove('fa-x');
    twitterIcon.classList.add('fa-2x');
  }

  // Youtube Icon
  var youtubeIcon = document.getElementById('youtubeIcon');
  if (screenWidth <= 960) {
    youtubeIcon.classList.remove('fa-2x');
    youtubeIcon.classList.add('fa-x');
  } else {
    youtubeIcon.classList.remove('fa-x');
    youtubeIcon.classList.add('fa-2x');
  }
}

// Chamar a função quando a página carregar e quando a janela for redimensionada
window.addEventListener('load', updateIconClasses);
window.addEventListener('resize', updateIconClasses);















