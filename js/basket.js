
const coast_end = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-end-price-no-price-span')
const coast_end_whis_price = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-end-price-with-price-span')
const quinity_product = document.querySelector('.first-and-last__about-order-block-title-span')


function for_none() {
    if (box_meat == 0 && box_par == 0 && box_cezar == 0) {
        coast_end.innerHTML = 0;
        coast_end_whis_price.innerHTML = 0;
        quinity_product.innerHTML = 0;
    }
}

function end_coast() {
    if (box_par == 0 && box_cezar != 0 && box_meat != 0) {
        coast_end.innerHTML = r * 500 + q * 530;
        coast_end_whis_price.innerHTML = r * 500 + q * 530 - 300;
        quinity_product.innerHTML = 2;
    }
    
    else if (box_meat == 0 && box_par != 0 && box_cezar != 0) {
        coast_end.innerHTML = i * 359 + q * 530;
        coast_end_whis_price.innerHTML = i * 359 + q * 530 - 300;
        quinity_product.innerHTML = 2;
    }
    
    else if (box_cezar == 0 && box_meat != 0 && box_par != 0) {
        coast_end.innerHTML = i * 359 + r * 500;
        coast_end_whis_price.innerHTML = i * 359 + r * 500 - 300;
        quinity_product.innerHTML = 2;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
        coast_end.innerHTML = q * 530;
        coast_end_whis_price.innerHTML = q * 530 - 300;
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_cezar == 0 && box_meat != 0) {
        coast_end.innerHTML = r * 500;
        coast_end_whis_price.innerHTML = r * 500 - 300;
        quinity_product.innerHTML = 1;
    }
    
    else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
        coast_end.innerHTML = i * 359;
        coast_end_whis_price.innerHTML = i * 359 - 300;
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
        coast_end.innerHTML = 0;
        coast_end_whis_price.innerHTML = 0;
        quinity_product.innerHTML = 0;
    }
    
    else {
        coast_end.innerHTML = i * 359 + r * 500 + q * 530;
        coast_end_whis_price.innerHTML = i * 359 + r * 500 + q * 530 - 300;
        quinity_product.innerHTML = 3;

        if (tom == 1) {
            coast_end.innerHTML = i * 389 + r * 500 + q * 530;
            coast_end_whis_price.innerHTML = i * 389 + r * 500 + q * 530 - 300;
        }
    }

}

function end_coast_minus() {

    if (box_par == 0 && box_meat != 0 && box_cezar != 0) {
        end_coast() - 1030;
    } 
    
    else if (box_meat == 0 && box_cezar != 0 && box_par != 0) {
        end_coast() - 889;
    } 
    
    else if (box_cezar == 0 && box_par != 0 && box_meat != 0) {
        end_coast() - 859;
    } 
    
    else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
        end_coast() - 530;
    } 
    
    else if (box_par == 0 && box_cezar == 0 & box_meat != 0) {
        end_coast() - 500;
    } 
    
    else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
        end_coast() - 359;
    } 
    
    else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
        end_coast() - 0;
    } 
    
    else {
        end_coast() - 1389;
    }


}






// -----------------fisrt-product-----------------------------------------------

const plus = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-quanit-link-plus')
const minus = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-quanit-link-minus')
const out = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-quanit-outupt')
const kcall = document.querySelector('.fisrt-and-last__dish-block-box-main-box-title-box-title-span')
const coast = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-title-spann')
const quinity_order_par = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-dish-quinity-span')
const coast_order_par = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-dish-coast-span')


let i = 1;



plus.addEventListener('click', function () {




    if (i < 9) {
        i++




        if (box_par == 0 && box_meat != 0 && box_cezar != 0) {
            priceses = r * 500 + q * 530 - 300;
        }
        
        else if (box_meat == 0 && box_par != 0 && box_cezar != 0) {
            priceses = i * 359 + q * 530 - 300
        } 
        
        else if (box_cezar == 0 && box_par != 0 && box_meat != 0) {
            priceses = i * 359 + r * 500 - 300
        } 
        
        else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
            priceses = q * 530 - 300
        } 
        
        else if (box_par == 0 && box_cezar == 0 && box_meat != 0) {
            priceses = r * 500 - 300
        } 
        
        else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
            priceses = i * 359 - 300
        } 
        
        else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
            priceses = 0
        } 
        
        
        else {
            priceses = i * 359 + r * 500 + q * 530 - 300;
        }




        if (tom == 1) {

            if (box_par == 0 && box_meat != 0 && box_cezar != 0) {
                priceses = r * 500 + q * 530 - 300
            }
            
            else {
                priceses = i * 389 + i * -21 + r * 500 + q * 530 - 300;
            }
        }

        out.innerHTML = i;
        quinity_order_par.innerHTML = i;
        coast_end_whis_price.innerHTML = priceses;


        kcal();
        coas();
        end_coast()
    }
})

