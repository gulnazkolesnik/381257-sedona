  <script>
          var link = document.querySelector(".interest-search");
          var popup = document.querySelector(".search");
          
          popup.classList.add("search-close");
          link.addEventListener("click", function (event) { event.preventDefault();
          popup.classList.toggle("search-close");
                                                          });
          
         
      </