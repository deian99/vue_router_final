<template>
  <div>
    <div class="shopItem1">
      <div>{{ shopItem.maker }}</div>
      <div>{{ shopItem.model }}</div>
      <img v-bind:src="shopItem.image" alt="image" /><br />
      <div>{{ shopItem.price }}</div>
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
.shopItem1 {
  color: black;
  background-color: rgba(127, 127, 127, 0.7);
  font-weight: 550;
  justify-items: center;
  grid-template-columns: 70% 30%;
}
img {
  justify-self: center;
  align-self: center;
  width: 75px;
  height: 75px;
}
</style>
