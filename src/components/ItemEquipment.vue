<template>
  <div :key="item.id" v-for="item in items">
    <div class="container">
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
import BuyButton from "./BuyButton.vue";
import ReadMoreButton from "./ReadMoreButton.vue";
import TryItButton from "./TryItButton.vue";

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
.container {
  display: grid;
}
.items {
  grid-template-columns: 70% 30%;
}
</style>
