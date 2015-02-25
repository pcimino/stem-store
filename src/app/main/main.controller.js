'use strict';

angular.module('stemStore')
  .controller('MainCtrl', function ($scope) {
    var dir = 'assets/images/main/';
    $scope.logo='assets/images/stem-store-logo';
    $scope.awesomeThings = [
      {
        'title': 'Supplies',
        'url': '/supplies',
        'description': 'Everything from notebooks to rulers.',
        'logo': dir + 'paper',
        'logo-alt': 'supplies-small.png'
      },
      {
        'title': 'Tech Stuff',
        'url': '/tech-stuff',
        'description': 'Ear buds, flashdrives & MacBook chargers.',
        'logo': dir + 'electronics',
        'logo-alt': 'tech-stuff-small.png'
      },
      {
        'title': 'Seasonal Fun',
        'url': '/seasonal-fun',
        'description': 'Seasonal fun stuff that changes up.',
        'logo': dir + 'fun',
        'logo-alt': 'fun-stuff-small.png'
      },
      {
        'title': 'Gotta Have',
        'url': '/gotta-have',
        'description': 'Everyday essentials & gum, of course.',
        'logo': dir + 'misc',
        'logo-alt': 'gotta-have-small.png'
      }
    ];
  });
