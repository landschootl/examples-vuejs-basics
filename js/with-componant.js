Vue.component('component1', {
  template: `
    <div>composant 1</div>
  `
});

Vue.component('component2', {
  template: `
    <div>composant 2</div>
  `
});

new Vue({
  el: '#app',
  template: `<div>
    <component1></component1>
    <component2></component2>
  </div>`
});
