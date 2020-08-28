"use strict";

var app = require('../app');

var mockDataService = function() {
  this.getPost = function(title, subtitle) {
    return {
      "id": Math.random(),
      "title": title,
      "subtitle": subtitle,
      "content": "This post is came from the service",
      "messages": [
        {"author": "Sir. Neil", "message": "Thanks for this amazing post " + title},
        {"author": "Sir. Neil", "message": "Thanks for this amazing post"}
      ]
    }
  }
};

app.service("mockDataService", mockDataService);

module.exports = app;
