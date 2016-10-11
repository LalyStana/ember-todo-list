import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{

    addTodo: function(){
      var date = this.get('date');
      var title = this.get('title');
      var body = this.get('body');

      //Create todo
      var newTodo = this.store.createRecord('todo', {
        title: title,
        body: body,
        date: new Date(date)
      });

      //Save to firebase
      newTodo.save();

      //Clear frm
      this.setProperties({
        title: '',
        body: '',
        date: ''
      });
    }

  }

});
