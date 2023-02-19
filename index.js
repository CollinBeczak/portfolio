/*vvvvvvvvvvvvvvvvvvvv MENU SHOW Y HIDDEN vvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/
const navMenu = document.getElementById('navMenu')
const navToggle = document.getElementById('navToggle')
const navClose = document.getElementById('navClose')
/*vvvv= MENU SHOW vvvvvvvv*/
/* Validate if constant exists */
if(navToggle) {
  console.log('asdfadsf')
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('showMenu')
  })
}

/*vvvv= MENU HIDDEN vvvvv*/
/* Validate if constant exists */
if(navClose) {
  console.log('asdfadsfasdkflhaghsdlghfk')
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('showMenu')
  })
}


/*vvvvvvvvvvvvvvvvvvvv REMOVE MENU MOBILE vvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/

const navLink = document.querySelectorAll('.navLink')

function linkAction(){
  const navMenu = document.getElementById('navMenu')
// When we click on each nav_link, we remove the show-menu class
navMenu.classList.remove('showMenu')
}

navLink.forEach(e => e.addEventListener('click', linkAction))

/*vvvvvvvvvvvvvvvvvvvv ACCORDION SKILLS vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/

/*vvvvvvvvvvvvvvvvvvvv QUALIFICATION TABS vvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/

/*vvvvvvvvvvvvvvvvvvvv SERVICES MODAL vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/

/*vvvvvvvvvvvvvvvvvvvv PORTFOLIO SWIPER  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/

/*vvvvvvvvvvvvvvvvvvvv TESTIMONIAL vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/

/*vvvvvvvvvvvvvvvvvvvv SCROLL SECTIONS ACTIVE LINK vvvvvvvvvvvvvvvvvvvv*/

/*vvvvvvvvvvvvvvvvvvvv CHANGE BACKGROUND HEADER vvvvvvvvvvvvvvvvvvvvvvv*/ 

/*vvvvvvvvvvvvvvvvvvvv SHOW SCROLL UP vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/ 

/*vvvvvvvvvvvvvvvvvvvv DARK LIGHT THEME vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/
