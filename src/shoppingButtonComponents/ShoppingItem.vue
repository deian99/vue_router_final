<template>
  <div>
    <div class="shopItem">
        {{ shopItem.maker }}<br />{{ shopItem.model }} <br>
      <img v-bind:src="shopItem.image" alt="image"><br>
      {{ shopItem.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {
    shopItem: Object,
  },
};
</script>

<style scoped>
.shopItem {
  color: black;
  background-color: rgba(127, 127, 127, 0.5);
  font-weight: 550;
  justify-items: center;

}
img {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
}
</style>
