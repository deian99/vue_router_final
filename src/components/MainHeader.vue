<template>
  <header>
    <div class="nav-buttons">
      <UserButton />
      <BasketButton />
      <MenuButton />
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
            <MainButton
              text="Equipment"
              color="rgba(131,141,237, 0.2)"
            ></MainButton>
          </router-link>
          <router-link to="/bikes">
            <MainButton text="Bikes" color="rgba(131,141,237, 0.2)" />
          </router-link>
          <router-link to="/accessories">
          <MainButton text="Accessories" color="rgba(131,141,237, 0.2)" />
          </router-link>
          <MainButton text="TRY IT" color="rgba(131,141,237, 0.2)" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MainButton from "./MainButton.vue";
import UserButton from "./UserButton.vue";
import BasketButton from "./BasketButton.vue";
import MenuButton from "./MenuButton.vue";

export default {
  name: "MainHeader",
  props: {
    title: String,
  },
  components: {
    MainButton,
    UserButton,
    BasketButton,
    MenuButton,
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
  gap: 15px;
  margin-right: 15px;
}
</style>
