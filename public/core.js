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

    // Toggle span to input and post update to todos on blur
    $scope.toggleInput = function(action, id) {
        var elem = $(action.target);
        var $input = $("<input>", {
                val: elem.text(),
                type: "text"
            });

        elem.replaceWith($input);
        $input.on("blur", function() {
            $scope.updateTodo(id, $input.val());
        });
        $input.select();
    };

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

    // update a todo by clicking and editing text
    $scope.updateTodo = function(id, description) {
        $http({
            method: 'PATCH',
            dataType: 'json',
            url: '/api/todos/' + id,
            data: {
                description: description
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