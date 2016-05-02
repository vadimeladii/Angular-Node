/**
 * Created by veladii on 4/28/16.
 */
angular
    .module('angularApplication')
    .controller('register', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.regist = function () {

            if ($scope.password == $scope.confirmPassword) {
                $http.post('http://localhost:8080/api/v1/users', {
                    username: $scope.username,
                    password: $scope.password
                }).success(function (data, status) {
                    $location.path("/home");
                });
            } else {
                $scope.message = "Password error";
            }
        }
    }]);