/**
 * Created by veladii on 4/28/16.
 */

angular.module('angularApplication').controller('login', controller);

function controller($http, $window, $scope, $location) {

    var vm = this;
    if (localStorage.getItem('initToken') != null) {
        $location.path("/homeAfter");
    }
    vm.login = function () {
        console.log("vadim");
        $http.get("http://localhost:8080/api/v1/users/" + vm.name).success(function (data) {
            localStorage.setItem("idUser", data[0]._id);
        });
        localStorage.setItem('username', vm.name);
        $http.post("http://localhost:8080/api/v1/users/auth", {
            name: vm.name,
            password: vm.password
        }).success(function (data, status) {
            if (data.success) {
                localStorage.setItem('initToken', data.token);

                vm.users = data;
                $location.path("/homeAfter");
            } else {
                vm.err = "eroare la login";
                vm.name = "";
                vm.password = "";
                $location.path('/login');
            }
        });
    };
}