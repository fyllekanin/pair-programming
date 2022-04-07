# React

Fix the bugs and add the features missing which are present in app

## Technologies

* React (https://reactjs.org/)
* React Router (https://reactrouter.com/)

## Task

The task is to fix the bugs which exist in the assignment project and also add the missing features that are present in the app project.

The solutions do not have to match the solutions from the app, the app is there for the interviewer to have a reference on how it can be solved but any solution
is applicable as long as it fixes the issue.

The person getting interviewed is allowed to start both of the projects, this is to compare them on what is working and what features might be missing.
But looking at the code in the app project is not allowed as it will give them answers to some of the issues.

The app project runs on port "3001" and the assignment project runs on port "3000". The ports can be changed by editing the .env file in respective project.

### Bugs

* When completing a task (done button) it does not update the view, the array reference is identical which does not trigger a render
* Adding a task does not add the task to the list, state is not updated
* You are able to add multiple tasks with the name same and the error message is not shown
* Using "enter" key to add a task does not work
* You are able to add tasks with empty name

### Features missing

* When a task is added, the task is not faded in
* Lazy loading of the settings page, from start it loads even if you never go to the page
* Unique error message when adding an empty task
