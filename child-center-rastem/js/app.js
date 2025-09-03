"use strict";

//  Fancybox
if (typeof Fancybox !== "undefined" && Fancybox !== null) {
    Fancybox.bind("[data-fancybox]", {
        dragToClose: false
    });
}

document.addEventListener("DOMContentLoaded", () => {

    // header animation

    const header = document.querySelector('.header');

    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            header.classList.add('header--hidden');
        } else {
            header.classList.remove('header--hidden');
        }
    });


    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.icon-menu') || target.classList.contains('header__menu')) {
            document.querySelector('.header').classList.toggle('open-menu');
        }


        if (target.classList.contains('menu__arrow')) {
            const subMenu = target.nextElementSibling;

            if (subMenu.classList.contains('open')) {
                subMenu.classList.remove('open');
                target.classList.remove('active');
            } else {
                closeAllMenus();
                subMenu.classList.add('open');
                target.classList.add('active');
            }
        }


    });

    function closeAllMenus() {
        document.querySelectorAll('.submenu.open').forEach(menu => {
            menu.classList.remove('open');
            const button = menu.previousElementSibling;
            if (button && button.classList.contains('menu__arrow')) {
                button.classList.remove('active');
            }
        });


    }


});