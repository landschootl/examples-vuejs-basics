<template>
  <div>{{title}}</div>
</template>

<script>
export default {
  name: 'CycleLife',
  data() {
    return {
      title: 'Component life cycle'
    }
  },
  // cycle life
  beforeCreate() {
    console.log('beforeCreate: appelée avant l\'initialisation de la réactivité');
  },
  created() {
    this.title = this.title + ' - updated';
    console.log('created: méthode appelée à la création de notre vue (avant la définition du template html).');
  },
  beforeMount() {
    console.log('beforeMount: méthode appelée avant la création du template avec les valeurs des datas. (mais template html pris en compte).');
  },
  mounted() {
    console.log('mounted: méthodes appelée après l\'affichage de notre vue avec les données.');
  },
  beforeUpdate() {
    console.log('beforeUpdate: méthode appelée lorsque les datas ont été modifié avant le rendu.');
  },
  updated() {
    console.log('updated: méthode appelée lorsque les datas ont été modifié après le rendu.');
  },
  beforeDestroy() {
    console.log('beforeDestroy:  méthode appelée avant que notre vue soit supprimé.');
  },
  destroyed() {
    console.log('destroyed: méthode appelée après que notre élément soit détruit.');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
