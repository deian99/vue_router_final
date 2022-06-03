<template>
  <div class="dropdown">
    <font-awesome-icon icon="basket-shopping" size="2x" />
    <div class="dropdown-content">
      <h3>Shopping list</h3>
      <div >
      <ShoppingList class="shopItem" />
      </div>
      <h4>Delete items</h4>
      <h4>Proceed to payment</h4>
    </div>
  </div>
</template>

<script>
import ShoppingList from "./ShoppingList.vue";
export default {
  name: "BasketButton",
  components: {
    ShoppingList,
  },
  data() {
    return { shopItems: this.$store.state.shopListData.shopListItems };
  },

};
</script>

<style scoped>
.shopItem {
  border: 2px solid black;
  display: grid;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  color: black;
  display: none;
  position: absolute;
  background-color: rgba(127, 127, 127, 0.35);
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  right: 0;
  border-radius: 15px;
  border: 1px solid rgba(127, 127, 127);
}
p:hover {
  color: white;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
