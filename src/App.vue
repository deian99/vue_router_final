<template>
  <div class="containerr">
    <MainHeader title="Welcome to TRY IT Moto" />

    <router-view />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
export default {
  name: "App",
  components: {
    MainHeader,
  },
  data() {
    return {
      items: [],
      bikes: [],
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
    ];
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body {
  background: url("https://wallpaper.dog/large/1003951.jpg") left top no-repeat,
    url("https://wallpaperaccess.com/full/326186.jpg") left center no-repeat,
    url("https://cdn.wallpapersafari.com/5/3/OdteBp.jpg") left bottom no-repeat;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0px;
}

.stparagraph {
  color: #fff;
  font-family: Verdana, sans-serif;
  font-weight: bold;
}

.ndparagraph {
  color: chartreuse;
  font-family: Verdana, sans-serif;
  font-weight: bold;
}

.rdparagraph {
  color: #fff;
  font-family: Verdana, sans-serif;
  font-weight: bold;
}

.thparagraph {
  color: #fff;
  font-family: Verdana, sans-serif;
  font-weight: bold;
}

.content {
  margin-top: 20%;
  margin-left: 20%;
}

.button:hover {
  transform: scale(1.08);
}

.echipament {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 30px;
  text-decoration: none;
  list-style-type: none;
  float: left;
  text-align: center;
  background-color: rgba(127, 127, 127, 0.35);
  margin-bottom: 15px;
  width: 150px;
  line-height: 60px;
  border-radius: 35%;
}
.echipament:hover {
  transform: scale(1.08);
}

.motociclete {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 30px;
}
.motociclete:hover {
  transform: scale(1.08);
}

.accesorii {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 30px;
}
.accesorii:hover {
  transform: scale(1.08);
}

.tryIt {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 30px;
}
.tryIt:hover {
  transform: scale(1.08);
}

.copyright {
  margin-top: 80%;
  color: #fff;
}

.logo {
  position: fixed;
  top: 30px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.inline-photo {
  border-radius: 0.5em;
  margin: auto;
  opacity: 0;
  transform: translateY(4em);
  transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
    opacity 0.3s 0.25s ease-out;
  max-width: 60%;
  width: 60%;
  height: 90%;
  max-height: 700px;
  will-change: transform, opacity;
}

.inline-photo.is-visible {
  opacity: 1;
  transform: rotateZ(-0deg);
}
</style>
