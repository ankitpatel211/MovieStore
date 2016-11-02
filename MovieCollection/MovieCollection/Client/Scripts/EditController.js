(function (app) {
    var EditController = function ($scope, MovieService) {
        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.movie;
        };
        $scope.cancel = function () {
            $scope.edit.movie = null;
        };

        $scope.save = function () {
            if ($scope.edit.movie.Id) {
                updateMovie();
            } else {
                createMovie();
            }
        };

        var updateMovie = function () {
            MovieService.update($scope.edit.movie)
                .success(function () {
                    angular.extend($scope.m, $scope.edit.movie);
                    $scope.edit.movie = null;
                });
        };

        var createMovie = function () {
            MovieService.create($scope.edit.movie)
                .success(function (movie) {
                    $scope.movieCollections.push(movie);
                    $scope.edit.movie = null;
                    $scope.showNotification('save');
                });
        };
    }
    app.controller("EditController", EditController);
}(angular.module("atTheMovies")));