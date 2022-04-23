# React-meetups
### Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Quick start](#quick-start)


### General info
 - Summarize:
    - To achieve this goal I have used a context with a reducer/provider in order to handle the state of the application easily. I have created a custom hook that allows me to use the context in my components in a neat way. 
    - I have created some extra components to be able to reuse and let the tests be easier to do. Furthermore I have created a function to create a valid id when creating a new meetup.
    - Through useRef I control the header component in order to make it visible on scrolling up and hidden in scrolling down.
    - Through Yup library I control the validation of the form.
    - With react-tostify library I control the notifications.
    - To achieve a better UX I have created a ScrollToTop component to put the page on top when the url changes.
    - I have used the react-router-dom library to create a navigation bar with links to the different pages.
    - I have changed and added some css in order to make it more user friendly on small devices with media queries.
    
 - Tasks performed:
   - Adding functionality to add and remove fav meetups
   - added routing to improve SEO
   - added behaviour on header hiding on scroll down and showing on scroll up
   - added new functionality on meetup form with a validator
   - added some extra tests
   - improved styling on small devices 

### Technologies
  - React (Hooks)
  - css modules
  - React-testing-library

### Setup
 - It is required to get installed:
    - git 
    - npm

 - To run this project, install it locally using npm:

```
 git clone https://github.com/DevlopFE/react-meetups.git 
 cd react-meetups
 npm install

```

### Quick start

#### To build:
```
npm run build

```
It is possible to check:
```
yarn global add serve
serve -s build
```

#### Running tests:
```
npm test

```

#### Running development:
```
npm start

```
