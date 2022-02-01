<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          to="/"
          icon="arrow_back"
          label="Back"
          no-caps
          flat
          dense
        />

        <q-toolbar-title class="absolute-center">
          {{ $route.name }}
        </q-toolbar-title>
        <q-btn
          v-if="!userDetails.userId"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          to="/auth"
          label="Login"
          no-caps
          flat
          dense
        />
        <q-btn
          @click="logoutUser"
          v-else
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense
        >
          Logout<br />
          {{ userDetails.name }}
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "MainLayout",

  computed: {
    ...mapState("storeX", ["userDetails"]),
  },
  methods: {
    ...mapActions("storeX", ["logoutUser"]),
  },
});
</script>

<style lang="sass" scoped>
.q-toolbar
  .q-btn
    line-height: 1.2
</style>




