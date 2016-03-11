angular.module('asyncdrink', [
  'ui.router',
  'asyncdrink.customerAuth',
  'asyncdrink.options',
  'asyncdrink.barAuth',
  'asyncdrink.barQueue'
])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('customerSignup', {
      url: "/signup",
      templateUrl: "/app/auth/patron/patronSignup.html",
      controller: 'customerController'
    })
    .state('options', {
      url: "/options",
      templateUrl: "/app/customer/options.html",
      controller: 'optionsController'
    })
    .state('barSignin', {
      url: '/barsignin',
      templateUrl: '/app/auth/bar/barSignin.html',
      controller: 'BarAuthController'
    })
    .state('barQueue', {
      url: '/barqueue',
      templateUrl: '/app/bartender/barQueue.html',
      controller: 'BarQueueController'
    })
    .state('customerLogin', {
      url: "/login",
      templateUrl: "/app/auth/patron/patronSignin.html",
      controller: 'customerController'
    });

    //Inject the AttachTokens factory into $http's interceceptors array so
    //all outgoing requests are stopped and AttachTokens runs on every
    //ajax call, similar to how middleware works on incoming server-side requests.
    $httpProvider.interceptors.push('AttachTokens');
    console.log('xxxx inside app config');
})

//Attach a jwt token to the request headers so the server can validate the request
//if no token exists, server won't be able to validate.
//Also allow for CORS in headers.
.factory('AttachTokens', function($window){
  console.log('xxxx inside AttachTokens factory');
  var attach = {
    request: function(object){
      console.log('xxxx inside request function in AttachTokens factory');
      var jwt = $window.localStorage.getItem('com.barhawk');
      if(jwt){
        object.headers['x-access-tokens'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
     }
  };

  return attach;
})

//Listener for changing routes, check user's token, if user does not have a valid token then redirect to customer login
.run(function($rootScope, customerFactory){

  console.log('xxxx inside app.js run');

  $rootScope.$on('$stateChangeStart', function(evt, next, current){

    console.log('xxxxxx inside changeRoute app.js run');

    if(next.$$route && next.$$route.authenticate && !customerFactory.isAuth()){

      $state.go('customerLogin');
    }
  });
  console.log($rootScope);
});
