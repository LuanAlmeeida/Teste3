window.onscroll = function() {
      showScrollButton();
    };

    function showScrollButton() {
      var scrollButton = document.getElementById("scrollButton");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }

    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }