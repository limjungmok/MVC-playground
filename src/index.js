import $ from 'jquery';
import View from './js/view/View';
import Controller from './js/controller/Controller';
import Model from './js/model/Model';

(function(window) {
  'use strict';
  function App() {
    console.log('app created');
    this.model = new Model('app');
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
  }
  
  var app = new App();
  console.log(app);
})(this);
