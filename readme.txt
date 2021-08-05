08/04/2021
Malana 3 - Front end test.
==========================================================================
Ramesh Ganesan - ganesan.rameshkumar@gmail.com/ rameshinform@yahoo.com

GITHUB Solution url- https://github.com/rameshinform/sf-blog

Hosted here - https://agitated-kowalevski-103098.netlify.app/#/

==========================================================================

Browser Support - Chrome/Firefox/Edge/IE 11/safari

Libraries Used:
ReactJs libraries
axios - Make XMLHttpRequests from the browser to connect to REST API.
materialUI - design system with Material design
moment - Parse, validate, manipulate, and display dates and times in JavaScript.
react-router-dom - Handle basic routing as users click on different links. Link is renderd as <a>
sweetalert2 - Responsive pop-up boxes in JavaScript.
jest - To test the application and mock functions to test axios API calls.


Solution Files:
The solution is organized in following structure - 
    -app
        - app.js - Holds routes for initial app start.
    -components 
        - index.js - export all components.
        - post-item.js - individual item displayed in right pane.
        - post-past-item.js - The left pane with history below the Create new post.
    -helpers
        - index.js - export all helper functions
        - styles.js - Created style helper functions that could be used across the app.
    -layouts
        - app-bar.js - Header layout
        - blog-layot.js - Body layout to display all blog entries.
        - index.js - export all layouts.
    -routes
        - index.js - export all routes 
        - paths.js - Link components and paths.
        - route-utils.js - helper methods for routing.
    -services
        - api-service.js - All API methods.
        - api-service.test.js - Mocks using jest.
        - index.js - export all services.
    -views
        - index.js - export all views.
        - post-edit.view.js - edit view
        - post-list.view.js - list all posts. Uses post-item component.
        - post-new.view.js - create new post.

TODO:
    Implement error handling, logging and display a fallback UI.
    Needed to write more tests. 

Notes: 
 Unable to make the code run in hackerrank. 
 To run locally - 
    1. Pull the code from hackerrank/github (https://github.com/rameshinform/sf-blog)
    2. npm install
    3. npm start






