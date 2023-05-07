import {menu_item} from "../model/menu_item";

export const Menu_items: menu_item[]=[
  {
    title:'Search',
    url:'/home/trackSearch',
    icon:'search'
  },
  {
    title:'Favorites',
    url:'home/Favorites',
    icon:'star'
  },
  {
    title:'Manage Users',
    url:'/home/adminPanel',
    icon:'build'
  },
  {
    title:'Manage Tracks',
    url:'/home/trackAdminPanel',
    icon:'library_music'
  }
];
