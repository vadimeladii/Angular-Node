/**
 * Created by veladii on 4/29/16.
 */

angular.module('angularApplication').controller('homeafter', controller);

function controller($http, $window, $scope, $location) {
    var vm = this;
    if (localStorage.getItem('initToken') == null) {
        $location.path("/login");
    }
}
