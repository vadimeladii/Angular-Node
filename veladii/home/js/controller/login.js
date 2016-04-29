/**
 * Created by veladii on 4/28/16.
 */

angular
    .module('angularApplication')
    .controller('login', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.login = function () {
            $http.post("http://localhost:8080/api/users/auth", {
                name: $scope.name,
                password: $scope.password
            }).success(function (data, status) {
                if (data.success) {
                    $location.path("/home");
                    $scope.access = 0;
                } else {
                    $scope.err = "eroare la login";
                    $scope.name = "";
                    $scope.password = "";
                    $scope.access = 0;
                    $location.path('/login');
                }
            });
        };
    }]);