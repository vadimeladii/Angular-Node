/**
 * Created by veladii on 4/29/16.
 */
angular
    .module('angularApplication')
    .controller('logout', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        localStorage.removeItem('initToken');
        if (localStorage.getItem('initToken') == null) {
            $location.path("/login");
        }
    }]);

