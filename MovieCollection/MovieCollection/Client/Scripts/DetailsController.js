(function (app) {
    var DetailsController = function ($scope,MovieService,$routeParams) {
        var id = $routeParams.id;
        MovieService
            .getById(id)
            .success(function (data) {
                $scope.m = data;
            });
        $scope.edit = function () {
            $scope.edit.movie = angular.copy($scope.m);
        };
    };
    app.controller("DetailsController", DetailsController);
}(angular.module("atTheMovies")));