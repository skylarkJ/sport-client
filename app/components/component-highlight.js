import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  auth: Ember.inject.service(),
  isHidden: false,
  flashMessages: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    addToFavorites (highlight) {
      this.get('store').createRecord('favorite', {
        title: highlight.snippet.data.title,
        date: highlight.snippet.data.publishedAt,
        video_id: highlight.id,
        image: highlight.snippet.data.thumbnails.default.url
      })
      .save()
      .then(() => {
        this.set('isHidden', true);
        this.get('flashMessages').success('Added Highlight to Favorites!');
      })
      .catch(() => {
        this.get('flashMessages').danger('Failed To Add To Favorites. Please Try again!');
      });
    },
  }
});
