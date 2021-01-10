/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownAction() {
    document.getElementById("dropdown-menu").classList.toggle("show");
  }

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.btn-dropdown')) {
      let dropDownItems = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropDownItems.length; i++) {
        let dropDownItem = dropDownItems[i];
        if (dropDownItem.classList.contains('show')) {
          dropDownItem.classList.remove('show');
        }
      }
      
    }
  }