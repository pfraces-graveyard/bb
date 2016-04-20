angular.module('touch', [])

.factory('isTouchSupported', function ($document) {
  'use strict';

  var isTouchSupported = function () {
    return 'ontouchstart' in $document[0].documentElement;
  };

  return isTouchSupported;
})

.directive('touchStart', function ($parse, isTouchSupported) {
  'use strict';

  var link = function ($scope, $element, $attrs) {
    var expr = $parse($attrs.touchStart);
    var eventType = isTouchSupported() ? 'touchstart' : 'click';

    $element.on(eventType, function (event) {
      $scope.$apply(function () {
        expr($scope, { $event: event });
      });
    });
  };

  return {
    scope: true,
    link: link
  };
});
