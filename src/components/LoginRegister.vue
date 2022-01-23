<template>
  <p>
    <q-form @submit="submitForm" @reset="onReset" class="q-gutter-md">
      <q-input
        v-if="tab == 'Register'"
        filled
        outlined
        v-model="formData.name"
        label="Your name *"
      />
      <q-input
        filled
        outlined
        v-model="formData.email"
        type="email"
        label="Your Email *"
      />

      <q-input
        filled
        outlined
        type="password"
        v-model="formData.password"
        label="Your Password *"
      />
      <div>
        <q-btn :label="tab" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </p>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginRegister",
  props: ["tab"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("storeX", ["registerUser","loginUser"]),
    submitForm() {
      if (this.tab == "Login") {
        this.loginUser(this.formData)
      } else {
        this.registerUser(this.formData);
      }
    },
    onReset() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>