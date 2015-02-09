'use strict';

angular.module('stemStore')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'title': 'Paper, Folders & Binders',
        'url': '/paper',
        'description': 'Paper, different kinds',
        'logo': 'paper.png'
      },
      {
        'title': 'Writing Tools',
        'url': '/writing',
        'description': 'What you need to write on it, staple it, glue it or highlight it.',
        'logo': 'writing.png'
      },
      {
        'title': 'Electronics',
        'url': '/electronics',
        'description': 'For the tech savvy student.',
        'logo': 'electronics.png'
      },
      {
        'title': 'Miscellaneous Supplies',
        'url': '/misc',
        'description': 'You\'ll never know what comes in handy.',
        'logo': 'misc.png'
      }
    ];
  });
