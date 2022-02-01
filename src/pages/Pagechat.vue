<template>
  <q-page class="flex column">
    <q-banner class="text-center bg-grey-4"> User is Offline </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width" @submit="sendMessage">
          <div class="row">
            <div class="col">
              <q-input
                bg-color="white"
                outlined
                rounded
                v-model="newMessage"
                label="Message"
                dense
              >
              </q-input>
            </div>
            <q-btn color="white" round dense flat icon="send" type="submit" />
          </div>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
export default defineComponent({
  name: "Pagechat",
  data() {
    return {
      newMessage: "",
    };
  },
  computed: {
    ...mapState("storeX", ["messages"]),
  },
  methods: {
    ...mapActions("storeX", [
      "firebaseGetMessages",
      "firebaseStopGettingMessages",
    ]),
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
    },
  },
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId);
  },
  unmounted() {
    this.firebaseStopGettingMessages();
  },
});
</script>
