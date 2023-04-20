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

// Define the array of projects
const arrWorks = [
  {
    id: 'project-0',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: '',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-1',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-2',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-3',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-4',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-5',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },
  // Add more projects as needed
];

const gridWorks = document.querySelector('.popup-wdw');
let popupContainer = null;
let div = null;
let card = null;

for (let i = 0; i < arrWorks.length; i += 1) {
  card = arrWorks[i];

  div = document.createElement('div');

  /*  ******** the first cards its the main ****************** */

  div.classList = 'header1';
  div.id = card.id;
  div.innerHTML = `
                   <div class="rows">
          <div class="photo1">
            <img class="work1b-img" alt="work 1" width="" height="" src="images/job3b.png" />
          </div>
          <div class="work1b">
            <h2 class="work-text1b poppins">Tonic</h2>
            <ul class="flex1">
              <li><p class="canopy poppins">CANOPY</p></li>
              <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png" /></li>
              <li><p class="bed poppins">Back End Dev</p></li>
              <li>
                <p><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png" /></p>
              </li>
              <li><p class="year poppins">2015</p></li>
            </ul>
            <p class="desc2 poppins">
              A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
            <ul class="flex2">
              <li><p class="stack poppins">html</p></li>
              <li><p class="stack poppins">css</p></li>
              <li><p class="stack poppins">javascript</p></li>
            </ul>
            <nav>
              <button type="button" class="see-project poppins">See project</button>
            </nav>
          </div>
        </div>`;

  gridWorks.appendChild(div);
}
