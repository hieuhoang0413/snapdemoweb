const btnClose = document.querySelector('.cancel_btn')
const btnOpen = document.querySelector('.menu_btn')
const modal = document.querySelector('.container_modal_mobile')

function openMenu() {
    modal.classList.add('open')
}

function closeMenu() {
    modal.classList.remove('open')
}

btnOpen.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)

const $$ = document.querySelectorAll.bind(document)
const $ = document.querySelector.bind(document)
const ups = $$('#up')
const downs = $$('#down')
const panes = $$('.contain_option_mobile')
const tabs = $$('.tab')

tabs.forEach((tab, index) => {
    const pane = panes[index]
    const up = ups[index]
    const down = downs[index]
        tab.onclick = function() {
            if(!pane.classList.contains('open_option')) {
                pane.classList.add('open_option')
                up.classList.add('open_option')
                down.classList.add('close_option')
            } else {
                pane.classList.remove('open_option')
                up.classList.remove('open_option')
                down.classList.remove('close_option')
            }
        }
});
