const formRef = document.querySelector('.form');
const boxRef = document.querySelector('.box');
formRef.addEventListener('submit', onSubmit)


const BASE_URL = `https://api.agify.io?name=`;



async function featchApi(name) {
  const resp = await fetch(`${BASE_URL}${name}`);
    const data = await resp.json();
    return markup(data);
}


function onSubmit(event) {
    event.preventDefault()

    const {
      elements: { input_form },
    } = event.currentTarget;

    const name = input_form.value.trim();
    featchApi(name);
}


function markup(data) {
    const { age, count, name } = data;
    
    const markupStr = `<div>
  age ${age}, count ${count}, name ${name}
</div>`;
    
    boxRef.insertAdjacentHTML('beforeend', markupStr);
}