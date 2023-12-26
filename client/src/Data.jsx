import hracka from './assets/hracka.jpg';
import oblecky from './assets/oblecek.jpg';
import pelisek from './assets/pelisek.jpg';
import cestovani from './assets/cestovani.jpg';
import obojek from './assets/obojek.jpg';
import misky from './assets/misky.jpg';
import granule from './assets/granule.jpg';

export const Categories = [
  { id: 1, img: hracka, title: 'Hračky', category: 'hracky' },
  { id: 2, img: oblecky, title: 'Oblečky', category: 'oblecky' },
  { id: 3, img: pelisek, title: 'Pelišky a boudy', category: 'pelisky' },
  { id: 4, img: cestovani, title: 'Cestování', category: 'cestovani' },
  {
    id: 5,
    img: obojek,
    title: 'Obojky, vodítka, postroje',
    category: 'voditka',
  },
  { id: 6, img: misky, title: 'Misky', category: 'misky' },
  { id: 7, img: granule, title: 'Krmivo a pamlsky', category: 'krmivo' },
  { id: 8, img: granule, title: 'Ostatní vybavní', category: 'ostatni' },
];
