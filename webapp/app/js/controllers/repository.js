"use strict";

treeherder.controller('RepositoryPanelCtrl',
    function RepositoryPanelCtrl($scope, $rootScope, $routeParams, $location, $log,
                            localStorageService, ThRepositoryModel, thSocket) {

        $scope.saveWatchedRepos = function() {
            ThRepositoryModel.saveWatchedRepos();
        };

        for (var repo in $scope.watchedRepos) {
            if($scope.watchedRepos[repo]){
                thSocket.emit('subscribe', repo+".job_failure");
                $log.debug("subscribing to "+repo+".job_failure");
            }
        }

    }
);