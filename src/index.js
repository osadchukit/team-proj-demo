// const teams = [
//   {
//     name: 'Ivan Osadchuk',
//     fotoDesktop: './images/teams/Ivan_Osadchuk_desktop.jpg',
//     fotoBig: './images/teams/Ivan_Osadchuk.png',
//     text: 'Hi!',
//     facebook: '',
//     linkend: '',
//     github: '',
//   },
//   {
//     name: 'Artymuk Iryna',
//     fotoDesktop: './images/teams/Artymuk_Iryna_desktop.jpg',
//     fotoBig: './images/teams/Artymuk_Iryna.png',
//     text: 'Hi!',
//     facebook: '',
//     linkend: '',
//     github: '',
//   },
//   {
//     name: 'Olena Semenenko',
//     fotoDesktop: './images/teams/Olena_Semenenko_desktop.jpg',
//     fotoBig: './images/teams/Olena_Semenenko.png',
//     text: 'We are all a little bit of wizards.',
//     facebook: '@elena_semenenko',
//     linkend: 'www.linkedin.com/in/olena-semenenko-137987263',
//     github: 'https://github.com/olena-semenenko',
//   },
//   {
//     name: 'Viktoriia Lehusova',
//     fotoDesktop: './images/teams/Viktoriia_Lehusova_desktop.jpg',
//     fotoBig: './images/teams/Viktoriia_Lehusova.png',
//     text: 'Role in project - developer.',
//     facebook: '@yashabaker',
//     linkend: 'http://linkedin.com/in/Viktoriia_Lehusova-616b95244',
//     github: 'https://github.com/Viktoriia-Lehusova',
//   },
//   {
//     name: 'Iakiv Pekarskyi',
//     fotoDesktop: './images/teams/Iakiv_Pekarskyi_desktop.jpg',
//     fotoBig: './images/teams/Iakiv_Pekarskyi.png',
//     text: 'I am happy travelling soul.',
//     facebook: '@lehusova',
//     linkend: 'none',
//     github: 'https://github.com/iakivpekarskyi',
//   },
//   {
//     name: 'Ihor Statsenko',
//     fotoDesktop: './images/teams/Ihor_Statsenko_desktop.jpg',
//     fotoBig: './images/teams/Ihor_Statsenko.png',
//     text: 'none',
//     facebook: 'none',
//     linkend: 'none',
//     github: 'none',
//   },
//   {
//     name: 'Vitalii Nozhenko',
//     fotoDesktop: './images/teams/Vitalii_Nozhenko_desktop.jpg',
//     fotoBig: './images/teams/Vitalii_Nozhenko.png',
//     text: 'none',
//     facebook: 'none',
//     linkend: 'none',
//     github: 'none',
//   },
// ];

const studentsRef = document.querySelector('.students');
const boxRef = document.querySelector('.box');
const teamsDesk = document.querySelector('.teams_desk');
const p1Ref = document.querySelector('#p1');
const fonTeams = document.querySelector('.fon')

const p2Ref = document.querySelector('#p2');
const p3Ref = document.querySelector('#p3');
const p4Ref = document.querySelector('#p4');
const p5Ref = document.querySelector('#p5');
const p6Ref = document.querySelector('#p6');
const p7Ref = document.querySelector('#p7');
const p8Ref = document.querySelector('#p8');
const p9Ref = document.querySelector('#p9');

studentsRef.addEventListener('click', slider);
boxRef.addEventListener('click', showPerson);
fonTeams.addEventListener('click', close)

function slider(e) {
  e.preventDefault()
  boxRef.classList.toggle('box_active');
  fonTeams.classList.add('fon_active');
}

function showPerson(e) {
  e.preventDefault();

  removePerson();
  addPerson(e);
}

function addPerson(e)
{
  if (e.target.getAttribute('id') === 't1')
    p1Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't2')
    p2Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't3')
    p3Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't4')
    p4Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't5')
    p5Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't6')
    p6Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't7')
    p7Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't8')
    p8Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't9')
    p9Ref.classList.add('teams_desk_active');
}

  function removePerson() {
    p1Ref.classList.remove('teams_desk_active');
    p2Ref.classList.remove('teams_desk_active');
    p3Ref.classList.remove('teams_desk_active');
    p4Ref.classList.remove('teams_desk_active');
    p5Ref.classList.remove('teams_desk_active');
    p6Ref.classList.remove('teams_desk_active');
    p7Ref.classList.remove('teams_desk_active');
    p8Ref.classList.remove('teams_desk_active');
    p9Ref.classList.remove('teams_desk_active');
  }

function close(e) {
  console.log(e);
  boxRef.classList.toggle('box_active');
  removePerson();
}

// function markupLine(teams) {
//   // console.log(teams);
//   return teams
//     .map(
//       (team, index) =>
//         `<li><a href="">
//         <img src="${team.fotoDesktop}" alt="${team.name}" class="box_img" id=${index}>
//         </a></li>`
//     )
//     .join('');
// }

// function markupOneOfTeam(teams) {
//   return teams.map(
//       (teams, index) =>
//         `<div class="teams_desk teams_desk_active" id=${index}>
//       <img src="${teams.fotoBig}" alt="" width="400px">
//       <h2 class="teams_desk_title">${teams.name}</h2>
//       <p class="teams_desk_text">${teams.text}</p>
//       <div class="soc_icons">
//         <a href="${teams.facebook}"><img src="./images/f.png" alt="f" class="soc_icon f"></a>
//         <a href="${teams.linkend}"><img src="./images/in.png" alt="in" class="soc_icon in"></a>
//         <a href="${teams.github}"><img src="./images/t.png" alt="t" class="soc_icon t"></a>
//       </div>`
//     )
//     .join('');
// }








// =========== заняття з ментором =============

// const formRef = document.querySelector('.form');
// const boxRef = document.querySelector('.box');
// formRef.addEventListener('submit', onSubmit)


// const BASE_URL = `https://api.agify.io?name=`;



// async function featchApi(name) {
//   const resp = await fetch(`${BASE_URL}${name}`);
//     const data = await resp.json();
//     return markup(data);
// }


// function onSubmit(event) {
//     event.preventDefault()

//     const {
//       elements: { input_form },
//     } = event.currentTarget;

//     const name = input_form.value.trim();
//     featchApi(name);
// }


// function markup(data) {
//     const { age, count, name } = data;
    
//     const markupStr = `<div>
//   age ${age}, count ${count}, name ${name}
// </div>`;
    
//     boxRef.insertAdjacentHTML('beforeend', markupStr);
// }