
angular
    .module('angularApplication')
    .controller('home', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        if(localStorage.getItem('initToken')==null){
            $location.path("/login");
        }
}]);