minus.addEventListener('click', function () {




    if (i > 1) {
        i--


        out.innerHTML = i;
        quinity_order_par.innerHTML = i;
        coast_end_whis_price.innerHTML = priceses

        kcal() - 500;
        coas() - 718;
        end_coast_minus()
    }

})

function kcal() {
    kcall.innerHTML = i * 245;
}

function coas() {

    if (tom == 1) {
        coast.innerHTML = i * 389;
        coast_order_par.innerHTML = i * 389;
    }
    
    else {
        coast.innerHTML = i * 359;
        coast_order_par.innerHTML = i * 359;
    }
}









// ---------------------meat-product---------------------------


const pluss = document.querySelector('.meatplus')
const minuss = document.querySelector('.meatminus')
const outt = document.querySelector('.outMeat')
const ckall = document.querySelector('.meatkcall')
const many = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-title-spanmeat')
const quinity_order_meat = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-dish-meat-quinity-span')
const coast_order_meat = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-dish-meat-coast-span')

let r = 1;

pluss.addEventListener('click', function () {




    if (r < 9) {
        r++

        if (box_par == 0 && box_meat != 0 && box_cezar != 0) {
            priceses = r * 500 + q * 530 - 300
        } 
        
        else if (box_meat == 0 && box_par != 0 && box_cezar != 0) {
            priceses = i * 359 + q * 530 - 300
        } 
        
        else if (box_cezar == 0 && box_meat != 0 && box_par != 0) {
            priceses = i * 359 + r * 500 - 300
        } 
        
        else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
            priceses = q * 530 - 300
        } 
        
        else if (box_par == 0 && box_cezar == 0 && box_meat != 0) {
            priceses = r * 500 - 300
        } 
        
        else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
            priceses = i * 359 - 300
        } 
        
        else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
            priceses = 0 - 300;
        } 
        
        else {
            priceses = i * 359 + r * 500 + q * 530 - 300;
        }




        if (tero == 1) {

            if (box_meat == 0 && box_par != 0 && box_cezar != 0) {
                priceses = i * 359 + q * 530 - 300;
            }
            
            else {
                priceses = i * 389 + i * -21 + r * 500 + q * 530 - 300;
            }
        }

        outt.innerHTML = r;
        quinity_order_meat.innerHTML = r;
        coast_end_whis_price.innerHTML = priceses;


        kolor();
        pay();
        end_coast()
    }
})

minuss.addEventListener('click', function () {

    if (r > 1) {
        r--

        outt.innerHTML = r;
        quinity_order_meat.innerHTML = r;
        coast_end_whis_price.innerHTML = priceses;


        kolor() - 800;
        pay() - 1000;
        end_coast_minus()
    }

})

function kolor() {
    ckall.innerHTML = r * 400;
}

function pay() {


    if (tero == 1) {
        many.innerHTML = r * 530;
        coast_order_meat.innerHTML = r * 530;
    } 
    
    else {
        many.innerHTML = r * 500;
        coast_order_meat.innerHTML = r * 500;
    }
}

// ------------------cezar-product----------------------------

const plush = document.querySelector('.cezarplus')
const minush = document.querySelector('.cezarminus')
const outside = document.querySelector('.outcezar')
const kolory = document.querySelector('.cezarkcall')
const mony = document.querySelector('.fisrt-and-last__dish-block-box-main-box-about-title-spancezar')
const quinity_order_cezar = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-dish-cezar-quinity-span')
const coast_order_cezar = document.querySelector('.first-and-last__about-basket-block-order-and-check-order-box-dish-cezar-coast-span')

let q = 1;

