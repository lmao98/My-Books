<template>
  <div class="flex">
    <v-form class="d-flex flex-column col-12 col-md-6" @submit="handleSigninSubmit">
      <v-text-field label="E-mail" v-model="email" :rules="['required', 'email']"></v-text-field>
      <v-text-field
        name="password"
        label="Enter your password"
        hint="At least 8 characters"
        min="8"
        :append-icon="value ? 'fa-regular fa-eye' : 'fa-light fa-eye-slash'"
        :append-icon-cb="() => (value = !value)"
        value="Password"
        :rules="[() => 'The email and password you entered don\'t match']"
        error
        :type="value ? 'password' : 'text'"
      ></v-text-field>
      <v-btn type="submit" small color="primary">Sign in</v-btn>
    </v-form>
  </div>
</template>

<script>
import { signin } from "../API/auth";
export default {
  name: "SignInPage",
  data() {
    return {
      email: {
        type: String,
        default: "",
      },
      password: {
        type: String,
        default: "",
      },
    };
  },
  methods: {
    handleSigninSubmit: (event) => {
      event.preventDefault();

      let { password, email } = event.target.elements;

      signin(email.value, password.value);
    },
  },
};
</script>

<style></style>
