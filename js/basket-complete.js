// ----------------header-call---------------------


const call = document.querySelector('.header__first-logo')
const call_block = document.querySelector('.header__block-call')
const call_block_btn = document.querySelector('.btn-icon-none')

call.addEventListener('click', function () {
    call_block.style = `transform: translateX(0)`
})

call_block_btn.addEventListener('click', function () {
    call_block.style = `transform: translateX(500%)`
})


// --------------chack-box-in-dish----------------------------

const check_box = document.querySelectorAll('.block-order-table-box')
const kcjzklcj = document.querySelectorAll('.icon-table')


let for_check = [];
for (let l = 0; l < check_box.length; l++) {
    for_check[l] = 0;
    check_box[l].addEventListener('click', function () {
    if(for_check[l] == 0){
        kcjzklcj[l].style = `display: block`
        for_check[l] = 1;
    }
    
    else if(for_check[l] == 1){
        kcjzklcj[l].style = `display: none`
        for_check[l] = 0;
    }
    
})
}

// -------------------------first-emogy--------------------

const emogy_angry = document.querySelector('.icon-click-one')
const emogy_with = document.querySelector('.icon-click-two')
const emogy_smile = document.querySelector('.icon-click-three')

emogy_angry.addEventListener('click', function () {
        emogy_angry.style = `color: #CB3B48`
        emogy_with.style = `color: #ffffff`
        emogy_smile.style = `color: #ffffff`
})

emogy_with.addEventListener('click', function () {
        emogy_with.style = `color: #CBAB3B`
        emogy_angry.style = `color: #ffffff`
        emogy_smile.style = `color: #ffffff`
})

emogy_smile.addEventListener('click', function () {
        emogy_smile.style = `color: #3ECB3B`
        emogy_angry.style = `color: #ffffff`
        emogy_with.style = `color: #ffffff`
})

// -------------------------second-emogy--------------------

const emogy_angry_two = document.querySelector('.icon-click-for')
const emogy_with_two = document.querySelector('.icon-click-five')
const emogy_smile_two = document.querySelector('.icon-click-six')

emogy_angry_two.addEventListener('click', function () {
        emogy_angry_two.style = `color: #CB3B48`
        emogy_with_two.style = `color: #ffffff`
        emogy_smile_two.style = `color: #ffffff`
})

emogy_with_two.addEventListener('click', function () {
        emogy_with_two.style = `color: #CBAB3B`
        emogy_angry_two.style = `color: #ffffff`
        emogy_smile_two.style = `color: #ffffff`
})

emogy_smile_two.addEventListener('click', function () {
        emogy_smile_two.style = `color: #3ECB3B`
        emogy_angry_two.style = `color: #ffffff`
        emogy_with_two.style = `color: #ffffff`
})

// -------------------------second-emogy--------------------

const emogy_angry_three = document.querySelector('.icon-click-seven')
const emogy_with_three = document.querySelector('.icon-click-eight')
const emogy_smile_three = document.querySelector('.icon-click-nine')

emogy_angry_three.addEventListener('click', function () {
        emogy_angry_three.style = `color: #CB3B48`
        emogy_with_three.style = `color: #ffffff`
        emogy_smile_three.style = `color: #ffffff`
})

emogy_with_three.addEventListener('click', function () {
        emogy_with_three.style = `color: #CBAB3B`
        emogy_angry_three.style = `color: #ffffff`
        emogy_smile_three.style = `color: #ffffff`
})

emogy_smile_three.addEventListener('click', function () {
        emogy_smile_three.style = `color: #3ECB3B`
        emogy_angry_three.style = `color: #ffffff`
        emogy_with_three.style = `color: #ffffff`
})

// -------------------------second-emogy--------------------

const emogy_angry_for = document.querySelector('.icon-click-ten')
const emogy_with_for = document.querySelector('.icon-click-eleven')
const emogy_smile_for = document.querySelector('.icon-click-twelfe')

emogy_angry_for.addEventListener('click', function () {
        emogy_angry_for.style = `color: #CB3B48`
        emogy_with_for.style = `color: #ffffff`
        emogy_smile_for.style = `color: #ffffff`
})

emogy_with_for.addEventListener('click', function () {
        emogy_with_for.style = `color: #CBAB3B`
        emogy_angry_for.style = `color: #ffffff`
        emogy_smile_for.style = `color: #ffffff`
})

emogy_smile_for.addEventListener('click', function () {
        emogy_smile_for.style = `color: #3ECB3B`
        emogy_angry_for.style = `color: #ffffff`
        emogy_with_for.style = `color: #ffffff`
})

