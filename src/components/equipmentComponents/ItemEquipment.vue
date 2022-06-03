<template>
  <div :key="item.id" v-for="item in items">
    <div class="containerr">
      <Item :item="item" />
      <div class="buttons-container">
        <BuyButton @click="onClick(item.id, item)"/>
        <ReadMoreButton />
        <TryItButton />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import BuyButton from "../buttons/BuyButton.vue";
import ReadMoreButton from "../buttons/ReadMoreButton.vue";
import TryItButton from "../buttons/TryItButton.vue";

export default {
  name: "ItemEquipment",
  props: {},
  components: {
    Item,
    BuyButton,
    ReadMoreButton,
    TryItButton,
  },
  methods: {
    onClick(id, item) {
      console.log(this.items.indexOf(id))
      this.$emit('buy-item', id)
      this.$store.commit('setShopStatus', id)
      this.$store.commit('addShopItem', item)
      console.log(this.$store.state.shopListData.shopListItems)
    }
  },
  data() {
    return { items: this.$store.state.equipData.equipments };
  },
};
</script>

<style scoped>
.buttons-container {
  display: flex;
}
.containerr {
  display: grid;
}
.items {
  grid-template-columns: 70% 30%;
}
</style>
