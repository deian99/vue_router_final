<template>
  <div class="containerr">
    <button @click="onClick()" :style="{ background: color }" class="buttonss">
      {{ text }} <router-link to="/equipment"></router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>

<style scoped>
.containerr {

}
.buttonss {
  font-family: Verdana, sans-serif;
  font-weight: 550;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 15px;
  text-decoration: none;
  list-style-type: none;
  float: left;
  text-align: center;
  background-color: rgba(127, 127, 127, 0.35);
  margin-bottom: 15px;
  width: 150px;
  line-height: 60px;
  border-radius: 35%;
  border: 2px solid gray;
}

.button li a {
  text-decoration: none;
  color: #000;
  display: block;
}

.button li a:hover {
  text-decoration: none;
  color: #fff;
}

ul {
  position: fixed;
  top: 0;
  width: 100%;
  margin-left: 20%;
}
</style>
