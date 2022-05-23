<template>
  <header>
    <div class="nav-buttons">
      <UserButton />
    <font-awesome-icon icon="user-tie" size="2x" />
      <font-awesome-icon icon="basket-shopping" size="2x" />
      <font-awesome-icon icon="ellipsis-vertical" size="2x" />
    </div>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="buttons-wrapper">
    <div class="mainHeader">
      <div class="headerButtons">
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
      </div>
    </div>
    </div>
  </header>
</template>

<script>
import MainButton from "./MainButton.vue";
import UserButton from "./UserButton.vue";

export default {
  name: "MainHeader",
  props: {
    title: String,
  },
  components: {
    MainButton,
    UserButton,
  },
};
</script>

<style scoped>
h1 {
  color: black;


}
.buttons-wrapper {

}

.mainHeader {




}
.headerButtons {
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
.nav-buttons {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 15px;

}
</style>
