angular
    .module('angularApplication')
    .config(['$routeProvider', '$locationProvider', function ($routeProvide) {
        $routeProvide
            .when('/home', {
                templateUrl: 'template/home.html',
                controller: 'home'
            })
            .when('/login', {
                templateUrl: 'template/login.html',
                controller: 'login'
            })
            .when('/register', {
                templateUrl: 'template/regist.html',
                controller: 'register'
            })
            .when('/date', {
                templateUrl: 'template/date.html',
                controller: 'date'
            });
            // .otherwise({
            //     redirectTo: '/'
            // });
    }]);