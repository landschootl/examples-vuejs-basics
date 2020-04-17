Vue.component('composant1', {
  template: `
    <div>composant 1</div>
  `
});

Vue.component('composant2', {
  template: `
    <div>composant 2</div>
  `
});

new Vue({
  el: '#app',
  template: `<div>
    <composant1></composant1>
    <composant2></composant2>
  </div>`
});