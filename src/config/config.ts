// src/config.ts
import vegetarianIcon from '../assets/ic_vegetarianos.svg';
import mainCourseIcon from '../assets/ic_principales.svg';
import dessertsIcon from '../assets/ic_tortas.svg';
import quickIcon from '../assets/ic_rapida.svg';
import kidsIcon from '../assets/ic_menu_ninos.svg';
import soupsIcon from '../assets/ic_sopas.svg';

const API_BASE_URL = 'https://api.spoonacular.com';
const API_KEY = '50f26786bdf14e75a08558714388f715';
const NAVIGATION_LINKS = [
  {
    label: 'Vegetarianos',
    filter: 'vegetarian',
    icon: vegetarianIcon,
  },
  {
    label: 'Platos Principales',
    filter: 'main course',
    icon: mainCourseIcon,
  },
  {
    label: 'Tortas',
    filter: 'cake',
    icon: dessertsIcon,
  },
  {
    label: 'Comida Rápida',
    filter: 'quick',
    icon: quickIcon,
  },
  {
    label: 'Menú Niños',
    filter: 'kids',
    icon: kidsIcon,
  },
  {
    label: 'Sopas',
    filter: 'soups',
    icon: soupsIcon,
  },
];


export { API_BASE_URL, API_KEY, NAVIGATION_LINKS };
