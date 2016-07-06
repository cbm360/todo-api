// public/core.js
var myApp = angular.module('myApp', []);

function mainController($scope, $http) {
    $scope.formData = {};

    function getTodos() {
        $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }
    // when landing on the page, get all todos and show them
    getTodos();

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);

                // get refreshed list of todos
                getTodos();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // complete a todo by checking it
    $scope.completeTodo = function(action, id) {
        var completedBool = action.target.checked;
        console.log(action);
        $http({
            method: 'PATCH',
            dataType: 'json',
            url: '/api/todos/' + id,
            data: {
                completed: completedBool
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
        .success(function(data) {
            $scope.todos = data;
            console.log(data);

            // get refreshed list of todos
            getTodos();
        })
        .error(function(data) {
            console.log('Error' + data);
        });
    }

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todo/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);

                // get refreshed list of todos
                getTodos();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}