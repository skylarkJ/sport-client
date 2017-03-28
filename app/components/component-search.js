import Ember from 'ember';
import ENV from 'sport-highlights/config/environment';

export default Ember.Component.extend({
  search: '',
  store: Ember.inject.service(),
  actions: {
    doSearch () {
      Ember.$.ajax({
        url: ENV.apiHost + '/highlights?query=' + this.get('search')
      }).then(data => {
        this.set('search', '');
        this.set('highlights', data);
      });
    }
  }
});