plush.addEventListener('click', function () {

    if (q < 9) {
        q++

        if (box_par == 0 && box_meat != 0 && box_cezar != 0) {
            priceses = r * 500 + q * 530 - 300
        } 
        
        else if (box_meat == 0 && box_cezar != 0 && box_par != 0) {
            priceses = i * 359 + q * 530 - 300
        } 
        
        else if (box_cezar == 0 && box_par != 0 && box_meat != 0) {
            priceses = i * 359 + r * 500 - 300
        } 
        
        else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
            priceses = q * 530 - 300
        } 
        
        else if (box_par == 0 && box_cezar == 0 && box_meat != 0) {
            priceses = r * 500 - 300
        } 
        
        else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
            priceses = i * 359 - 300
        } 
        
        else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
            priceses = 0 - 300;
        } 
        
        else {
            priceses = i * 359 + r * 500 + q * 530 - 300;
        }




        if (tert == 1) {

            if (box_meat == 0 && box_meat != 0 && box_cezar != 0) {
                priceses = i * 359 + r * 500 - 300;
            } 
            
            else {
                priceses = i * 389 + i * -21 + r * 500 + q * 530 - 300;
            }
        }


        outside.innerHTML = q;
        quinity_order_cezar.innerHTML = q;
        coast_end_whis_price.innerHTML = priceses;


        kolorii();
        payMe();
        end_coast()
    }
})

minush.addEventListener('click', function () {

    if (q > 1) {
        q--




        outside.innerHTML = q;
        quinity_order_cezar.innerHTML = q;
        coast_end_whis_price.innerHTML = priceses



        kolorii() - 780;
        payMe() - 1060;
        end_coast_minus()
    }

})

function kolorii() {
    kolory.innerHTML = q * 380;
}

function payMe() {
    mony.innerHTML = q * 530;
    coast_order_cezar.innerHTML = q * 530;

    if (tert == 1) {
        mony.innerHTML = q * 590;
        coast_order_cezar.innerHTML = q * 590;
    }
}

// -----------------------------check-box---------------------------------

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



// -----------------------check-btn-------------------------

const btn_order = document.querySelector('.first-and-last__about-basket-block-order-and-check-btn')
const btn_order_end = document.querySelector('.first-and-last__about-basket-block-order-and-check-hide-block-box-discription-btn')
const hide_block = document.querySelector('.first-and-last__about-basket-block-order-and-check-hide-block')
const btn_none = document.querySelector('.first-and-last__about-basket-block-order-and-check-hide-block-box-discription-btn-none')
const discription_two = document.querySelector('.first-and-last__discription-block-three')

btn_order.addEventListener('click', function () {
    if(coast_end_whis_price.innerHTML > 0){
        hide_block.style = `top: 7%; z-index: 10;`
    }
    
    else{
        reload_discription_two()
    }

})

function delete_discription_two() {
    discription_two.style = `opacity: 0; z-index: -1`
}

function active_description_two() {
    delete_discription_two()
}

function reload_discription_two() {
    discription_two.style = `opacity: 1; z-index: 4`
    
    setTimeout(() => active_description_two(), 1000);
}

let m = 0;

btn_order_end.addEventListener('click', function () {
    hide_block.style = `top: -200%; z-index: 10;`

    // reloaded()

})

btn_none.addEventListener('click', function () {
    hide_block.style = `top: -200%; z-index: 10;`
})

// function reloaded() {

//     if (m < 1) {
//         m++;
//     } 
    
//     else if (m == 1) {
//         location.reload();
//         m = 0;
//     }

//     setTimeout(() => reloaded(), 500);
// }


// ----------------------------------------extra-product------(tomato)-----------------------
const discription = document.querySelector('.first-and-last__discription-block-two')


const extra_product_block = document.querySelector('.first-and-last__about-basket-block-additives')

function for_delete() {
    if(tom == 1 && tero == 1 && tert == 1){
        extra_product_block.style = `display: none`
    }
}


function for_spawn() {
    if(tom == 0 || tero == 0 || tert == 0){
        extra_product_block.style = `display: block`
    }
}

function for_spawn_two() {
    if(tom == 1 || tero == 1 || tert == 1){
        extra_product_block.style = `display: block`
        
        if(tert == 1){
            ter_two_box_extra.style = `opacity: 1`
            ter_two_box_product.style = `opacity: 0`
            tert = 0;
        }

        if(tero == 1){
            ter_one_box_extra.style = `opacity: 1`
            ter_one_box_product.style = `opacity: 0`
            tero = 0;
        }
        
        if(tom == 1){
                    
        tomato_box_extra.style = `opacity: 1`
        tomato_box_product.style = `opacity: 0`
        tom = 0;
        }
    }
}

function delete_discription() {
    discription.style = `opacity: 0; z-index: -1`
}

function active_description() {
    delete_discription()
}

function reload_discription() {
    discription.style = `opacity: 1; z-index: 4`
    
    setTimeout(() => active_description(), 1000);
}





