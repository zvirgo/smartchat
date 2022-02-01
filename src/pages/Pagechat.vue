<template>
  <q-page class="flex column">
    <q-banner v-if="!otherUserDetails.online" class="text-center bg-grey-4">
      {{ otherUserDetails.name }} is Offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
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
import mixinOtherUserDetails from '../mixins/mixin-other-user-details'
export default defineComponent({
  mixins:[mixinOtherUserDetails],
  name: "Pagechat",
  data() {
    return {
      newMessage: "",
    };
  },
  computed: {
    ...mapState("storeX", ["messages", "userDetails"]),
    
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
