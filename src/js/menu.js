import menuList from '../menu.json';

import makeMenu from '../templates/menu.hbs';

const ulMenu = document.querySelector('.js-menu');

const menuMarkUp = makeMenu(menuList);
console.log(menuMarkUp);
ulMenu.innerHTML = menuMarkUp;
