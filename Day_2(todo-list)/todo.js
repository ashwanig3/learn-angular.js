//create an angular module
var todoApp = angular.module('todoApp', []);

//Define the controller for todoApp
todoApp.controller('todo', function($scope){
    $scope.todoList = []
    $scope.isTodo = false;
    $scope.addTodo = () => {
        $scope.todoList.push({todo: $scope.todoInput, done: false});
        $scope.todoInput = '';
    }

    $scope.deleteTodo = (value) => {
     $scope.todoList.splice(value, 1);
    }

})