//Fully load the DOM before running the script
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
  el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})

// Code to overwrite ARIA attributes
  const elementsToFix = document.getElementsByClassName('fa');
  elementsToFix.forEach(element => {
    element.setAttribute("aria-hidden", "false");
  });
});