const btn_in_totmato = document.querySelector('.first-and-last__about-basket-block-additives-tomato-btn')
const btn_tomato_in_product = document.querySelector('.first-and-last__about-basket-block-additives-tomato-extra-box-btn')
const tomato_box_extra = document.querySelector('.first-and-last__about-basket-block-additives-tomato')
const tomato_box_product = document.querySelector('.first-and-last__about-basket-block-additives-tomato-extra-box')

let tom = 0;

btn_in_totmato.addEventListener('click', function () {


    if (box_par == 1) {
        coast.innerHTML = i * 389;
        coast_order_par.innerHTML = i * 389;
        coast_end.innerHTML = i * 389 + r * 500 + q * 530;
        coast_end_whis_price.innerHTML = i * 377 + r * 500 + q * 530 - 300;
        tomato_box_extra.style = `opacity: 0`
        tomato_box_product.style = `opacity: 1`
        tom = 1;
        
        for_delete()
    }
    
    else {
        
        if(box_cezar != 0 && box_par == 0 && box_meat != 0){
            coast.innerHTML = 0;
            coast_order_par.innerHTML = 0;
            coast_end.innerHTML = 0 + r * 500 + q * 530;
            coast_end_whis_price.innerHTML = 0 + r * 500 + q * 530 - 300;
        }
        
        else{
            coast.innerHTML = 0;
            coast_order_par.innerHTML = 0;
        }
        
        reload_discription()
        
    }

})

btn_tomato_in_product.addEventListener('click', function () {
    tomato_box_extra.style = `opacity: 1`
    tomato_box_product.style = `opacity: 0`
    tom = 0;

    coast.innerHTML = i * 359;
    coast_order_par.innerHTML = i * 359;
    coast_end.innerHTML = i * 359 + r * 500 + q * 530;
    coast_end_whis_price.innerHTML = i * 359 + r * 500 + q * 530 - 300;

    for_spawn()

})



// ----------------------------------------extra-product------(ter-one)-----------------------



const btn_in_ter_one = document.querySelector('.first-and-last__about-basket-block-additives-ter-btn')
const btn_ter_one_in_product = document.querySelector('.first-and-last__about-basket-block-additives-ter-extra-box-btn')
const ter_one_box_extra = document.querySelector('.first-and-last__about-basket-block-additives-ter')
const ter_one_box_product = document.querySelector('.first-and-last__about-basket-block-additives-ter-extra-box')

let tero = 0;


btn_in_ter_one.addEventListener('click', function () {



    if (box_meat == 1) {
        many.innerHTML = r * 530;
        coast_order_meat.innerHTML = r * 530;
        coast_end.innerHTML = i * 389 + r * 530 + q * 530;
        coast_end_whis_price.innerHTML = i * 359 + r * 518 + q * 530 - 300;
        ter_one_box_extra.style = `opacity: 0`
        ter_one_box_product.style = `opacity: 1`
        tero = 1;
        
        for_delete()

    }
    
    else {
        
        if(box_cezar != 0 && box_par != 0 && box_meat == 0){

            coast_end.innerHTML = i * 389 + 0 + q * 530;
            coast_end_whis_price.innerHTML = i * 359 + 0 + q * 530 - 300;
        }
        
        else{
            many.innerHTML = 0;
            coast_order_meat.innerHTML = 0;
        }
        reload_discription()
    }


})


btn_ter_one_in_product.addEventListener('click', function () {
    ter_one_box_extra.style = `opacity: 1`
    ter_one_box_product.style = `opacity: 0`
    tero = 0;

    many.innerHTML = r * 500;
    coast_order_meat.innerHTML = r * 500;
    coast_end.innerHTML = i * 389 + r * 500 + q * 530;
    coast_end_whis_price.innerHTML = i * 359 + r * 500 + q * 530 - 300;
    
    for_spawn()
})

// ----------------------------------------extra-product------(ter-two)-----------------------

const btn_in_ter_two = document.querySelector('.btn-ter-two')
const btn_ter_two_in_product = document.querySelector('.first-and-last__about-basket-block-additives-ter-extra-box-btn-two')
const ter_two_box_extra = document.querySelector('.ter-two-block')
const ter_two_box_product = document.querySelector('.first-and-last__about-basket-block-additives-ter-extra-box-two')

let tert = 0;

