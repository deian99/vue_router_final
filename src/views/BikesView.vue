<template>
  <div class="wrapper">
    <br />
    <br />
    <p class="title">
      Here is a list of our available new/used bikes at the moment.
    </p>
    <div class="bikesList">
      <BikesList :bikes="bikes" />
    </div>
  </div>
</template>
<script>
import BikesList from "../components/BikesList.vue";
//localStorage si v_model

export default {
  name: "BikesView",
  components: {
    BikesList,
  },
  data() {
    return {
      bikes: [],
      imagine: "../assets/ImagesEquipment/geaca-moto-1.png",
      imagine2: "https://i.ibb.co/L9VWtDs/geaca-moto-1.webp"
    };
  },
  created() {
    let image = () => {
      // eslint-disable-next-line no-undef
      return require("../assets/ImagesEquipment/geaca-moto-1.png");
    };
    this.bikes = [
      {
        id: 0,
        maker: "Suzuki",
        model: "GSXR1000",
        engine: "1000" + "cc",
        bhp: 160 + "bhp",
        type: "Sport",
        year: "2020",
        price: "35.000$",
        stock: true,
        image: 'https://www.motorcyclespecs.co.za/Gallery_M-Z_16/Suzuki-GSX-R1000-19-5.jpg',
        /*mainImage: () => {
          return require('~assets' + '/ImagesEquipment' + this.image + '.png')
        },*/
        imageToShow: image,
        imageShow: () => {
          // eslint-disable-next-line no-undef
          return require("./geaca-moto-1.png");
        },
      },
      {
        id: 1,
        maker: "Suzuki",
        model: "GSXF600",
        engine: "600" + "cc",
        bhp: 87 + "bhp",
        type: "Sport Cruiser",
        year: "1996",
        price: "5.000$",
        stock: true,
        image:'https://www.motorcyclespecs.co.za/Gallery%20%20A/SUZUKI%20GSX%20600%20F%2088%20%202.jpg',
      },
      {
        id: 2,
        maker: "Kawasaki",
        model: "Ninja H2R",
        engine: "1000" + "cc",
        bhp: 240 + "bhp",
        type: "Hyperbike",
        year: "2022",
        price: "55.000$",
        stock: false,
        image: 'https://gomagcdn.ro/domains/motomus.ro/files/product/original/kawasaki-ninja-h2r-21-37264-1450.jpg',
      },
      {
        id: 3,
        maker: "BMW",
        model: "1200RS",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "Sport Touring",
        year: "2019",
        price: "23.000$",
        stock: true,
        image: 'https://www.motostop.eu/productimages/15943/42719.jpg',
      },
      {
        id: 4,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: false,
        image: '',
      },
      {
        id: 5,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 6,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 7,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: false,
        image: '',
      },
      {
        id: 8,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 9,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 10,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: false,
        image: '',
      },
      {
        id: 11,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 12,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 13,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 14,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
      },
      {
        id: 15,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "$$$$",
        stock: true,
        image: '',
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

.bikesList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}
</style>
