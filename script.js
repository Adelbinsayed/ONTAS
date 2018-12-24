function openNav() {
   
   // document.getElementById("main").style.marginLeft = "250px";
   document.querySelector('.boss').style.filter = 'blur(4px)';
   document.querySelector('.sidenav').style.display = 'grid';
    document.querySelector('.boss').style.marginLeft = "250px";
  }

  function closeNav() {
   
   //document.getElementById("main").style.marginLeft = "auto";
   document.querySelector('.boss').style.marginLeft = "0";
   document.querySelector('.sidenav').style.display = 'none';
    document.querySelector('.boss').style.filter = 'blur(0)';
  }
 