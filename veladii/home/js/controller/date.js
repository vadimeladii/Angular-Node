/**
 * Created by veladii on 4/28/16.
 */
angular.module('angularApplication').controller('date', controller);


function controller($http, $window, $scope, $location) {
    var vm = this;

    if (localStorage.getItem('initToken') == null) {
        $location.path("/login");
    }
    vm.name = localStorage.getItem('idUser');
    var idUser = localStorage.getItem('idUser');

    $http.get('http://localhost:8080/api/v1/tasks/' + idUser).success(function (data) {
        vm.tasks = data;
    });

    vm.deleteTask = function () {
        $http.delete('http://localhost:8080/api/v1/tasks', {"id": 78}).success(function (data) {
            $location.path('/date');
        });
    };

    vm.addTask = function () {
        idTask="";
        nameTask="";
        deadlineTask="";
        $http.post('http://localhost:8080/api/v1/tasks', {
            id: vm.idTask,
            name: vm.nameTask,
            data: vm.deadlineTask,
            idUser: idUser
        }).success(function (data) {
            $('#myModal').modal('hide');
            $http.get('http://localhost:8080/api/v1/tasks/' + idUser).success(function (data) {
                $scope.tasks = data;
            });
            $location.path('/date');
        })
    };

    vm.updateTask = function (index) {
        vm.idTask = vm.tasks[index].id;
        vm.nameTask = vm.tasks[index].name;
        vm.deadlineTask = vm.tasks[index].data;
        console.log(vm.idTask);
        // $('#myModal').modal('show');
    };
}