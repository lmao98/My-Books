<template>
  <div class="d-flex justify-center align-center">
    <v-form class="d-flex flex-column col-12 col-md-6 elevation-5 mt-10" @submit="handleSignUp">
      <v-text-field name="email" label="E-mail" v-model="email" value="email" :rules="['required', 'email']"></v-text-field>

      <v-text-field name="firstName" label="First name" id="firstName" :value="firstName"></v-text-field>

      <v-text-field name="lastName" label="Last name" id="lastName" :value="lastName"></v-text-field>

      <v-text-field
        name="password"
        label="Enter your password"
        hint="At least 8 characters"
        min="8"
        :append-icon="password_visible ? 'fa-regular fa-eye' : 'fa-light fa-eye-slash'"
        :append-icon-cb="() => (password_visible = !password_visible)"
        value="password"
        v-model="password"
        :rules="[() => 'The email and password you entered don\'t match']"
        error
        :type="password_visible ? 'password' : 'text'"
      ></v-text-field>
      <v-text-field
        name="password_confirm"
        label="Enter your password confirmation"
        hint="At least 8 characters"
        min="8"
        v-model="password_confirm"
        :append-icon="password_visible ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (password_visible = !password_visible)"
        value="password"
        :rules="[() => 'The email and password you entered don\'t match']"
        error
        :type="password_visible ? 'password' : 'text'"
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
      password_visible: true,
      firstName: "firstName_",
      lastName: "lastName_",
    };
  },
  methods: {
    handleSignUp: (event) => {
      // axios call to back end to register
      event.preventDefault();

      let { password, email, password_confirm, lastName, firstName } = event.target.elements;

      signup(email.value, firstName.value, lastName.value, password.value, password_confirm.value)
        .then(({ user, token }) => {
          //save to store
          console.table({ user, token });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
