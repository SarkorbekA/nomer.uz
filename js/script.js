
const rightSide = document.getElementById('new_numbers');
const leftSide = document.getElementById('about_number');



function btn() {
    leftSide.style.display = 'flex'
    leftSide.style.width = '100%'
    rightSide.style.display = 'none'
}

const buy_scene = document.querySelector('.buy_scene')

document.querySelector('.reg_back').addEventListener("click", reg_back)

function reg_back() {
    buy_scene.style.display = 'none'
}

document.querySelector('.buy_link').addEventListener("click", buy);

function buy(){
    buy_scene.style.display = 'flex';
};


document.getElementById('back').addEventListener("click", back);

function back() {
    leftSide.style.display = 'none'
    leftSide.style.width = '0%'
    rightSide.style.display = 'block'
};