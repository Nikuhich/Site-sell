const link = document.querySelectorAll(' .main-foto-block__tab-menu-ul-link ')

const tab = document.querySelectorAll(' .main-foto-block__block-tab ')

for (let i = 0; i < link.length; i++) {
    
    link[i].addEventListener('click', function () {
        
        
        for (let x = 0; x < link.length; x++) {
            link[x].classList.remove('main-foto-block__tab-menu-ul-link-active')
            tab[x].classList.remove('main-foto-block__block-tab-active')
        }
        
        link[i].classList.add('main-foto-block__tab-menu-ul-link-active')
        tab[i].classList.add('main-foto-block__block-tab-active')
        
    })
    
}

const call = document.querySelector('.header__first-logo')
const call_block = document.querySelector('.header__block-call')
const call_block_btn = document.querySelector('.btn-icon-none')

call.addEventListener('click', function () {
    call_block.style = `transform: translateX(0)`
})

call_block_btn.addEventListener('click', function () {
    call_block.style = `transform: translateX(500%)`
})





const block_table = document.querySelector('.header__block-table')
const btn_table = document.querySelector('.btn-tablr')
const btn_table_none = document.querySelector('.btn-table')




btn_table.addEventListener('click', function () {
    block_table.classList.add('active-table')
    block_table.classList.remove('possive-table')
})


btn_table_none.addEventListener('click', function () {
    block_table.classList.remove('active-table')
    block_table.classList.add('possive-table')
})


$(function () {
    $('.box-gren').on('click', function () {
     
    $('.box-gren').removeClass('table_active')
    $(this).toggleClass('table_active')
    })
}) 

const img = document.querySelectorAll('.header__row-img')
const dark = document.querySelector('.block_dark')

let nk = [];


for (let i = 0; i < img.length; i++) {
    nk[i]=0;
    img[i].addEventListener('click', function () {

        if (nk[i]==0) {
            img[i].style = `transform: scale(0.6); position: fixed; z-index: 11; top: -322px; left: 0;`
            dark.style = `position: fixed; width: 100%; height: 100%; background: #00000081; top:0; left:0; z-index: 10;`
            nk[i]=1;
            // time(i);
        }
        else if(nk[i]==1){
            img[i].style = `transform: scale(1); position: inherit; z-index: 1;`
            dark.style = `position: inherit; width: 0%; height: 0%; background: transparent;`
            nk[i]=0;
        }
        
        
    })
    
}
    

// function time(i) {
//     setTimeout(() => cancel(i), 3000);
// }
// function cancel(i) {
//     img[i].style = `width: 100%; height: 100%; position: inherit; z-index: 1;`
//     dark.style = `position: inherit; width: 0%; height: 0%; background: transparent;`
// }

