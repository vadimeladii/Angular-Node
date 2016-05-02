/**
 * Created by veladii on 4/28/16.
 */
angular
    .module('angularApplication')
    .controller('date', ['$scope', '$http', '$location', function ($scope, $http, $location) {


        if (localStorage.getItem('initToken') == null) {
            $location.path("/login");
        }
        $scope.name=localStorage.getItem('idUser');
        var idUser=localStorage.getItem('idUser');

        $http.get('http://localhost:8080/api/v1/tasks/'+idUser).success(function (data) {
            $scope.tasks = data;
        });

        $scope.deleteTask = function () {
            $http.delete('http://localhost:8080/api/v1/tasks', {"id": 78}).success(function (data) {
                $location.path('/date');
            });
        };

        $scope.addTask = function () {
            $http.post('http://localhost:8080/api/v1/tasks', {
                id: $scope.idTask,
                name: $scope.nameTask,
                data: $scope.deadlineTask,
                idUser: idUser
            }).success(function (data) {
                $('#myModal').modal('hide');
                $http.get('http://localhost:8080/api/v1/tasks/'+idUser).success(function (data) {
                    $scope.tasks = data;
                });
                $location.path('/date');
            })
        }
    }]);