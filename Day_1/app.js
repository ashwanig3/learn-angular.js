// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
        {
            name: 'Samsung',
            model: 'J6+'
        },
        {
            name: 'Nokia',
            model: 'N series'
        },
        {
            name: 'iPhone',
            model: 'X1'
        },
        {
            name: 'Sony',
            model: 'Xperia Z'
        },
    ]
})


phonecatApp.controller('StudentListController', function StudentListController($scope) {
    $scope.students = [
        {
            name: 'Ashwani',
            age: '24'
        },
        {
            name: 'Namratha',
            age: '23'
        },
        {
            name: 'Manjeet',
            age: '25'
        },
        {
            name: 'Ajay',
            age: '24'
        },
    ]
})
