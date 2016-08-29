var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Photogram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'cmartin',
        avatar: 'https://s-media-cache-ak0.pinimg.com/236x/77/9f/b5/779fb5b2fc3f108222f15e1a2f96d0b1.jpg'
      },
      url: 'office.jpg',
      likes: 10,
      liked: true
    },
    {
      user: {
        username: 'cmartin',
        avatar: 'https://s-media-cache-ak0.pinimg.com/236x/77/9f/b5/779fb5b2fc3f108222f15e1a2f96d0b1.jpg'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true
    }
  ];

  empty(main).appendChild(template(pictures));
})