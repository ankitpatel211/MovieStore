(function (app) {
    var ListController = function ($scope, MovieService) {
        MovieService
            .getAll()
            .success(function (data) {
                $scope.movieCollections = data;
            });

        $scope.delete = function (movie) {
            MovieService.delete(movie)
                .success(function () {
                    removeMovieId(movie.Id);
                });

        };

        $scope.create = function () {
            $scope.edit = {
                movie: {
                    Title: "",
                    ReleaseYear: new Date().getFullYear(),
                    Runtime: 0,
                }
            };
        };

        var removeMovieId = function (id) {
            for (var i = 0; i < $scope.movieCollections.length; i++) {
                if ($scope.movieCollections[i].Id == id) {
                    $scope.movieCollections.splice(i, 1);
                    break;
                }
            }
        };


    };
    //ListController.$inject = ["$scope", "$http"];
    app.controller("ListController", ListController);
}(angular.module("atTheMovies")));