<template>
  <header>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <router-link to="/">
      <MainButton text="Home" color="rgba(131,141,237, 0.2)"></MainButton>
    </router-link>
    <router-link to="/equipment">
      <MainButton text="Equipment" color="rgba(131,141,237, 0.2)"></MainButton>
    </router-link>
    <router-link to="/bikes">
      <MainButton text="Bikes" color="rgba(131,141,237, 0.2)" />
    </router-link>
    <MainButton text="Accessories" color="rgba(131,141,237, 0.2)" />
    <MainButton text="TRY IT" color="rgba(131,141,237, 0.2)" />
  </header>
</template>

<script>
import MainButton from "./MainButton.vue";

export default {
  name: "MainHeader",
  props: {
    title: String,
  },
  components: {
    MainButton,
  },
};
</script>

<style scoped>
h1 {
  color: black;

  margin-bottom: 50px;
}

header {
  display: block;
  justify-content: space-between;
  align-items: center;
}
</style>
