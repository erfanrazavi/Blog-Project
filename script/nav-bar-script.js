let navBar = document.querySelectorAll('.nav-bar-top  ul li a')
let site = document.querySelector('.site')
let navRight = document.querySelector('.nav-right')
navBar.forEach((elem) => {
    elem.addEventListener('click' , function(e){
        e.preventDefault()
        
        document.querySelector('.nav-bar-top  ul li a.active').classList.remove('active')
        this.classList.add('active');

        let dataBox = this.getAttribute('data-content');
        
        document.querySelector('.para section.active').classList.remove('active');
        document.querySelector(`.para section[data-content = "${dataBox}"]`).classList.add('active')
        
        

        navRight.style.animation = ' fade .5s linear ';
    })
})

