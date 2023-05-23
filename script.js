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