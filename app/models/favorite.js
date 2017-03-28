import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  video_id: DS.attr('string'),
  image: DS.attr('string')
});
