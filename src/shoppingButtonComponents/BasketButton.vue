<template>
  <div class="dropdown">
    <font-awesome-icon icon="basket-shopping" size="2x" />
    <div class="dropdown-content">
      <h3>Shopping list</h3>
      <div class="shopList">
      <ShoppingList />
      </div>
      <h4 @click="deleteItems()" class="delete-items">Delete items</h4>
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
  methods: {
    deleteItems() {
      this.$store.commit("removeItems");
    },
  },

};
</script>

<style scoped>
.delete-items {
  color: black;
  cursor: pointer;
}
.delete-items:hover {
  color: white;
}
.shopList {
  border: 2px solid black;
  display: grid;
  grid-template-columns: 50% 50%;

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
  max-width: 300px;
}
p:hover {
  color: white;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
