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
});
















