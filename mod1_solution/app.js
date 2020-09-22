(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter) {
        $scope.name = '';
            $scope.btn = function() {
                var str = $scope.name;
                var words = str.split(',');
                var wordsNotEmpty = words.filter(function(v) {
                    return v.trim() !== '';
                });
                if(wordsNotEmpty.length == 0) {
                    $scope.msg = 'Please enter data first';
                }else if (wordsNotEmpty.length > 3) {
                    $scope.msg = 'Too much!';
                }else if(wordsNotEmpty.length <= 3) {
                    $scope.msg = 'Enjoy!';
                }
            };
    }

})();
