export const categories = [
  {
    id: 1,
    name: 'Praias',
    photo_url: 'https://gooutside.com.br/wp-content/uploads/sites/3/2021/05/sean-o-kmn4veeepr8-unsplash.jpg'
  },
  {
    id: 2,
    name: 'Monumentos',
    photo_url: 'https://www.hoteisangola.com/media/images/articles4/PalaciodeFerro002.jpg'
  },
  {
    id: 3,
    name: 'Museus',
    photo_url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Parques',
    photo_url: 'https://blog.setin.com.br/wp-content/uploads/2024/12/melhores-parques-sao-paulo-bairros-arredores.jpg'
  },
  {
    id: 5,
    name: 'Mercados',
    photo_url: 'https://www.verangola.net/va/images/cms-image-000023317.jpg'
  }
];

export const spots = [
  {
    id: 1,
    categoryId: 1,
    title: 'Praia do Mussulo',
    photo_url: 'https://welcometoangola.co.ao/wp-content/uploads/2021/06/Ilha-de-Luanda....jpg',
    photosArray: [
      'https://welcometoangola.co.ao/wp-content/uploads/2021/06/Ilha-de-Luanda....jpg',
      'https://welcometoangola.co.ao/wp-content/uploads/2021/01/mussulo-angola.jpg'
    ],
    description: 'Uma bela península com praias paradisíacas, ideal para relaxar e praticar esportes aquáticos. Conhecido por suas águas cristalinas e areia branca.',
    location: 'Península do Mussulo',
    time: '8:00 - 18:00',
    rating: 4.8
  },
  {
    id: 2,
    categoryId: 2,
    title: 'Fortaleza de São Miguel',
    photo_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5c/aa/45/fortaleza-de-sao-miguel.jpg?w=900&h=-1&s=1',
    photosArray: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5c/aa/45/fortaleza-de-sao-miguel.jpg?w=900&h=-1&s=1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xUJNC7uHGKLV_I5B0DqX8gMCLIYd9aXWPe4Cu8uxr5Cq_u-FyfUepstWce0-9dEXL_8&usqp=CAU'
    ],
    description: 'Construída no século XVI, esta fortaleza histórica abriga o Museu das Forças Armadas. Um importante marco histórico de Angola.',
    location: 'Cidade Alta',
    time: '9:00 - 17:00',
    rating: 4.6
  },
  {
    id: 3,
    categoryId: 3,
    title: 'Museu Nacional de Antropologia',
    photo_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/18/22/d6/national-anthropology.jpg?w=1200&h=-1&s=1',
    photosArray: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/18/22/d6/national-anthropology.jpg?w=1200&h=-1&s=1',
      'https://upload.wikimedia.org/wikipedia/commons/6/60/Museu_Nacional_de_Antropologia_in_Luanda_-_Angola_2015.jpg'
    ],
    description: 'Exposição rica da cultura e história angolana, com artefatos tradicionais e exposições permanentes sobre as diferentes etnias do país.',
    location: 'Rua da Muxima',
    time: '10:00 - 16:00',
    rating: 4.5
  },
  {
    id: 4,
    categoryId: 4,
    title: 'Parque Nacional da Quiçama',
    photo_url: 'https://luanda.gov.ao/fotos/frontend_33/galerias/442501068_761258629516488_5725067485401053565_n_1226504109665486116fb17.jpg',
    photosArray: [
      'https://luanda.gov.ao/fotos/frontend_33/galerias/442501068_761258629516488_5725067485401053565_n_1226504109665486116fb17.jpg',
      'https://www.baiga-magazine.com/wp-content/uploads/2018/12/Parque-Nacional-da-Quic%CC%A7ama_01-640x420.jpg'
    ],
    description: 'Maior parque nacional de Angola, lar de diversas espécies de animais selvagens. Ideal para safáris e observação da natureza.',
    location: 'Província de Luanda',
    time: '6:00 - 18:00',
    rating: 4.9
  },
  {
    id: 5,
    categoryId: 5,
    title: 'Mercado do Benfica',
    photo_url: 'https://luanda.gov.ao/fotos/frontend_33/galerias/445661819_761080699534281_5684475845369429692_n_29093834466558f0a59449.jpg',
    photosArray: [
      'https://luanda.gov.ao/fotos/frontend_33/galerias/445661819_761080699534281_5684475845369429692_n_29093834466558f0a59449.jpg',
      'https://www.verangola.net/va/images/cache/600x320/crop_0_0_640_341/images%7Ccms-image-000026522.jpg'
    ],
    description: 'O maior mercado ao ar livre de Luanda, onde você pode encontrar artesanato local, tecidos tradicionais e souvenirs.',
    location: 'Benfica',
    time: '7:00 - 17:00',
    rating: 4.3
  }
];
