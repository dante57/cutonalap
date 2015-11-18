// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

   .state('app.cafeteria', {
    url: '/cafeteria',
    views: {
      'menuContent': {
        templateUrl: 'templates/cafeteria.html'
      }
    }
  })

   //codigo malito

  .state('app.primeranoticia', {
    url: '/primeranoticia',
    views: {
      'menuContent': {
        templateUrl: 'templates/primeranoticia.html'
      }
    }
  })

.state('app.segundanoticia', {
    url: '/segundanoticia',
    views: {
      'menuContent': {
        templateUrl: 'templates/segundanoticia.html'
      }
    }
  })

.state('app.terceranoticia', {
    url: '/terceranoticia',
    views: {
      'menuContent': {
        templateUrl: 'templates/terceranoticia.html'
      }
    }
  })

   //fin codigo malito

   //codigo cesar
   .state('app.Algebra', {
   url: '/Algebra',
    views: {
      'menuContent': {
        templateUrl: 'templates/Algebra.html'
      }
    }
  })

.state('app.Sistemas', {
    url: '/Sistemas',
    views: {
      'menuContent': {
        templateUrl: 'templates/Sistemas.html'
      }
    }
   })
   //

.state('app.menusemanal', {
    url: '/menusemanal',
    views: {
      'menuContent': {
        templateUrl: 'templates/menusemanal.html'
      }
    }
  })
   //codigo pablo
.state('app.ubicacion', {
    url: '/ubicacion',
    views: {
      'menuContent': {
        templateUrl: 'templates/ubicacion.html'
      }
    }
  })


    .state('app.contacto', {
    url: '/contacto',
    views: {
      'menuContent': {
        templateUrl: 'templates/contacto.html'
      }
    }
  })

   //fin codigo pabo

   .state('app.biblioteca', {
    url: '/biblioteca',
    views: {
      'menuContent': {
        templateUrl: 'templates/biblioteca.html'
      }
    }
  })

.state('app.Programacion', {
    url: '/Programacion',
    views: {
      'menuContent': {
        templateUrl: 'templates/Programacion.html'
      }
    }
  })


.state('app.noticias', {
    url: '/noticias',
    views: {
      'menuContent': {
        templateUrl: 'templates/noticias.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.config', {
      url: '/config',
      views: {
        'menuContent': {
          templateUrl: 'templates/config.html'
        }
      }
    })



    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
