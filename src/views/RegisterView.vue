<template>
  <RegisterPage />
</template>

<script>
import RegisterPage from "../components/userComponents/RegisterPage.vue";
export default {
  name: "RegisterView",
  components: {
    RegisterPage,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = {
      firstName: document.getElementById("fstname"),
      lastName: "",
      username: "",
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped></style>
