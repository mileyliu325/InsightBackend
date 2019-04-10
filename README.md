# APIs

## User

- GET
/user/:id

- POST
/user

    Request Body:<br/>
    ```json
      {
        name: String,
        email: String ,
        password: String,
        role: String,
        wage: String,
        phone: String,
        birthday: Date,
        shifts:[
            {
                startTime: Date,
                endTime: Date,
                taskId: String,
                area: String
              },
              ....
        ]
      }
    ```
- PUT
/user/:id

    Request Body:<br/>
    ```json
    {
        name: String,
        email: String,
        role: String, 
        wage: String,
        phone: String,
        birthday:Date,
        shifts:[
            {
                startTime: Date,
                endTime: Date,
                taskId: String,
                area: String
            },
            ....
        ]
    }
    ```

- DELETE
/user/:id

## Bulk Users
- GET
/bulk/users/:ids<br/>

- GET
/bulk/users

## Task

- GET
/task/:id

- POST
/task
    ```json
    request body {
        title: String,
        postPerson: String,
        assignTo:[],
        dueDate: Date
    }
    ```

- PUT
/task/:id
    ```json
    request body {
        title:String,
        postPerson:String,
        assignTo:[]
    }
    ```
- DELETE
/task/:id

## Bulk Tasks
- GET
/bulk/tasks/:ids

