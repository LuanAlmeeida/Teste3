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
