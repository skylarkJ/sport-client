import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    deleteFromFavorites (favorite) {
      this.get('store').findRecord('favorite', favorite.id, { backgroundReload: false }).then(favorite => {
        favorite.destroyRecord();
      })
    }
  }
});
