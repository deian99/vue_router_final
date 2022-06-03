<template>
  <div>
    <div :key="shopItem" v-for="shopItem in shopItems" class="shopItems">
      <ShoppingItem :shopItem="shopItem" class="shopItem"/>
    </div>
  </div>
</template>

<script>
import ShoppingItem from "./ShoppingItem.vue";
export default {
  name: "ShoppingList",
  components: {
    ShoppingItem,
  },
  data() {
    return { shopItems: this.$store.state.shopListData.shopListItems };
  },
};
</script>

<style scoped>
.shopItems {
  display: grid;
}
.shopItem {
  padding: 5px;
  grid-template-columns: 25% 25% 25%;

  gap: 25px;
}
</style>
