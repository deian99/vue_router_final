<template>
  <div :key="bike.id" v-for="bike in bikes">
    <div class="containerr">
      <Bike :bike="bike" class="items" />
      <div class="buttons-container">
        <BuyButton />
        <ReadMoreButton />
        <TryItButton />
      </div>
    </div>
  </div>
</template>

<script>
import Bike from "./Bike.vue";
import BuyButton from "../buttons/BuyButton.vue";
import ReadMoreButton from "../buttons/ReadMoreButton.vue";
import TryItButton from "../buttons/TryItButton.vue";

export default {
  name: "BikesView",
  props: {},
  components: {
    Bike,
    BuyButton,
    ReadMoreButton,
    TryItButton,
  },
  methods: {},
  data() {
    return { bikes: this.$store.state.bikesData.bikes}
  }
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
