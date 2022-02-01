<template>
  <q-page class="q-pa-sm">
    <q-list separator>
      <q-item
        v-for="(user, key) in users"
        :key="key"
        :to="`/chat/` + key"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-badge :color="user.online ? 'light-green-5' : 'grey-4'">
            {{ user.online ? "Online" : "Offline" }}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("storeX", ["users"]),
  },
});
</script>
