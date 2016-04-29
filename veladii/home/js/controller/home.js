
angular
    .module('angularApplication')
    .controller('home', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        // $http.get('phones/phones.json').success(function (data) {
        //     $scope.phones = data;
        // });
}]);


// angular
//     .module('angularApplication')
//     .controller('phoneCatPhoneById',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
//         $scope.phoneId = $routeParams.phoneId;
//         $http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
//             $scope.phone=data;
//             $scope.imageUrl=data.images[0];
//         });
//
//         $scope.setImage=function(image){
//             $scope.imageUrl=image;
//         }
//     }]);