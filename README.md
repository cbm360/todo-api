# NodeJS Todo-API with AngularJS Front End
This project is an opportunity to gain experience with NodeJS, ExpressJS and AngularJS.

## API
- Development built on a sqlite3 database
- Production hosted on Heroku using postgresql database

##### GET `/api/todos`
- GET All `/api/todos`
- GET Completed/Incomplete `/api/todos?complete=true/false`
- GET by ID `/api/todos/:id`
 
##### POST `/api/todos`
- Data {
    descripiton: "todo descripiton",
    completed: true/false,
    CreatedAt: date will automatically be timestamped 
  }

##### PATCH `/api/todos/:id`
- DataType: application/json
- Data {
    descripiton: "todo descripiton",
    completed: true/false,
    UpdatedAt: date will automatically be timestamped
  }

##### DELETE `/api/todos/:id`

## Resources
[Udemy Learn AngularJS](https://www.udemy.com/learn-angularjs/learn/v4/overview)

[Live example](http://todo-api-360paradigm.herokuapp.com/)

[GitHub Repo](https://github.com/cbm360/todo-api/)

##License
The content is licensed under the [MIT license](https://opensource.org/licenses/mit-license.php)

