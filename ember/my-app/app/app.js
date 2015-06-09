import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function(){
  this.route('about');
  this.route('credits');
});

Ember.MODEL_FACTORY_INJECTIONS = true;

loadInitializers(App, config.modulePrefix);

export default App;
