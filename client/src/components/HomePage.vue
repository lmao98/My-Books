<template>
  <div class="d-flex orange">
    <div class="illustration col-md-6 order-md-2 col-12">
      <img :src="require('../assets/undraw_calculator_re_alsc.svg')" alt="person adding item to a list" />
    </div>

    <div class="heading col-md-6 col-12 d-flex flex-wrap white--text">
      <div class="heading--text headline mt-5 offset-md-3 col-6">
        <h2>Getting started</h2>
        <p>creating a book list</p>
      </div>

      <v-form class="col-md-6 col-12 offset-md-3" @submit="handleFormSubmit">
        <div class="d-flex">
          <v-text-field name="search" label="search" id="search_field" aria-required="true" rule="['Required']"></v-text-field>
          <v-btn class="" color="primary" dark type="submit">
            search
            <v-icon light right>fas fa-search</v-icon>
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    handleFormSubmit: (event) => {
      event.preventDefault();
      console.log(event.target);
    },
  },
};
</script>

<style></style>
