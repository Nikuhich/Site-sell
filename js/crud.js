const number_order = document.querySelectorAll('.id-span')



function random_order() {
    let a = Math.floor(Math.random() * (89) + 10);
    return a;
}
for (let i = 0; i < number_order.length; i++) {

    number_order[i].innerHTML = random_order();
}

// -------------------------name----------------------------
const name_order = document.querySelectorAll('.name')


function random_name() {
    let b = Math.floor(Math.random() * (7) + 1);
    return b;
}

for (let n = 0; n < name_order.length; n++) {
    let name = random_name();
    if (name == 1) {
        name_order[n].innerHTML = "Феликс";
    }

    if (name == 2) {
        name_order[n].innerHTML = "Сергей";
    }

    if (name == 3) {
        name_order[n].innerHTML = "Фаркоп";
    }

    if (name == 4) {
        name_order[n].innerHTML = "Дарвин";
    }

    if (name == 5) {
        name_order[n].innerHTML = "Данька";
    }

    if (name == 6) {
        name_order[n].innerHTML = "Кирилл";
    }

    if (name == 6) {
        name_order[n].innerHTML = "Андрей";
    }

}

// -----------------sername-------------------------

const sername_order = document.querySelectorAll('.sername')

function random_sername() {
    let c = Math.floor(Math.random() * (7) + 1);
    return c;
}

for (let b = 0; b < sername_order.length; b++) {
    let sername = random_sername();
    if (sername == 1) {
        sername_order[b].innerHTML = "Феликсов";
    }

    if (sername == 2) {
        sername_order[b].innerHTML = "Сергеeв";
    }

    if (sername == 3) {
        sername_order[b].innerHTML = "Фаркопич";
    }

    if (sername == 4) {
        sername_order[b].innerHTML = "Дарвинов";
    }

    if (sername == 5) {
        sername_order[b].innerHTML = "Данилов";
    }

    if (sername == 6) {
        sername_order[b].innerHTML = "Кириллов";
    }

    if (sername == 6) {
        sername_order[b].innerHTML = "Андреев";
    }

}

// ---------------------gmail---------------------------------


const gmail_order = document.querySelectorAll('.gmail')

function random_gmail() {
    let d = Math.floor(Math.random() * (7) + 1);
    return d;
}

for (let b = 0; b < gmail_order.length; b++) {
    let gmail = random_gmail();
    if (gmail == 1) {
        gmail_order[b].innerHTML = "Skvor@mail.ru";
    }

    if (gmail == 2) {
        gmail_order[b].innerHTML = "Kiril@mail.ru";
    }

    if (gmail == 3) {
        gmail_order[b].innerHTML = "Фарко@mail.ru";
    }

    if (gmail == 4) {
        gmail_order[b].innerHTML = "Дарви@mail.ru";
    }

    if (gmail == 5) {
        gmail_order[b].innerHTML = "Данил@mail.ru";
    }

    if (gmail == 6) {
        gmail_order[b].innerHTML = "Кирил@mail.ru";
    }

    if (gmail == 6) {
        gmail_order[b].innerHTML = "Андре@mail.ru";
    }

}

// --------------------location-----------------------


const location_order = document.querySelectorAll('.location')

function random_location() {
    let l = Math.floor(Math.random() * (7) + 1);
    return l;
}

for (let e = 0; e < location_order.length; e++) {
    let location = random_location();
    if (location == 1) {
        location_order[e].innerHTML = "Самара, Россия";
    }

    if (location == 2) {
        location_order[e].innerHTML = "Уфа, Россия";
    }

    if (location == 3) {
        location_order[e].innerHTML = "Казань, Россия";
    }

    if (location == 4) {
        location_order[e].innerHTML = "Пермь, Россия";
    }

    if (location == 5) {
        location_order[e].innerHTML = "Иркутск, Россия";
    }

    if (location == 6) {
        location_order[e].innerHTML = "Краснодар, Россия";
    }

    if (location == 6) {
        location_order[e].innerHTML = "Сочи, Россия";
    }

}

// ------------------------hobby--------------------------------


const hobby_order = document.querySelectorAll('.hobby')

function random_hobby() {
    let g = Math.floor(Math.random() * (7) + 1);
    return g;
}

for (let f = 0; f < hobby_order.length; f++) {
    let hobby = random_location();
    if (hobby == 1) {
        hobby_order[f].innerHTML = "Фотографии";
    }

    if (hobby == 2) {
        hobby_order[f].innerHTML = "Учитель";
    }

    if (hobby == 3) {
        hobby_order[f].innerHTML = "Програмист";
    }

    if (hobby == 4) {
        hobby_order[f].innerHTML = "Копирайтер";
    }

    if (hobby == 5) {
        hobby_order[f].innerHTML = "Ассистент";
    }

    if (hobby == 6) {
        hobby_order[f].innerHTML = "Менеджер";
    }

    if (hobby == 6) {
        hobby_order[f].innerHTML = "Модератор";
    }

}

// -----------------delete-user-order-----------------------------------------

$(function () {
    $('.last-order').hide()
    
    $('.first-and-last__discription-block-two-btn-box-btn').click(function () {
        $('.user-order').slideUp(500)
        $('.last-order').slideDown(500)
        $('.first-and-last__discription-block-two').addClass('active')
    })
})

const delete_btn = document.querySelector('.crud__about-block-ul-li-two-btn-box-btn-del')
const discription = document.querySelector('.first-and-last__discription-block-two')
const cancel = document.querySelector('.first-and-last__discription-block-two-btn-box-btn-two')

delete_btn.addEventListener('click', function () {
    discription.style = `opacity: 1; z-index: 10`
})

cancel.addEventListener('click', function () {
    discription.style = `opacity: 0; z-index: -1`
})

// ------------------------------fone-namber------------------------
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