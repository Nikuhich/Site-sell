const call = document.querySelector('.header__first-logo')
const call_block = document.querySelector('.header__block-call')
const call_block_btn = document.querySelector('.btn-icon-none')

call.addEventListener('click', function () {
    call_block.style = `transform: translateX(0)`
})

call_block_btn.addEventListener('click', function () {
    call_block.style = `transform: translateX(500%)`
})



$(function () {
    $('.main-of-hide-block').hide()

    $('.user-rum-section__order-history-block-btn').click(function () {
        $('.main-of-hide-block').slideDown(500);
        $('.user-rum-section__order-history-block-btn').hide()
        $('.user-rum-section__order-history-block-box-scroll').addClass('box-scroll')
    })
})

// ------------------------random-number-of-order--------------------------------------------------

const order_num = document.querySelectorAll('.order')

function random_order() {
    let random = Math.floor(Math.random() * (5) + 1)
    return random;
}

for (let i = 0; i < order_num.length; i++) {


    if (random_order() == 1) {
        order_num[i].innerHTML = "№234234"
    }
    
    else if (random_order() == 2) {
        order_num[i].innerHTML = "№539876"
    }
    
    else if (random_order() == 3) {
        order_num[i].innerHTML = "№58794"
    }
    
    else if (random_order() == 4) {
        order_num[i].innerHTML = "№98743"
    }
    
    else if (random_order() == 5) {
        order_num[i].innerHTML = "№08745"
    }
    
    else if (random_order() == 6) {
        order_num[i].innerHTML = "№809432"
    }
}

const date_num = document.querySelectorAll('.user-rum-section__order-history-block-box-title-span')

function random_date() {
    let random_date = Math.floor(Math.random() * (5) + 1)
    return random_date;
}



for (let n = 0; n < date_num.length; n++) {


    if (random_date() == 1) {
        date_num[n].innerHTML = "20.12.2021"
    }
    
    else if (random_date() == 2) {
        date_num[n].innerHTML = "24.06.2020"
    }
    
    else if (random_date() == 3) {
        date_num[n].innerHTML = "12.07.2022"
    }
    
    else if (random_date() == 4) {
        date_num[n].innerHTML = "25.03.2020"
    }
    
    else if (random_date() == 5) {
        date_num[n].innerHTML = "25.08.2007"
    }
    
    else if (random_date() == 6) {
        date_num[n].innerHTML = "1.01.2021"
    }
}

// -------------------------register-sistem-------------------

const btn_reg_none = document.querySelector('.btn-none-registr')
const btn_reg_avto = document.querySelector('.btn-anto')
const block_reg = document.querySelector('.user-rum-section__registr-block-one')
const btn_reg_compl = document.querySelector('.btn-none-registr-complete')




btn_reg_none.addEventListener('click', function () {
    block_reg.style = `top: -500%`
    after_some_time()
})

btn_reg_compl.addEventListener('click', function () {
    block_reg.style = `top: -500%`
})

function after_some_time() {
    setTimeout(() => after_some_time_spawn(), 60000);
}

function after_some_time_spawn() {
    block_reg.style = `top: 15%`
}

function reg_spawn(params) {
    block_reg.style = `top: 15%`
}

function reg_spawn_time(params) {
    setTimeout(() => reg_spawn(), 3000);
}

reg_spawn_time()

$(function () {
    $('.user-rum-section__registr-block-one-box-input-two').hide()
    $('.btn-cancel').hide()
    $('.btn-conten-t').hide()
    $('.btn-none-registr-complete').hide()
    $('.title-two').hide()
    $('.user-rum-section__registr-block-one-text').hide()
    $('.user-rum-section__avto-block-cancel').hide()
    $('.user-rum-section__avto-block-input-box-second-input').hide()
    $('.user-rum-section__avto-block-title-two').hide()
    $('.user-rum-section__avto-block-none-second').hide()
    $('.user-rum-section__avto-block-text-second').hide()
    $('.avto-two').hide()
    $('.user-rum-section__avto-block-cancel-two').hide()
    $('.user-rum-section__avto-block-none-second').hide()
    
    $('.btn-conten').click(function () {
        $('.user-rum-section__registr-block-one-box-input').hide()
        $('.user-rum-section__registr-block-one-box-input-two').show()
        $('.btn-cancel').show()
        $('.btn-conten-t').show()
        $('.btn-conten').hide()
    })
    
    $('.btn-cancel').click(function () {
        $('.user-rum-section__registr-block-one-box-input').show()
        $('.user-rum-section__registr-block-one-box-input-two').hide()
        $('.btn-cancel').hide()
        $('.btn-conten-t').hide()
        $('.btn-conten').show()
    })
    
    $('.btn-conten-t').click(function () {
        $('.user-rum-section__registr-block-one-btn-box').hide()
        $('.user-rum-section__registr-block-one-box-input').hide()
        $('.user-rum-section__registr-block-one-box-input-two').hide()
        $('.user-rum-section__registr-block-one-txt').hide()
        $('.user-rum-section__registr-block-one-title').hide()
        $('.user-rum-section__registr-block-one-btn-box').hide()
        $('.btn-none-registr').hide()
        $('.btn-cancel').hide()
        $('.btn-none-registr-complete').show()
        $('.title-two').show()
        $('.user-rum-section__registr-block-one-text').show()
    })
    
    $('.btn-avtor').click(function () {
        $('.user-rum-section__registr-block-one').addClass('block-active-reg')
        $('.user-rum-section__avto-block').addClass('block-active-avto')
        $('.user-rum-section__avto-block-cancel').fadeIn()
    })
    
    $('.user-rum-section__avto-block-cancel').click(function () {
        $('.user-rum-section__registr-block-one').removeClass('block-active-reg')
        $('.user-rum-section__avto-block').removeClass('block-active-avto')
    })
    
    $('.user-rum-section__avto-block-btn-avto').click(function () {
        $('.user-rum-section__avto-block-input-box-second-input').show()
        $('.user-rum-section__avto-block-input-box-first').hide()
        $('.user-rum-section__avto-block-btn-avto').hide()
        $('.avto-two').show()
        $('.user-rum-section__avto-block-cancel-two').show()
        $('.user-rum-section__avto-block-cancel').hide()
    })
    
    $('.user-rum-section__avto-block-cancel-two').click(function () {
        $('.user-rum-section__avto-block-input-box-second-input').hide()
        $('.user-rum-section__avto-block-input-box-first').show()
        $('.user-rum-section__avto-block-btn-avto').show()
        $('.avto-two').hide()
        $('.user-rum-section__avto-block-cancel-two').hide()
        $('.user-rum-section__avto-block-cancel').show()
    })
    
    $('.avto-two').click(function () {
        $('.user-rum-section__avto-block-title-two').show()
        $('.user-rum-section__avto-block-title').hide()
        $('.user-rum-section__avto-block-none-first').hide()
        $('.user-rum-section__avto-block-none-second').hide()
        $('.user-rum-section__avto-block-text-first').hide()
        $('.user-rum-section__avto-block-text-second').show()
        $('.user-rum-section__avto-block-input-box-second-input').hide()
        $('.avto-two').hide()
        $('.user-rum-section__avto-block-none-second').show()
        $('.user-rum-section__avto-block-none-first').hide()
        $('.user-rum-section__avto-block-cancel-two').hide()
    })
    
    $('.user-rum-section__avto-block-none-second').click(function () {
        $('.user-rum-section__avto-block').addClass('block-possive-auto')
        $('.user-rum-section__avto-block').removeClass('block-active-avto')
    })
    
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