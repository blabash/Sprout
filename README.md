# Sprout
[Live site](https://sprout-blogs.herokuapp.com/#/)

Sprout is a blogging site for those willing to branch out.  Inspired by tumblr, users can create different types of blogs and share them at the click of a button.  Sprout utilizes a Rails/PostgreSQL backend with React.js and Redux on the frontend.  

The project was conceived and constructed within ten days, with added functionality to come.

## Features
* BCrypt secured frontend to backend user authentication
* Users can create different styles of blog posts and attach images/gifs
* Users can like each others posts

### Quick Swap Tray

Need to share your thoughts on agriculutural techniques of colonial America? Or just upload a cat gif? The quick swap tray allows you to select the right post format for the job.  

![alt text](https://github.com/blabash/Sprout/blob/master/app/assets/images/post%20form%20swap%20bar.png "Quick Swap Post Forms")

This involved some simple case logic that that will swap React components each containing different post forms:
```retrievePostForm() {

        switch (this.state.postType) {
            case "text":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "photo":
                return <PhotoPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "quote":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
```
## Design and Planning
Replicating the core functionality of tumblr was the main goal with this project.  Post CRUD was the highest priority after user authentication.  A 10-day budget for the project meant follows and comments had to ultimately be cut.  However, backend functionality for these features is mostly complete and are next in the pipeline.

## Technologies
For the small-scale nature of this project, along with the short timeframe, Rails was decided upon due to its simple setup and RESTful implementation.

React was chosen for the interactivity and responsiveness required to emulate tumblr, along with Redux to keep the frontend in-sync with the database.

AWS and Heroku were used for external image and site hosting respectively.

### Addition Resources
* [API Endpoints](https://github.com/blabash/Sprout/wiki/Backend-Routes)
* [Database Schema](https://github.com/blabash/Sprout/wiki/Database-Schema)
* [State Shape Design](https://github.com/blabash/Sprout/wiki/State-Shape)

## Future Features
* Follows
* Reblogs
* Comments
* User profile editing
