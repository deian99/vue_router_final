<template>
  <div class="wrapper">
    <form method="post">
      <div class="container">
        <br /><br />
        <h1>Recover password</h1>
        <br />
        <p>
          Please type in your account's username and email to recover your
          password.
        </p>
        <br />
        <label for="username"><b>Username</b></label
        ><br />
        <br />
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter Username"
          required
        /><br />
        <label for="email"><b>Email</b></label
        ><br />
        <br />
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="Enter Email"
          required
        /><br />
        <br />
        <h3 id="status">{{ message }}</h3>
        <h3 class="recoverPw">{{recoverMessage}}{{password}}</h3>
        <button @click.prevent="recoverPassword" class="btn">
          Recover Password
        </button>
        <br /><br />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RecoverPasswordPage",
  data() {
    return {
      message: "",
      username: "",
      recoverMessage: "",
      email: "",
      password: "",
    };
  },
  methods: {
    recoverPassword() {
      let h3 = document.getElementById("status");
      let users = this.$store.state.users;
      console.log(users)
      let user = users.find((user) => user.username === this.username && user.email === this.email)
      if(user === undefined) {
        this.message = "Could not find any account for this combination of email and username. Please try again."
        h3.style.color = "red"
      }
      else {
        this.password = user.password;
        this.recoverMessage = "Your password is:   "

          }
    }
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
.recoverPw {
  color: black;
}
h1 {
  color: black;
}
p {
  color: black;
  font-size: 16px;
  font-weight: bold;
}
.btn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 15px;
}
input[type="text"],
input[type="password"] {
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}
label {
  color: black;
}
</style>