btn_in_ter_two.addEventListener('click', function () {



    if (box_cezar == 1) {
        mony.innerHTML = q * 560;
        coast_order_cezar.innerHTML = q * 560;
        coast_end.innerHTML = i * 359 + r * 500 + q * 560;
        coast_end_whis_price.innerHTML = i * 359 + r * 500 + q * 590 - 300;

        ter_two_box_extra.style = `opacity: 0`
        ter_two_box_product.style = `opacity: 1`
        tert = 1;
        
        for_delete()

    }
     else {

        if(box_cezar == 0 && box_par != 0 && box_meat != 0){
            mony.innerHTML = 0;
            coast_order_cezar.innerHTML = 0;
            coast_end.innerHTML = i * 359 + r * 500 + 0;
            coast_end_whis_price.innerHTML = i * 359 + r * 500 + 0 - 300;
        }
        
        else{
            mony.innerHTML = 0;
            coast_order_cezar.innerHTML = 0;
        }
        reload_discription()
        
        
    }

})


btn_ter_two_in_product.addEventListener('click', function () {

    ter_two_box_extra.style = `opacity: 1`
    ter_two_box_product.style = `opacity: 0`
    tert = 0;

    mony.innerHTML = q * 530;
    coast_order_cezar.innerHTML = q * 530;
    coast_end.innerHTML = i * 359 + r * 500 + q * 530;
    coast_end_whis_price.innerHTML = i * 359 + r * 500 + q * 530 - 300;
    
    for_spawn()
})

// -----------------------btn-product------------------------------


function for_basket() {
    if(box_cezar == 0 && box_par == 0 && box_meat == 0){
        del_all_span.innerHTML = 'Восстановить'
        del == 1
    }
}

const btn_par = document.querySelector('.fisrt-and-last__dish-block-box-main-box-for-name-btn')
const block_par = document.querySelector('.fisrt-and-last__dish-block-parmidjano')
const btn_meat = document.querySelector('.meat-none-btn')
const block_meat = document.querySelector('.fisrt-and-last__dish-block-meat')
const btn_cezar = document.querySelector('.btn-none-cezar')
const block_cezar = document.querySelector('.fisrt-and-last__dish-block-cezar')

const block_par_in_order = document.querySelector('.first-and-last__about-basket-block-order-and-check-ul-li')
const block_meat_in_order = document.querySelector('.li-meat')
const block_cezar_in_order = document.querySelector('.li-cezar')

let box_par = 1;
let box_meat = 1;
let box_cezar = 1;


let mn = 1;
let nnn = 1;

btn_par.addEventListener('click', function () {
    block_par.style = `display: none`

    if (mn == 1) {
        block_meat.style = `margin-top: 87px`
    }

    block_par_in_order.style = `display: none`
    coast_end.innerHTML = r * 500 + q * 530;
    coast_end_whis_price.innerHTML = r * 500 + q * 530 - 300;

    box_par = 0;

    if (box_meat == 0 && box_cezar != 0) {
        coast_end.innerHTML = q * 530;
        coast_end_whis_price.innerHTML = q * 530 - 300;
    }
    
    else if (box_cezar == 0 && box_meat != 0) {
        coast_end.innerHTML = r * 500;
        coast_end_whis_price.innerHTML = r * 500 - 300;
    }
    
    else if (box_cezar == 0 && box_meat == 0) {
        coast_end.innerHTML = 0;
        coast_end_whis_price.innerHTML = 0;
    }
    
    
     
    if (box_par == 0 && box_cezar != 0 && box_meat != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_meat == 0 && box_par != 0 && box_cezar != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_cezar == 0 && box_meat != 0 && box_par != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_cezar == 0 && box_meat != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
        quinity_product.innerHTML = 0;
    }
    
    else {
        quinity_product.innerHTML = 3;
    }
    
    for_none()
    for_spawn_two()
    for_basket()

})



btn_meat.addEventListener('click', function () {
    block_meat.style = `display: none`

    if (nnn == 1) {
        block_cezar.style = `margin-top: 87px`
    }

    block_meat_in_order.style = `display: none`
    coast_end.innerHTML = i * 359 + q * 530;
    coast_end_whis_price.innerHTML = i * 359 + q * 530 - 300;

    box_meat = 0;
    mn = 0;

    if (box_par == 0 && box_cezar != 0) {
        coast_end.innerHTML = q * 530;
        coast_end_whis_price.innerHTML = q * 530 - 300;
    }
    
    else if (box_cezar == 0 && box_par != 0) {
        coast_end.innerHTML = i * 359;
        coast_end_whis_price.innerHTML = i * 359 - 300;
    }
    
    else if (box_cezar == 0 && box_par == 0) {
        coast_end.innerHTML = 0;
        coast_end_whis_price.innerHTML = 0;
    }
    
     
    if (box_par == 0 && box_cezar != 0 && box_meat != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_meat == 0 && box_par != 0 && box_cezar != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_cezar == 0 && box_meat != 0 && box_par != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_cezar == 0 && box_meat != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
        quinity_product.innerHTML = 0;
    }
    
    else {
        quinity_product.innerHTML = 3;
    }
    
    for_none()
    for_spawn_two()
    for_basket()
})


