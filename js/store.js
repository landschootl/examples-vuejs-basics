new Vue({
  el: '#app',
  name: 'Store',
  data: {
    store: {
      title: 'Magasin de Fred !',
      isOpen: false
    },
    products: [
      {
        name: 'Banane',
        priceHt: 1.50
      },
      {
        name: 'Oeuf',
        priceHt: 2.20
      },
      {
        name: 'Kiwi',
        priceHt: 3.30
      },
      {
        name: 'Lait',
        priceHt: 0.90
      }
    ],
    basket: [],
    lastUpdateBasket: "no update"
  },
  methods: {
    isOpenStore() {
      this.store.isOpen = true;
    },
    closeStore() {
      this.store.isOpen = false;
    },
    addProductInBasket(product) {
      this.basket.push(product);
    },
    removeProductInBasket(index) {
      this.basket.splice(index, 1);
    }
  },
  computed: {
    totalPriceTTCBasket() {
      return this.basket.length > 0
          ? this.basket
              .map(product => product.priceHt * 1.2)
              .reduce((total, price) => total + price).toFixed(2)
          : 0;
    }
  },
  watch: {
    basket() {
      const date = new Date();
      this.lastUpdateBasket = `${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s`;
    }
  },
  template: `
    <div>
    <div id="store">
      <div class="bloc">
        <div class="sub-bloc">
          <img src="https://img.pngio.com/shop-icon-png-175739-free-icons-library-store-icon-png-1024_1024.jpg" id="img-store"/>
          <h1>{{store.title}}</h1>
          <h2 v-bind:class="{ 'store-open': store.isOpen, 'store-close': !store.isOpen }">Magasin : <span v-if="store.isOpen">open</span><span v-else>close</span></h2>

          <div id="manage-store">
            <h3>Administration du magasin :</h3>
            <button v-if="store.isOpen" @click="closeStore()">Fermer le magasin</button>
            <button v-else @click="isOpenStore()">Ouvrir le magasin</button>
            <p>Nom du magasin : <input type="text" v-model="store.title"></p>
            <p>Magasin ouvert : <input type="checkbox" v-model="store.isOpen"></p>
          </div>
        </div>
        <div class="sub-bloc">
          <h3>Les produits en vente :</h3>
          <div v-for="product in products" :key="product.name">
            <span>{{product.name}}</span> - <span>{{product.priceHt}} €</span> <button @click="addProductInBasket(product)">ajouter à mon panier</button>
          </div>
          <h3>Mon panier :</h3>
          <p>Prix total de mon panier TTC : {{totalPriceTTCBasket}} €</p>
          <p>Dernière modification : {{lastUpdateBasket}}</p>
          <div v-for="(product, index) in basket" :key="index">
            <span>{{product.name}}</span> - <span>{{product.priceHt}} €</span> <button @click="removeProductInBasket(index)">enlever de mon panier</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});
