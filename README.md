## Project Start
Before starting project,
You need a .env file with this variable
`NEXT_PUBLIC_API_KEY`
and a working API key in order to fetch data.

Install dependencies before starting project by running
```
npm i
```

To start project run
```
npm start dev
```

You can view project in [http://localhost:3000/](http://localhost:3000/)

## Project Setup
This project is setup with React, Nextjs, using Redux with Redux toolkit as state management. I have a basic scafold to start projects in my github, you can check it out if you'd like.
[react-redux-next-app](https://github.com/nbuendia/react-redux-next-app)

A little overview of my file structure
- components
- - Any custom reusable comonents live here.
- hooks
- - Global reusable hooks are usually kept here.
- sections
- - The main parts of the app will be sectioned off here into bigger chunks.
- services
- - This is where the api calls are.
- store
- - This is the redux store setup. All api and state info needs to be added here for redux to work properly.

## Sorting & filtering
You can update the code in file
`Main.tsx`
Line 10, to add sorting and a genre filter.
You have the option to add all available sorting options and for genres you would have to input a number (as a string), for example
```
const { movies } = useFetchMovies({sort_by: "popularity.desc", with_genres: "27"});
```

The api fetch does not need filter or sort option, you can add `sort_by` or `with_genres`, or both as a key, value pair.
