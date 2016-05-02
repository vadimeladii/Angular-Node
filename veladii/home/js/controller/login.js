/**
 * Created by veladii on 4/28/16.
 */

angular
    .module('angularApplication')
    .controller('login', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.valueToken = localStorage.getItem('initToken');
        $scope.login = function () {
            $http.get("http://localhost:8080/api/v1/users/"+$scope.name).success(function (data) {
                localStorage.setItem("idUser",data[0]._id);
            });
            localStorage.setItem('username', $scope.name);
            $http.post("http://localhost:8080/api/v1/users/auth", {
                name: $scope.name,
                password: $scope.password
            }).success(function (data, status) {
                if (data.success) {
                    localStorage.setItem('initToken', data.token);

                    $scope.users = data;
                    $location.path("/homeAfter");
                } else {
                    $scope.err = "eroare la login";
                    $scope.name = "";
                    $scope.password = "";
                    $location.path('/login');
                }
            });
        };
    }]);