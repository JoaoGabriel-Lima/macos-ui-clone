setTimeout(function(){
    localStorage.setItem("ligado",1)
    window.location.href = '../';
 }, 6300);

 window.onload = function() {
    
    
    openFullscreen()
}

function openFullscreen() {
    var elem = document.getElementById = "boot_container"
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  