var backdrop = document.querySelector('.backdrop');
var model = document.querySelector('.model');
var selectPlanButtons = document.querySelectorAll('.plan button');
var btnClose = document.querySelector('.model__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav')
if(btnClose){
    btnClose.addEventListener('click', closeModel);
}

backdrop.addEventListener('click', function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModel();
})

function closeModel(){
    // model.style.display = 'none';
    // backdrop.style.display = 'none';
    if(model){
        model.classList.remove('open');

    }
    backdrop.classList.remove('open');
}

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // model.style.display = 'block';
        // backdrop.style.display = 'block';
        model.classList.add('open');
        backdrop.classList.add('open');
    });
} 

// navigation
toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})