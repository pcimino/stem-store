'use strict';

angular.module('stemStore')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'title': 'Supplies',
        'url': '/supplies',
        'description': 'Everything from notebooks to rulers.',
        'logo': 'paper.png',
        'logo-alt': 'supplies-small.png'
      },
      {
        'title': 'Tech Stuff',
        'url': '/tech-stuff',
        'description': 'Ear buds, flashdrives & MacBook chargers.',
        'logo': 'electronics.png',
        'logo-alt': 'tech-stuff-small.png'
      },
      {
        'title': 'Seasonal Fun',
        'url': '/seasonal-fun',
        'description': 'Seasonal fun stuff that changes up.',
        'logo': 'fun.png',
        'logo-alt': 'fun-stuff-small.png'
      },
      {
        'title': 'Gotta Have',
        'url': '/gotta-have',
        'description': 'Everyday essentials & gum, of course.',
        'logo': 'misc.png',
        'logo-alt': 'gotta-have-small.png'
      }
    ];
  });
