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