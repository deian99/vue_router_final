<template>
  <div class="wrapper">
    <br />
    <br />
    <p class="title">
      Here is a list of our available accessories at the moment.
    </p>
    <div class="accessoriesList">
      <AccessoriesList :accessories="accessories" />
    </div>
  </div>
</template>

<script>
import AccessoriesList from "../components/AccessoriesList.vue";
export default {
  name: "AccessoriesView",
  components: {
    AccessoriesList,
  },
  props: {},
  data() {
    return {
      accessories: [],
    };
  },
  created() {
    this.accessories = [
      {
        id: 0,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://www.championhelmets.com/media/amasty/amoptmobile/catalog/product/cache/0985236fd57b377f466150f1e0bfa088/a/l/alpinestars_supertech_gloves_black_white_gloves_handschuhe_gants_handschoenen_eldivenleri_guantes_1_16_jpg.webp",
        price: "50.00$",
        stock: true,
      },
      {
        id: 1,
        type: "Gloves",
        maker: "Dainese",
        model: "PRO HANDLE X",
        size: "M",
        color: "red",
        image: "https://motoday.lt/image/cache/data/pirstines/sportines/Dainese%202020/dainese_druid3_gloves_black_fluo_red-650x650.jpg",
        price: "150.00$",
        stock: false,
      },
      {
        id: 2,
        type: "Gloves",
        maker: "AlpineStars",
        model: "ZPROCARBON100X",
        size: "S",
        color: "black",
        image: "data:image/jpeg;base64,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",
        stock: true,
        price: "100.00$",
      },
      {
        id: 3,
        type: "Gloves",
        maker: "O Neal",
        model: "BUTCH CARBON",
        size: "L",
        color: "black",
        image: "https://gomagcdn.ro/domains/asfalt-uscat.ro/files/product/original/manusi-o-neal-butch-carbon-21557-3407.png",
        price: "75.00$",
        stock: false,
      },
      {
        id: 4,
        type: "Gloves",
        maker: "Garibaldi",
        model: "GLADIUS KANGAROO KV",
        size: "L",
        color: "carbon black",
        image: "https://motocan.es/imagenes/GUANTES%20GARIBALDI%20GLADIUS%20PRO%20KANGURO.JPG2402272.jpg",
        price: "220.00$",
        stock: true,
      },
      {
        id: 5,
        type: "Gloves",
        maker: "W-TEC",
        model: "RADOON MBG-1621-16",
        size: "L",
        color: "black",
        image: "data:image/jpeg;base64,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",
        price: "90.00$",
        stock: true,
      },
      {
        id: 6,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: false,
      },
      {
        id: 7,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: true,
      },
      {
        id: 8,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: true,
      },
      {
        id: 9,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: false,
      },
      {
        id: 10,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: false,
      },
      {
        id: 11,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: true,
      },
      {
        id: 12,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: false,
      },
      {
        id: 13,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
        stock: true,
      },
      {
        id: 14,
        type: "Gloves",
        maker: "AlpineStars",
        model: "XBNV38D",
        size: "L",
        color: "black & white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1HVTNHgyONqv1dd45DoKhr7NxZmW8t6UK1ZiKblJh_PPQuV2MuoJTgB1h1nnLtwDfDI&usqp=CAU",
        price: "$$$$$$",
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

.accessoriesList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}
</style>
