/* import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

*/

document.title = 'My Magical Home Page';

const louisa = {
  naam: 'Louisa',
  age: 18,

  pets: ['kat', 'vis', 'Pyro dragon'],

  talk: function () {
    console.log('Hallo ik ben ' + this.naam);
    console.log('Ik ben ' + this.age + ' jaar oud');
    console.log('Ik ben geboren in ' + this.getAge())

        for (let i = 0; i < this.pets.length; i++) {
      console.log('Ik heb een ' + this.pets[i]);
    }
  },

    getAge: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
};

louisa.talk();
