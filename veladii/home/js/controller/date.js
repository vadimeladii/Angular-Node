/**
 * Created by veladii on 4/28/16.
 */
angular
    .module('angularApplication')
    .controller('date', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        if (localStorage.getItem('initToken') == null) {
            $location.path("/login");
        }

        $http.get('http://localhost:8080/api/tasks').success(function (data) {
            $scope.tasks = data;
        });

        $scope.deleteTask = function () {
            $http.delete('http://localhost:8080/api/tasks', {"id": 78}).success(function (data) {
                $location.path('/date');
            });
        };

        $scope.addTask = function () {
            $http.post('http://localhost:8080/api/tasks', {
                id: $scope.idTask,
                name: $scope.nameTask,
                data: $scope.deadlineTask
            }).success(function (data) {
                $('#myModal').modal('hide');
                $http.get('http://localhost:8080/api/tasks').success(function (data) {
                    $scope.tasks = data;
                });
                $location.path('/date');
            })
        }
    }]);