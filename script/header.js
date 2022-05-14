function openSideMenu(){
    document.getElementById('navbar-side-id').style.width= '250px';
    document.getElementById('btn-open').style.opacity= '0';

}

//Side Menu close
function closeSideMenu(){
  document.getElementById('navbar-side-id').style.width= '0';
  document.getElementById('btn-open').style.opacity= '1';
}


const Evenumang = document.getElementById('a-evenumang')
const Kurser = document.getElementById('a-kurser')
const OpenGym = document.getElementById('a-open-gym')




function closeSideMenuEvunumang(){
  document.getElementById('navbar-side-id').style.width= '0';
    document.getElementById('btn-open').style.opacity= '1';
    }



function closeSideMenuKurser(){

  document.getElementById('navbar-side-id').style.width= '0';
  document.getElementById('btn-open').style.opacity= '1';
}


function closeSideMenuOpenGym(){
  
  document.getElementById('navbar-side-id').style.width= '0';
  document.getElementById('btn-open').style.opacity= '1';
}



function closeSideMenuSWAG(){
  
  document.getElementById('navbar-side-id').style.width= '0';
  document.getElementById('btn-open').style.opacity= '1';
}

/*SWAG*/
function openSwag() {
    document.getElementById('swagcontent').style.height = "100%";
    document.getElementById('swagcontent').style.width = "100%";
  }
  function closeBox(id) {
    document.getElementById().style.height = "0px";
    document.getElementById().style.opacity = "0";
  }
 
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo-side")

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
    logo.style.height = "40px";
  }else {
    logo.style.height = "80px"
  }
})
