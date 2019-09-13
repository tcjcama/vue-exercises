let featuredPost = {
  mixins: [Vue.config.mixins.posts],

  template: '<article class="card featured-post">' +
    '          <div class="row no-gutters">' +
    '            <div class="col-md-4">' +
    '              <div class="grid">' +
    '                <figure class="effect-chico">' +
    '                  <img :src="post.image">' +
    '                  <figcaption>' +
    '                    <h2 v-html="imageTitle"></h2>' +
    '                    <p>Lily likes to play with crayons and pencils</p>' +
    '                    <a :href="post.link.url">{{ post.link.text }}</a>' +
    '                  </figcaption>' +
    '                </figure>' +
    '              </div>' +
    '            </div>' +
    '            <div class="col-md-8">' +
    '              <div class="card-body">' +
    '                <p class="card-text">{{ post.content }}</p>' +
    '              </div>' +
    '            </div>' +
    '          </div>' +
    '        </article>'
};

Vue.component('featured_post', featuredPost);
