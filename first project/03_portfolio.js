var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname,event){
  for( let tablink of  tablinks) {
    tablink.classList.remove("active-link");
  } 
  for(let tabcontent of  tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab");
}
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}
