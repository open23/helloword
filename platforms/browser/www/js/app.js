/**
 * Created by fengoupeng on 2016/11/17 0017.
 */
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
    $scope.tasks = [
        { title: '菜鸟教程' },
        { title: 'www.runoob.com' },
        { title: '菜鸟教程' },
        { title: 'www.runoob.com' }
    ];
});
