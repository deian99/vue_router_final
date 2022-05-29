<template>
  <div class="wrapper">
    <br />
    <br />
    <p class="title">
      Here is a list of our available pieces of equipment at the moment.
    </p>
    <div class="itemList">
      <ItemEquipment :items="items" class="equipments" />
    </div>
  </div>
</template>

<script>
import ItemEquipment from "../components/ItemEquipment.vue";
export default {
  name: "EquipmentView",
  components: {
    ItemEquipment,
  },
  props: {},
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = [
      {
        id: 1,
        maker: "AlpineStars",
        model: "DFB200",
        size: "L",
        color: "black",
        price: "200.00$",
        stock: false,
      },
      {
        id: 2,
        maker: "AlpineStars",
        model: "HDGF800X",
        size: "M",
        color: "white",
        price: "150.00$",
        stock: true,
      },
      {
        id: 3,
        maker: "Dainese",
        model: "XVSC100F",
        size: "S",
        color: "red & blue",
        price: "100.00$",
        stock: false,
      },
      {
        id: 4,
        maker: "Dainese",
        model: "XHSC300M",
        size: "XL",
        color: "black & white",
        price: "250.00$",
        stock: true,
      },
      {
        id: 5,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: true,
      },
      {
        id: 6,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 7,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 8,
        maker: "AlpineStars",
        model: "DFB200",
        size: "L",
        color: "black",
        price: "200.00$",
        stock: false,
      },
      {
        id: 9,
        maker: "AlpineStars",
        model: "HDGF800X",
        size: "M",
        color: "white",
        price: "150.00$",
        stock: true,
      },
      {
        id: 10,
        maker: "Dainese",
        model: "XVSC100F",
        size: "S",
        color: "red & blue",
        price: "100.00$",
        stock: false,
      },
      {
        id: 11,
        maker: "Dainese",
        model: "XHSC300M",
        size: "XL",
        color: "black & white",
        price: "250.00$",
        stock: true,
      },
      {
        id: 12,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: true,
      },
      {
        id: 13,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 14,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 15,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 16,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        price: "$$$$$",
        stock: false,
      },
    ];
  },
};
</script>

<style scoped>
.title {
  color: black;
  font-size: 20px;
  font-weight: 550;
  text-shadow: 4px 4px 4px rgba(131, 141, 237);
}
.wrapper {
  background-color: rgba(131, 141, 237, 0.4);
  border: 1px solid rgba(131, 141, 237);
  border-radius: 15px;
}

.itemList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}
</style>
