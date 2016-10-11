import Ember from 'ember';

export default Ember.Controller.extend({

  sortedProperties:['date:asc'],
  sortedTodos: Ember.computed.sort('model', 'sortedProperties')

});
