var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination', 'ui.ace','ui.router'])
.run(function($rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.userType = "";
    $rootScope.username = "";
    $rootScope.userId = "";
})