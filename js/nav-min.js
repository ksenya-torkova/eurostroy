var catalogNav=document.querySelector(".main-aside-menu-wrapper"),catalogNavToggle=document.querySelector(".main-aside-menu button");catalogNavToggle.addEventListener("click",function(){catalogNav.classList.contains("visible")?catalogNav.classList.remove("visible"):catalogNav.classList.add("visible")}),catalogNavToggle.addEventListener("click",function(a){a.preventDefault(),catalogNavToggle.classList.toggle("active")});