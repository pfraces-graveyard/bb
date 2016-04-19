angular.module('device', [])

.factory('onReady', function ($document, $rootScope) {
  'use strict';
  
  var onReady = function (eventListener) {
    $document.on('deviceready', function () {
      $rootScope.$apply(eventListener);
    });
  };
  
  return onReady;
})

.factory('on', function ($document, $rootScope) {
  'use strict';
  
  var on = function (eventName, eventListener) {
    $document.on('deviceready', function () {

      // <http://community.phonegap.com/nitobi/topics/pgb-and-andoid-deviceready-event-fires-but-menubutton-not-since-upgrade-to-cli-5-2-1#reply_16601427>
      if (eventName === 'menubutton') {
        navigator.app.overrideButton('menubutton', true);
      }
      
      $document.on(eventName, function () {
        $rootScope.$apply(eventListener);
      });
    });
  };
  
  return on;
});
