// MOBILE MENU SCRIPT
const menuToggle = document.querySelector('.menu');
const modal = document.querySelector('.overlay');
const closeButton = document.querySelector('.toolbar-2');

menuToggle.addEventListener('click', () => {
  modal.classList.add('show');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});

// POPUP WINDOW SCRIPT
const details = [
  {
  title: 'Tonic',
  co: 'CANOPY',
  job: 'Back-End Dev',
  year: '2015',
  imgname: 'job3b.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  tech1: 'HTML',
  tech2: 'CSS',
  tech3: 'JavaScript',
  tech4: 'Ruby',
  tech5: 'Bootstrap',
  },
  {
    title: 'Multi-Post Stories',
    co: 'FACEBOOK',
    job: 'Full-Stack Dev',
    year: '2015',
    imgname: 'job4b.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech4: 'Ruby',
    tech5: 'Bootstrap',
  },
  {
    title: 'FACEBOOK 360',
    co: 'FACEBOOK',
    job: 'Full-Stack Dev',
    year: '2015',
    imgname: 'job1b.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech4: 'Ruby',
    tech5: 'Bootstrap',
  },
  
    title: 'FACEBOOK 360',
    co: 'FACEBOOK',
    job: 'Full-Stack Dev',
    year: '2015',
    imgname: 'job1b.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech4: 'Ruby',
    tech5: 'Bootstrap',
  }
];