btn_cezar.addEventListener('click', function () {
    block_cezar.style = `display: none`
    nnn = 0

    block_cezar_in_order.style = `display: none`
    coast_end.innerHTML = i * 359 + r * 500;
    coast_end_whis_price.innerHTML = i * 359 + r * 500 - 300;

    box_cezar = 0;

    if (box_par == 0 && box_meat != 0) {
        coast_end.innerHTML = r * 500;
        coast_end_whis_price.innerHTML = r * 500 - 300;
    }
    
    else if (box_meat == 0 && box_par != 0) {
        coast_end.innerHTML = i * 359;
        coast_end_whis_price.innerHTML = i * 359 - 300;
    }
     
    else if (box_meat == 0 && box_par == 0) {
        coast_end.innerHTML = 0;
        coast_end_whis_price.innerHTML = 0;
    }
    
    if (box_par == 0 && box_cezar != 0 && box_meat != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_meat == 0 && box_par != 0 && box_cezar != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_cezar == 0 && box_meat != 0 && box_par != 0) {
        quinity_product.innerHTML = 2;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_cezar == 0 && box_meat != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_meat == 0 && box_cezar == 0 && box_par != 0) {
        quinity_product.innerHTML = 1;
    }
    
    else if (box_par == 0 && box_meat == 0 && box_cezar == 0) {
        quinity_product.innerHTML = 0;
    }
    
    else {
        quinity_product.innerHTML = 3;
    }
    
    
    for_none()
    for_spawn_two()
    for_basket()
})

const del_all = document.querySelector('.first-and-last__about-order-block-btn')
const del_all_span = document.querySelector('.first-and-last__about-order-block-btn-span')

let del = 0;

del_all.addEventListener('click', function () {
    
    if(del == 0){
        del_all_span.innerHTML = 'Восстановить'
        block_cezar_in_order.style = `display: none`
        block_meat_in_order.style = `display: none`
        block_par_in_order.style = `display: none`
        block_cezar.style = `display: none`
        block_meat.style = `display: none`
        block_par.style = `display: none`
    
        box_cezar = 0;
        box_par = 0;
        box_meat = 0;
    
    
        quinity_product.innerHTML = 0;
        coast_end.innerHTML = 0;
        coast_end_whis_price.innerHTML = 0;
    
        extra_product_block.style = `display: block`
    
        ter_two_box_extra.style = `opacity: 1`
        ter_two_box_product.style = `opacity: 0`
        tert = 0;
    
        ter_one_box_extra.style = `opacity: 1`
        ter_one_box_product.style = `opacity: 0`
        tero = 0;
    
        tomato_box_extra.style = `opacity: 1`
        tomato_box_product.style = `opacity: 0`
        tom = 0;
        
        del = 1;
    }
    
    else if(del == 1){
        del_all_span.innerHTML = 'Очистить корзину'
        block_cezar_in_order.style = `display: block`
        block_meat_in_order.style = `display: block`
        block_par_in_order.style = `display: block`
        block_cezar.style = `display: block`
        block_meat.style = `display: block`
        block_par.style = `display: block`
    
        box_cezar = 1;
        box_par = 1;
        box_meat = 1;
    
    
        quinity_product.innerHTML = 3;
        coast_end.innerHTML = 1389;
        coast_end_whis_price.innerHTML = 1089;
    
        extra_product_block.style = `display: block`
    
        ter_two_box_extra.style = `opacity: 1`
        ter_two_box_product.style = `opacity: 0`
        tert = 0;
    
        ter_one_box_extra.style = `opacity: 1`
        ter_one_box_product.style = `opacity: 0`
        tero = 0;
    
        tomato_box_extra.style = `opacity: 1`
        tomato_box_product.style = `opacity: 0`
        tom = 0;
        
        del = 0
    }
    
})




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