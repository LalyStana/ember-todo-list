import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    editTodo: function(id){

      var date = this.get('model.date');
      var title = this.get('model.title');
      var body = this.get('model.body');

      this.store.findRecord('todo', id).then((todo)=>{

        todo.set('title', title);
        todo.set('body', body);
        todo.set('date', new Date(date));

        //Save to firebase
        todo.save();

        this.transitionToRoute('todos');

      });

    },

    deleteTodo: function(id){

      this.store.findRecord('todo', id).then((todo)=>{

        todo.deleteRecord();

        //Save to firebase
        todo.save();

        this.transitionToRoute('todos');

      });

    }

  }

});
