const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  computed: {
    sortedSubmissions: function () {
      return this.submissions.sort((a, b) => b.votes - a.votes);
    },
  },
};

Vue.createApp(upvoteApp).mount("#app");
