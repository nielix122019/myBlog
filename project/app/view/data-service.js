"use strict";

var app = require('../app');

var dataService = function(mockDataService) {
  this.data = [];
  this.data.push(mockDataService.getPost("The basic of AngularJS Creation", "First you must have to know the basic HTML CODE"));
  this.data.push(mockDataService.getPost("How to use NPM in NodeJS", "First you must have to know the basic HTML CODE"));
  this.data.push(mockDataService.getPost("Resposive design and logo", "First you must have to know the basic HTML CODE"));

  this.newPost = {
      id: Math.random(),
      title: undefined,
      subtitle: undefined,
      content: undefined,
      message: []
  };

  this.basicInfo = {
    name: "Neil",
    introduction: "Hello, Everyone I am a Freelance Web Developer, if you want something to fixed or build your own website just leave a message or private message me. \n Let me know your idea and let's make your imagination into reality, Also we create Mobile Application, Website, Desktop Application."
  };

  this.adminInfo = {
    country: "philippines",
    locations: "Cagayan De Oro City",
    work: "Home",
    birthday: new Date('1993-11-11T11:00:00.000Z'),
    phone: "+63-9166198313",
    email: "nielix122019@gmail.com"
  };
};

var proto = dataService.prototype;
//New post
proto.getNewPostData = function(){
    return this.newPost;
};

//save post
proto.createPost = function(data){
  this.data.unshift( angular.copy(data) );
};
// Title & Subtitle
proto.getPostData = function() {
  return this.data;
};

// Update Data from Basic Info
proto.saveBasicInfo = function(data){
  this.basicInfo = data;
};

// Basic Info
proto.getBasicInfoData = function() {
  return this.basicInfo;
};

//Edit Admin Information
proto.saveAdminInfo = function(data){
  this.adminInfo = data;
};

// Admin Information
proto.getAdminInformation = function() {
  return this.adminInfo;
};

app.service('dataService', ['mockDataService', dataService]);
