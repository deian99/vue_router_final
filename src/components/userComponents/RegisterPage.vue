<template>
  <div class="wrapper">
    <form>
      <div class="containerr">
        <h2 id="error">{{ message }}</h2>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <label for="fstname"><b>First Name</b></label
        ><br />
        <input
          type="text"
          id="fstname"
          v-model="firstName"
          name="fstname"
          placeholder="Enter First Name"
          required
        /><br />

        <label for="lstname"><b>Last Name</b></label
        ><br />
        <input
          type="text"
          v-model="lastName"
          id="lstname"
          placeholder="Enter Last Name"
          required
        /><br />

        <label for="uname"><b>Username</b></label
        ><br />
        <input
          type="text"
          v-model="username"
          id="uname"
          placeholder="Enter Username"
          required
        /><br />

        <label for="email"><b>Email</b></label
        ><br />
        <input
          type="text"
          v-model="email"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        /><br />

        <label for="psw"><b>Password</b></label
        ><br />
        <input
          type="password"
          v-model="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        /><br />

        <br />

        <p>
          By creating an account you agree to our
          <a href="#">Terms & Privacy</a>.
        </p>
        <h2 id="success"></h2>
        <button @click.prevent="register()" class="registerbtn">
          Register
        </button>


      <div class="container signin">
        <p>
          Already have an account?
          <router-link to="/login">Sign in</router-link>.
        </p>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    register() {
      let h2 = document.getElementById("error");
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.username === "" ||
        this.email === "" ||
        this.password === ""
      ) {
        this.message = "Please fill out all the fields";
        h2.style.color = "red";
      } else {
        h2.style.color = "green";
        this.message = "Registration was successful. You may now log in.";
        localStorage.setItem(this.username, this.password);
        let user = {
          firstname: this.firstName,
          lastname: this.lastName,
          username: this.username,
          email: this.email,
          password: this.password,
        };
        this.$store.commit("addUser", user);
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}



/* Add padding to containers */
.containerr {
  padding: 16px;
  color: black;
  background-color: rgba(180, 180, 180, 0.6);
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
}
label {
  color: black;
}

/* Full-width input fields */
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

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 15px;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: blue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  text-align: center;
}
</style>
