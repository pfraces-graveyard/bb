angular.module('notifications', ['device'])

.factory('media', function ($window) {
  'use strict';

  var media = function (path) {
    return new $window.Media(path);
  };

  return media;
})

.factory('beep', function (onReady, media) {
  'use strict';
  
  var snd = null;
  
  onReady(function () {
    snd = media('/android_asset/www/sounds/beep.mp3');
  });
    
  var beep = function () {
    if (!snd) { return; }
    snd.play();
  };
  
  return beep;
})

.factory('vibrate', function () {
  'use strict';
  
  var vibrate = function () {
    navigator.vibrate(50);
  };
  
  return vibrate;
});
