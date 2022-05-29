<template>
  <div :key="item.id" v-for="item in items">
    <div class="containerr">
      <Item :item="item" class="items" />
      <div class="buttons-container">
        <BuyButton />
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
  props: {
    items: Array,
  },
  components: {
    Item,
    BuyButton,
    ReadMoreButton,
    TryItButton,
  },
  methods: {},
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
