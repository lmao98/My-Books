<template>
  <div class="d-flex justify-center align-center">
    <v-form class="d-flex flex-column col-12 col-md-6 elevation-5 mt-10" @submit="handleSignUp">
      <v-text-field name="email" label="E-mail" v-model="email" :rules="['required', 'email']"></v-text-field>
      <v-text-field
        name="password"
        label="Enter your password"
        hint="At least 8 characters"
        min="8"
        :append-icon="value ? 'fa-regular fa-eye' : 'fa-light fa-eye-slash'"
        :append-icon-cb="() => (value = !value)"
        value="Password"
        v-model="password"
        :rules="[() => 'The email and password you entered don\'t match']"
        error
        :type="value ? 'password' : 'text'"
      ></v-text-field>
      <v-text-field
        name="password_confirm"
        label="Enter your password confirmation"
        hint="At least 8 characters"
        min="8"
        v-model="password_confirm"
        :append-icon="value ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (value = !value)"
        value="Password"
        :rules="[() => 'The email and password you entered don\'t match']"
        error
        :type="value ? 'password' : 'text'"
      ></v-text-field>
      <v-btn type="submit" small color="primary">Sign up</v-btn>
    </v-form>
  </div>
</template>

<script>
import { signup } from "../API/auth";
export default {
  name: "SignpPage",
  data() {
    return {
      email: "fake@domain.com",
      password: "password",
      password_confirm: "password",
    };
  },
  methods: {
    handleSignUp: (event) => {
      event.preventDefault();

      let { password, email, password_confirm } = event.target.elements;

      signup(email.value, password.value, password_confirm.value);
    },
  },
};
</script>

<style></style>