// -------------------------second-emogy--------------------

const emogy_angry_five = document.querySelector('.icon-click-thirty')
const emogy_with_five = document.querySelector('.icon-click-forty')
const emogy_smile_five = document.querySelector('.icon-click-fiften')

emogy_angry_five.addEventListener('click', function () {
        emogy_angry_five.style = `color: #CB3B48`
        emogy_with_five.style = `color: #ffffff`
        emogy_smile_five.style = `color: #ffffff`
})

emogy_with_five.addEventListener('click', function () {
        emogy_with_five.style = `color: #CBAB3B`
        emogy_angry_five.style = `color: #ffffff`
        emogy_smile_five.style = `color: #ffffff`
})

emogy_smile_five.addEventListener('click', function () {
        emogy_smile_five.style = `color: #3ECB3B`
        emogy_angry_five.style = `color: #ffffff`
        emogy_with_five.style = `color: #ffffff`
})

// -------------------------rewiew---------------------

$(function () {
    $('.rewiew-block__title').on('click', function () {
        $('.rewiew-block__hide-box').slideToggle(500)
        $('.icon-one').toggleClass('icon-one-active')
    })
})

// ----------------------------for-pay-block--------------


const check = document.querySelectorAll('.first-and-last__about-basket-block-order-and-check-hide-block-box-discription-ul-li-span')

let ind = []

for (let v = 0; v < check.length; v++) {

    ind[v] = 0;

    check[v].addEventListener('click', function () {

        if (ind[v] == 0) {

            check[v].style = `border: 7px solid #B63847`

            ind[v] = 1;
        } else {

            check[v].style = `border: 7px solid #fff`

            ind[v] = 0;
        }

    })
}

// ------------for-pay----------------------------

const none_btn = document.querySelector('.first-and-last__about-basket-block-order-and-check-hide-block-box-discription-btn-none')

const btn_pay = document.querySelector('.first-and-last__about-basket-block-order-and-check-hide-block-box-discription-btn')

const btn_pay_order = document.querySelector('.first-and-last__about-basket-block-order-and-check-btn')
const pay_block = document.querySelector('.first-and-last__about-basket-block-order-and-check-pay')
const text_pay = document.querySelector('.first-and-last__discription-block-three')


let pay_mony = 0;

btn_pay_order.addEventListener('click', function () {
    if(pay_mony == 0){
            pay_block.style = `top: 15%; left: 20%`
    }
    
    else{
        text_pay.style = `opacity: 1; z-index: 1;`
        time()
    }

})


btn_pay.addEventListener('click', function () {
    if(pay_mony == 0){
            pay_block.style = `top: -100%; left: 20%`
            pay_mony = 1;
    }

})

none_btn.addEventListener('click', function () {
    pay_block.style = `top: -100%;`
})


function reset() {
    text_pay.style = `opacity: 0; z-index: -1;`
    text_pay.style = `opacity: 0; z-index: -1;`
}

function time() {
    setTimeout(() => reset(), 1000);
}



// -------------------------for-workes--------------------

const help_btn = document.querySelector('.first-and-last__about-basket-block-order-and-check-for-btn-btn-two')
const help_text = document.querySelector('.first-and-last__discription-block-two')

help_btn.addEventListener('click', function () {
    help_text.style = `opacity: 1; z-index: 10;`
    time_two()
})


function reset_two() {
    help_text.style = `opacity: 0; z-index: -1;`
}

function time_two() {
    setTimeout(() => reset_two(), 1000);
}


// -------------------------for-cancel-----(first)---------------

function reset_cancel() {
    none_text.style = `opacity: 0; z-index: -1;`
}

function time_cancel() {
    setTimeout(() => reset_cancel(), 1000);
}

const none_text = document.querySelector('.first-and-last__discription-block-for')
const minus_tom = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-quanit-link-minus')
const plus_tom = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-quanit-link-plus')

minus_tom.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

plus_tom.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

// -------------------------for-cancel-----(second)---------------

const minus_meat = document.querySelector('.meatminus')
const plus_meat = document.querySelector('.meatplus')

minus_meat.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

plus_meat.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

// -------------------------for-cancel-----(last)---------------

const minus_cezar = document.querySelector('.cezarminus')
const plus_cezar = document.querySelector('.cezarplus')

minus_cezar.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

plus_cezar.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

// -------------------------for-cancel-----(extra (first))---------------

const btn_ter_one = document.querySelector('.first-and-last__about-basket-block-additives-ter-btn')

btn_ter_one.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

// -------------------------for-cancel-----(extra (second))---------------

