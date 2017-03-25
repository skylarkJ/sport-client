import Ember from 'ember';

export default Ember.Component.extend({
  search: '',
  actions: {
    doSearch () {
      this.set('search', '');
      Ember.$.ajax({
        url: 'http://localhost:4741/search?query=' + this.get('search')

      }).then(data => {
        this.set('highlights', data);
      });
    }
  }
});
