<template>
  <div class="container">
        <Navigation></Navigation>
        <router-view/>
  </div>
</template>

<script>
  import {RouterView} from "vue-router"
  import Navigation from "./components/Navigation.vue" 
  
  export default{
    name: "App",
    components: {
      Navigation,
      RouterView,
    }
  }

</script>