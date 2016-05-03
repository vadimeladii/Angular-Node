/**
 * Created by veladii on 4/29/16.
 */

angular.module('angularApplication').controller('logout', controller);

function controller($http, $window, $scope, $location) {

    var vm = this;
    localStorage.removeItem('initToken');
    if (localStorage.getItem('initToken') == null) {
        $location.path("/login");
    }
}

