Vue.config.mixins = {
  posts: {
    props: {
      post: {
        type: Object,
        required: true
      }
    },

    computed: {
      imageTitle: function () {
        return this.post.title.split(' ').map(function (word, index) {
          return !index % 2 ? word : '<span>' + word + '</span>';
        }).join(' ');
      }
    }
  }
};