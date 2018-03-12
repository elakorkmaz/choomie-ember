import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Room 1', 'Room 2', 'Room 3'];
  }
});
