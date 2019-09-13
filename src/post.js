let post = {
  props: {
    post: {
      type: Object,
      required: false
    }
  },

  mixins: [Vue.config.mixins.posts],

  template: '<article class="card">' +
    '              <div class="grid">' +
    '                <figure class="effect-milo">' +
    '                  <img :src="post.image">' +
    '                  <figcaption>' +
    '                    <h2 v-html="imageTitle"></h2>' +
    '                    <p>Fav ♥</p>' +
    '                    <p>Download ⤓</p>' +
    '                    <a :href="post.link.url">{{ post.link.text }}</a>' +
    '                  </figcaption>' +
    '                </figure>' +
    '              </div>' +
    '          <div class="card-body">' +
    '            <p class="card-text">{{ post.content }}</p>' +
    '            <a :href="post.link.url" class="card-link">{{ post.link.text }}</a>'+
    '          </div>' +
    '        </article>'
};

Vue.component('post', post);
