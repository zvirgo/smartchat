<template>
  <q-page class="q-pa-sm">
    <q-list separator>
      <q-item
        v-for="user in users"
        :key="user.id"
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

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ruddy Jedrzej",
          online: true,
        },
        {
          id: 2,
          name: "Mallorie Alessandrini",
          online: false,
        },
        {
          id: 3,
          name: "Elisabetta Wicklen",
          online: true,
        },
        {
          id: 4,
          name: "Seka Fawdrey",
          online: false,
        },
      ],
    };
  },
});
</script>
