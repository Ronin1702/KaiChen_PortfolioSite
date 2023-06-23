var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.onload = function() {
  var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  if(isMac){
      var mobileLink = document.getElementById('iMessage');
      mobileLink.classList.remove('invisible');
  } return;
};




