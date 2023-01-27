const teams = [
  {
    name: 'Ivan Osadchuk',
    fotoDesktop: './images/teams/Ivan_Osadchuk_desktop.jpg',
    fotoBig: './images/teams/Ivan_Osadchuk.png',
    text: 'Hi!',
    facebook: '',
    linkend: '',
    github: '',
  },
  {
    name: 'Artymuk Iryna',
    fotoDesktop: './images/teams/Artymuk_Iryna_desktop.jpg',
    fotoBig: './images/teams/Artymuk_Iryna.png',
    text: 'Hi!',
    facebook: '',
    linkend: '',
    github: '',
  },
  {
    name: 'Olena Semenenko',
    fotoDesktop: './images/teams/Olena_Semenenko_desktop.jpg',
    fotoBig: './images/teams/Olena_Semenenko.png',
    text: 'We are all a little bit of wizards.',
    facebook: '@elena_semenenko',
    linkend: 'www.linkedin.com/in/olena-semenenko-137987263',
    github: 'https://github.com/olena-semenenko',
  },
  {
    name: 'Viktoriia Lehusova',
    fotoDesktop: './images/teams/Viktoriia_Lehusova_desktop.jpg',
    fotoBig: './images/teams/Viktoriia_Lehusova.png',
    text: 'Role in project - developer.',
    facebook: '@yashabaker',
    linkend: 'http://linkedin.com/in/Viktoriia_Lehusova-616b95244',
    github: 'https://github.com/Viktoriia-Lehusova',
  },
  {
    name: 'Iakiv Pekarskyi',
    fotoDesktop: './images/teams/Iakiv_Pekarskyi_desktop.jpg',
    fotoBig: './images/teams/Iakiv_Pekarskyi.png',
    text: 'I am happy travelling soul.',
    facebook: '@lehusova',
    linkend: 'none',
    github: 'https://github.com/iakivpekarskyi',
  },
  {
    name: 'Ihor Statsenko',
    fotoDesktop: './images/teams/Ihor_Statsenko_desktop.jpg',
    fotoBig: './images/teams/Ihor_Statsenko.png',
    text: 'none',
    facebook: 'none',
    linkend: 'none',
    github: 'none',
  },
  {
    name: 'Vitalii Nozhenko',
    fotoDesktop: './images/teams/Vitalii_Nozhenko_desktop.jpg',
    fotoBig: './images/teams/Vitalii_Nozhenko.png',
    text: 'none',
    facebook: 'none',
    linkend: 'none',
    github: 'none',
  },
];

const studentsRef = document.querySelector('.students');
const boxRef = document.querySelector('.box');
const teamsDesk = document.querySelector('.teams_desk');

studentsRef.addEventListener('click', slider)


function slider(e) {
  e.preventDefault()
  boxRef.innerHTML = markupLine(teams);
  boxRef.classList.toggle('box_active');
  
  console.log(boxRef);
console.log(markupOneOfTeam(teams));
}

function markupLine(teams) {
  return teams.map(
      (teams, index) =>
        `<li><a href=""><img src="${teams.fotoDesktop}" alt="${teams.name}" class="box_img" id=${index}></a></li>`
    )
    .join('');}



function markupOneOfTeam(teams) {
  return teams
    .map(
      (teams, index) =>
        `<div class="teams_desk teams_desk_active" id=${index}>
      <img src="${teams.fotoBig}" alt="" width="400px">
      <h2 class="teams_desk_title">${teams.name}</h2>
      <p class="teams_desk_text">${teams.text}</p>
      <div class="soc_icons">
        <a href="${teams.facebook}"><img src="./images/f.png" alt="f" class="soc_icon f"></a>
        <a href="${teams.linkend}"><img src="./images/in.png" alt="in" class="soc_icon in"></a>
        <a href="${teams.github}"><img src="./images/t.png" alt="t" class="soc_icon t"></a>
      </div>`
    )
    .join('');
}








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