'use strict';

angular.module('stemStore')
  .controller('MainCtrl', function ($scope) {
    $scope.logo='assets/images/stem-store-logo';
    $scope.awesomeThings = [
      {
        'title': 'Supplies',
        'url': '/supplies',
        'description': 'Everything from notebooks to rulers.',
        'logo': 'assets/images/main/paper',
        'logo-alt': 'supplies-small.png'
      },
      {
        'title': 'Tech Stuff',
        'url': '/tech-stuff',
        'description': 'Ear buds, flashdrives & MacBook chargers.',
        'logo': 'assets/images/main/electronics',
        'logo-alt': 'tech-stuff-small.png'
      },
      {
        'title': 'Seasonal Fun',
        'url': '/seasonal-fun',
        'description': 'Seasonal fun stuff that changes up.',
        'logo': 'assets/images/main/fun',
        'logo-alt': 'fun-stuff-small.png'
      },
      {
        'title': 'Gotta Have',
        'url': '/gotta-have',
        'description': 'Everyday essentials & gum, of course.',
        'logo': 'assets/images/main/misc',
        'logo-alt': 'gotta-have-small.png'
      }
    ];
  });
