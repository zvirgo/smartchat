import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("storeX", ["users"]),
    otherUserDetails() {
      if (this.users[this.$route.params.otherUserId]) {
        return this.users[this.$route.params.otherUserId];
      }
      return;
    },
  },
};