const btn_ter_two = document.querySelector('.btn-ter-two')

btn_ter_two.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

// -------------------------for-cancel-----(extra (last))---------------

const btn_tom = document.querySelector('.first-and-last__about-basket-block-additives-tomato-btn')

btn_tom.addEventListener('click', function () {
    none_text.style = `opacity: 1; z-index: 10;`
    time_cancel()
})

// ---------------------for-rewiew(btn)-----------------------

const text_world = document.querySelector('.first-and-last__discription-block-five')
const text_workes = document.querySelector('.first-and-last__discription-block-six')
const btn_world = document.querySelector('.rewiew-block__hide-box-block-btn-one')
const btn_for_workes = document.querySelector('.rewiew-block__hide-box-block-btn-two')

btn_world.addEventListener('click', function () {
    text_world.style = `opacity: 1; z-index: 10;`
    time_rewiew()
    time_rewiew_reload()
})

btn_for_workes.addEventListener('click', function () {
    text_workes.style = `opacity: 1; z-index: 10;`
    time_rewiew()
    time_rewiew_reload()
})

function del_rewiew() {
    text_workes.style = `opacity: 0; z-index: -1;`
    text_world.style = `opacity: 0; z-index: -1;`
}

function time_rewiew() {
    setTimeout(() => del_rewiew(), 1000);
}

function time_rewiew_reload() {
    setTimeout(() => reload_world(), 1500);
}

function reload_world() {
    location.reload(1000)
}


// ---------------------------FOR_RANDOM(name-order)--------------------------  

const name_order = document.querySelector('.name-order')

function random_name_order() {
    let random_order = Math.floor(Math.random() * (5) + 1)
    return random_order
}

if(random_name_order() == 1){
    name_order.innerHTML = "№010011"
}

else if(random_name_order() == 2){
    name_order.innerHTML = "№598467"
}

else if(random_name_order() == 3){
    name_order.innerHTML = "№025947"
}

else if(random_name_order() == 4){
    name_order.innerHTML = "№092309"
}

else if(random_name_order() == 5){
    name_order.innerHTML = "№250807"
}

else{
    name_order.innerHTML = "№793846"
}


// ---------------------------FOR_RANDOM(time-order)--------------------------  

const time_order = document.querySelector('.time-order')

function random_time_order() {
    let random_time = Math.floor(Math.random() * (5) + 1)
    return random_time
}

if(random_time_order() == 1){
    time_order.innerHTML = "18:30"
}

else if(random_time_order() == 2){
    time_order.innerHTML = "12:24"
}

else if(random_time_order() == 3){
    time_order.innerHTML = "16:32"
}

else if(random_time_order() == 4){
    time_order.innerHTML = "09:12"
}

else if(random_time_order() == 5){
    time_order.innerHTML = "22:47"
}

else{
    time_order.innerHTML = "00:52"
}

// ---------------------------FOR_RANDOM(status-order)--------------------------  

const status_order = document.querySelector('.status-order')

function random_status_order() {
    let random_status = Math.floor(Math.random() * (4) + 1)
    return random_status
}

if(random_status_order() == 1){
    status_order.innerHTML = "ГОТОВИТСЯ"
}

else if(random_status_order() == 2){
    status_order.innerHTML = "Готово"
}

else if(random_status_order() == 3){
    status_order.innerHTML = "Проверяется"
}

else if(random_status_order() == 4){
    status_order.innerHTML = "Подано"
}

// ---------------------------FOR_RANDOM(status-order)--------------------------  

const table_random = document.querySelector('.table-order')
const table_random_two = document.querySelectorAll('.block-order-table-box-two-span')

function random_table_order() {
    let random_table = Math.floor(Math.random() * (89) + 10)
    return random_table
}

let t = random_table_order();

for (let il = 0; il < table_random_two.length; il++) {
        table_random_two[il].innerHTML = t;
}

    table_random.innerHTML = t;
    

// ---------------------------------complete------------------------
// const complete = document.querySelector('.section-order-readi')
// const complete_del = document.querySelector('.section-order-readi-btn-none')

// complete_del.addEventListener('click', function () {
//     complete.style = `top: -500%`
// })

$(function () {
    $('.section-order-readi-btn-none').click(function () {
        $('.section-order-readi').addClass('complete_possive')
        $('.section-order-readi').removeClass('complete_active')
    })
    
    function active_complete_order() {
        $('.section-order-readi').addClass('complete_active')
        $('.section-order-readi').removeClass('complete_possive')
    }
    function complete_order() {
        setTimeout(() => active_complete_order(), 3000);
    }
    
    complete_order()
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