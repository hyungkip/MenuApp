angular.module('menuApp', [
  'ui.router',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('restaurantList', {
    url: '/restaurantList',
    templateUrl: '/restaurantList/restaurantList.html',
    authentication: true,
    signedin: true
  })
  .state('menuView', {
    url: '/menuView',
    templateUrl: '/menuView/menuView.html',
    params: {
      'menuData': null
    },
    authentication: true,
    signedin: true
  })
  .state('profileView', {
    url: '/profileView',
    templateUrl: '/profile/profileView.html',
    authentication: true,
    signedin: true
  })
  .state('signIn', {
    url: '/signIn',
    templateUrl: '/userAuth/signIn.html',
    authentication: false,
    signedin: false
  })
  .state('signUp', {
    url: '/signUp',
    templateUrl: '/userAuth/signUp.html',
    authentication: false,
    signedin: false
  })
  .state('preferenceForm', {
    url: '/preferenceForm',
    templateUrl: '/preferenceForm/preferenceForm.html',
    controller: 'preferenceFormController',
    authentication: true,
    signedin: true
  });

  // .state('form', {
  //   url: '/test',
  //   onEnter: ['$mdDialog', function($mdDialog, ev) {
  //     $mdDialog.show({
  //       controller: 'preferenceFormController',
  //       templateUrl: './preferenceForm/test.html',
  //       targetEvent: ev,
  //       clickOutsideToClose:true
  //     })
  //     .result.finally(function() {
  //       $state.go('^');
  //     });
  //   }]
  // })
  $urlRouterProvider.otherwise('/signIn');
})


.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('red')
  .primaryPalette('red');
  $mdThemingProvider.theme('orange')
  .primaryPalette('orange');
  $mdThemingProvider.theme('yellow')
  .primaryPalette('yellow');
  $mdThemingProvider.theme('green')
  .primaryPalette('green');
  $mdThemingProvider.theme('indigo')
  .primaryPalette('indigo');
  $mdThemingProvider.theme('deep-purple')
  .primaryPalette('deep-purple');
  $mdThemingProvider.theme('light-green')
  .primaryPalette('light-green');
});
