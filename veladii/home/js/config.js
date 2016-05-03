angular
    .module('angularApplication')
    .config(['$routeProvider', '$locationProvider', function ($routeProvide) {
        $routeProvide
            .when('/home', {
                templateUrl: 'template/home.html',
                controller: 'home',
                controllerAs: "vm"
            })
            .when('/login', {
                templateUrl: 'template/login.html',
                controller: 'login',
                controllerAs: "vm"
            })
            .when('/register', {
                templateUrl: 'template/regist.html',
                controller: 'register',
                controllerAs: "vm"
            })
            .when('/date', {
                templateUrl: 'template/date.html',
                controller: 'date',
                controllerAs: "vm"
            })
            .when('/homeAfter', {
                templateUrl: 'template/homeAfterRegistration.html',
                controller: 'homeafter',
                controllerAs: "vm"
            })
            .when('/logout', {
                templateUrl: 'template/logout.html',
                controller: 'logout',
                controllerAs: "vm"
            });
        // .otherwise({
        //     redirectTo: '/'
        // });
    }]);
