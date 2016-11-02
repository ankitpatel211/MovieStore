(function (appNotify) {
    var GrowlController = function ($scope, growl) {
        debugger;
        $scope.showNotification = function (type) {
            //var config = {};
            switch (type) {
                case "save":
                    break;
                case "update":
                    growl.info("Data updated successfully");
                    break;
                case "delete":
                    growl.danger("Data deleted successfully");
                    break;
                default:
                    growl.info("Nothing has changed");
            }
        }
    }
    appNotify.controller("GrowlController", GrowlController);
}(angular.module("atTheMovieNotify")));