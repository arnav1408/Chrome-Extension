# Chrome-Extension
This Chrome extension can be used to save the articles that someone likes on the internet. It requires Title and Body of the article to be pasted inside the given fields.
Url of the website will be automatically detected and copied in the url field. It provides option to save the articles and fetch the saved articles as well.
Fetching the saved articles will open up a new tab showing all the saved articles. On clicking upon any of the saved articles, a new tab pops up redirecting the person to
a new tab which will display the title, body and url of all the saved articles. On clicking upon any of the saved article, it will open a new tab redirecting the person 
to the saved article's url.

This is a very basic extension without much features and design. I have used basic html, css and javascript to develop this project. Additionally I have added Bootstrap
to some part. It could have been improved by adding React and using material-ui to add css.

For the backend part, initially I was setting up firebase server to save the data but later I dicovered that ExpressJs framework with mongodb is preferred over this. I
finally managed to set up NodeJs, ExpressJs and MongoDb as my backend and I'm storing all the data on the mongodb.

I created 2 APIs - POST and GET request. I tested them initially with the help of Postman and later I integrated the response received to the frontend.

There are a lot of modifications still possible and again its just a basic working sample to meet the requirements of the task now.
