<template>
  <div :key="shopItem" v-for="shopItem in shopItems">
    <div class="containerr">
      <ShoppingItem :shopItem="shopItem" class="items" />
      <font-awesome-icon icon="xmark" size="2x" class="remove" @click="deleteShopItem(shopItem.uniqueID)"/>
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
  methods: {
    deleteShopItem (id) {
      this.$store.commit("setItemRemoveRequest", id)
      this.$store.commit("removeShopItem", id)
    }
  },
};
</script>

<style scoped>
.remove {
  color: red;
}
.items {
}
.containerr {
  padding: 5px;
}
</style>
