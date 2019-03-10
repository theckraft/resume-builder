import Component from '@ember/component';

export default Component.extend({
  classNames: ['ui', 'centered', 'card', 'margin: auto;'],
  actions: {
    openModal: function() {
      this.$('.ui.modal').modal('show');
    }
  }
});
