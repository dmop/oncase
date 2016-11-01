app.controller('AppCtrl', function($scope, $mdDialog) {

    $scope.status = '  ';
    $scope.customFullscreen = false;


    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
                controller: "AppCtrl",
                templateUrl: 'view/page1.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };


    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };

});
