<template>
  <div class="container">
    <br />
    <p>Username: {{ user.username }}</p>
    <p>First Name: {{ user.firstname }}</p>
    <p>Last Name: {{ user.lastname }}</p>
    <p>E-mail: {{ user.email }}</p>
    <br />
  </div>
</template>

<script>
export default {
  name: "AccountDetailsPage",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.container {
  background-color: rgba(180, 180, 180, 0.6);
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
}
p {
  color: black;
  font-weight: bold;
}
</style>
