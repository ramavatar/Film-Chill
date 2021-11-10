## Prerequisites
- Clone the film&chill repository and cd into it
- Install dependencies 
  command: "npm install"
- Install material UI
  command: "npm install @mui/material @emotion/react @emotion/styled"
- Run the json server on port:3001
  command: "json-server --watch db.json --port 3001"
- Run the code on chrome which shall run on port:3000
 command: "npm start"
- Run Cypress test cases 
  command: "npm run cypress"

## Know your json server
On running json server, following apis would be available for your use -
To Register user - POST - http://localhost:3001/register - expecting data - { userName , email , password , confirmPassword}
To Login user - POST - http://localhost:3001/register - expecting data - { email , password }
If user Forgot Password - POST - http://localhost:3001/register - expecting data - { userName , existingEmail , Newpassword , confirmNewPassword}


## The Movies API to be used as data source
- To get Best Drama Movies we use the following end point.[ with_genres]
(https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=<<api_key>>&page=<<page>>)
- To get Hioghest Rated Movies we use the following end point.[vote_average endpoint]
(https://api.themoviedb.org/3/discover/movie?&sort_by=vote_average.desc&api_key=$<<api_key>>&page=<<page>>)
- To get Popular Movies we use the following end point.[popularity endpoint]
(https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=$<<api_key>>&page=<<page>>)
- To get trending Movies use the following endpoint. [Trending endpoint]
(https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&page=<<page>>)
- To search for any Movies based on serach text . [search endpoint]
(https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=<<search>>&page=<<page>>)
- To get Details of any Movies . [ details endpoint]
(https://api.themoviedb.org/3/movie/${id}?api_key=<<api_key>>&language=en-US)


## To register for an API key, follow these steps:
- You need to signup to [TMDB] (https://api.themoviedb.org/).
- After registration, API key is generated for you.