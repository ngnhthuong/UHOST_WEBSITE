var backdrop = document.querySelector('.backdrop');
var model = document.querySelector('.model');
var selectPlanButtons = document.querySelectorAll('.plan button')
var btnClose = document.querySelector('.model__action--negative')
// console.dir(btnClose)
// console.dir(selectPlanButtons);
// console.dir(backdrop)
// backdrop.style.display = 'none';

btnClose.addEventListener('click', closeModel)

backdrop.addEventListener('click', closeModel)

function closeModel(){
    model.style.display = 'none';
    backdrop.style.display = 'none';
}

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        model.style.display = 'block';
        backdrop.style.display = 'block';
    });
} 