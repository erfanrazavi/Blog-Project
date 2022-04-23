let navBar = document.querySelectorAll('.nav-bar-top  ul li a')
let site = document.querySelector('.site')
let navRight = document.querySelector('.nav-right')
let positionNavBarTop = document.querySelector('.p-box-nav')
console.log(positionNavBarTop)
navBar.forEach((elem) => {
    elem.addEventListener('click' , function(e){
        e.preventDefault()
        
        document.querySelector('.nav-bar-top  ul li a.active').classList.remove('active')
        this.classList.add('active');

        let dataBox = this.getAttribute('data-content');
        
        document.querySelector('.para section.active').classList.remove('active');
        document.querySelector(`.para section[data-content = "${dataBox}"]`).classList.add('active')
        
        

        navRight.style.animation = ' fade .5s linear ';
        navRight.setAttribute("data-aos" , "fade-down")
    })
})

navBar.forEach((elem) => {
    elem.addEventListener('mouseenter' , function(e){
        let dataBox = this.getAttribute('data-content')
        positionNavBarTop.innerHTML = `${dataBox}`
        positionNavBarTop.classList.add('active')
        positionNavBarTop.style.position = 'absolute';
        
    })
})


navBar.forEach((elem) => {
    elem.addEventListener('mouseleave' , function(e){
        positionNavBarTop.innerHTML = ``
        positionNavBarTop.classList.remove('active')
        
    })
})