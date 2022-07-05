import images from './images';

const wines = [
  {
    title: 'Paradoja / Vino tinto',
    price: '$31',
    tags: 'EC | Botella',
  },
  {
    title: 'Veuve Ambal Espumante',
    price: '$25',
    tags: 'FR | Botella',
  },
  {
    title: 'Indomita',
    price: '$20',
    tags: 'CL | Botella',
  },
  {
    title: 'Alta Luna',
    price: '$17',
    tags: 'IT | 750 ml',
  },
  {
    title: 'Cerveza Artesanal',
    price: '$12',
    tags: 'EC | Jarra',
  },
];

const cocktails = [
  {
    title: 'Incahuasí',
    price: '$12',
    tags: 'Puro de quebranta | Vino de higo | soda amarilla | 30 ml',
  },
  {
    title: "Bull Shot",
    price: '$10',
    tags: 'Vodka | Jugo de limón | Salsa tabasco / inglesa',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Ron | Jugo cítrico | Azúcar',
  },
  {
    title: 'Mojito de la pasión',
    price: '$8',
    tags: 'Ron | shot de maracuyá | Hierba buena',
  },
  {
    title: 'kimono',
    price: '$16',
    tags: 'Vino tinto | Vodka | Jugo de Naranja',
  },
];

const awards = [
  {
    imgUrl: images.award,
    title: "Travelers' Choice Awards - 2021",
    subtitle: 'Por ofrecer grandes experiencias de calidad a los comensales y las grandes reseñas recibidas en el último año',
  },
  {
    imgUrl: images.award,
    title: 'Premio Mesabe - 2020 ',
    subtitle: 'Con nuestro plato estrella, el Encocado Marinero, que estuvo entre los más populares del festival.',
  },
  {
    imgUrl: images.award,
    title: 'El Sol Repson - 2019',
    subtitle: 'Al presentar propuestas pulcras y sabrosas que apelan a lo emocional ',
  },
  {
    imgUrl: images.award,
    title: 'El Bocuse d’Or - 2018',
    subtitle: 'Participación en la final del concurso',
  },
];

const gallery = [
  {
    imgUrl: images.gallery01,
    instaUrl: 'https://www.instagram.com/p/CfhmfmfJvfi/',
  },
  {
    imgUrl: images.gallery02,
    instaUrl: 'https://www.instagram.com/p/Cfhm2HwptQm/',
  },
  {
    imgUrl: images.gallery03,
    instaUrl: 'https://www.instagram.com/p/Cfhm9QPJUps/',
  },
  {
    imgUrl: images.gallery04,
    instaUrl: 'https://www.instagram.com/p/CfhnEipJfnn/',
  },
];

export default { wines, cocktails, awards, gallery };