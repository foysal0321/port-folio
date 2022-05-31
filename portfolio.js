
//navbar
$('#open').click(function(){
    $('.menu').toggle(900)
   $('#open').hide()
    $('#clos').show()
})
$('#clos').click(function(){
    $('.menu').toggle(900)
    $('#open').show()
    $('#clos').hide()
})
$(window).on('scroll load',function(){
    
})
 let click=document.querySelectorAll('.click')
 let menu=document.querySelector('.menu')
 let openn=document.querySelector('#open')
 let clos=document.querySelector('#clos')
 click.forEach(c=>{
     openn.addEventListener('click',()=>{
         c.onclick=function(){
             menu.style.display='none'
             clos.style.display='none'
             openn.style.display='block'
             openn.style.padding='8px'
         }
     })
 })

   window.addEventListener('scroll',sc)
   function sc(){
        let nav =document.querySelector('.nav')
 if(window.scrollY>0){
     nav.style.background="white" 
     nav.classList.add('nactive')   
 }else{
    nav.style.background='rgba(22, 22, 22, 0.76)'
 }
   }
  let topp =document.querySelector('.top')
  window.addEventListener('scroll',()=>{
   if(window.pageYOffset > 100){
       topp.classList.add('tactive')
   }else{
    topp.classList.remove('tactive')
   }
  })

 // filter
  let pbtn=document.querySelectorAll('.pbtn')
  let pimg=document.querySelectorAll('.portpic')

  pbtn.forEach(p=>{
      p.onclick=function(){
          pbtn.forEach(p=>{
           p.classList=''
          })
          p.classList.add('pactive')
          let data=p.getAttribute('data-b')
          pimg.forEach(i=>{
            i.classList.add('hide')
            i.classList.remove('actt')
              if(i.getAttribute('data-i') === data || data==='all'){
                  i.classList.remove('hide')
                  i.classList.add('actt')               
              }
          })
      }
  })
//

//animation

 AOS.init({
     duration: 1300,
   })
  // typed
  let typed = new Typed('.text', {   
    strings: ['Web Disigner', 'Front-End Devloper'],
    typeSpeed: 60,
    startDelay: 1600,
    backSpeed: 60,
    loop:true,
  });
  //carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    //autoplay:true,
    dots:true
})


