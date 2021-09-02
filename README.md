# Jungle Devs - React Challenge #001

## Description

**Challenge goal**: Implement a simplified version of Hapu’s ‘Become a Nanny Share Host’ view.

**How I worked on this project:**
I started this project by creating a simple static HTML page, copying the content from Figma in order to see the page stripped from all styling. As soon as I had it completed, I moved to breaking the page into JSX Components where I could work on them separately.
I began working on the components and styling them, taking a mobile-first approach.
After finishing styling all components for mobile and desktop, my goal was to finish the newsletter integration and validation of the form. The newsletter integration was extensively tested to avoid unforeseen errors, even though some may occur that I was not aware of. I added a spinner to the submit button, so the user can see how long it takes to send the information. This is something I have never done.
For every step I decided to create new git branches, in order to practice working with Git as well as creating a more organized history of what I had been working on. You can see it on this repository pull requests history.

**Structure of the project:**
This project structure is based on the default application bootstrapped with create-react-app, creating additional folders for services and API calls, styles (global), components (and their style modules), and assets (according to their components).

**Why I built the project this way:**
I decided to not to use any CSS preprocessor or styling library because I am developing my skills from the beginning and I think it would be better to work with the basics I already know, especially using CSS Modules. I have been studying front-end development from online courses that are using preprocessors and some libraries and I will be more confident in using them in the future.
The form validation and result was made using React-modal showing a message if there is an error on any of the two fields (empty or with invalid values), on submission or if it was successful.
The integration was made using Axios, since it is easier to make requests with it.

**If I had more time I would change this:**
I would have worked with Styled Components, which is something I am studying and getting used to, as well as SASS. Another thing I would have liked to work better on is styling. It is close to what was presented on Figma, but some components are a few pixels off. On some parts it could be just nitpicking, but I really would like it to be the closest as possible to the model. The Header + Hero, where one overlays the other, was done but I am sure that there are better ways of doing it.
Also, there is room for improvement on the accessibility. On the modal, it has only two colors for success and error, but no color for warning (or icons). It is something that I have to improve.
There is some repeated code that could have been refactored to prevent these repetitions, mainly on CSS values.
And last, but not least, I have never worked with testing but it is something I am definitely looking forward to learning as soon as possible.

## Instructions

**Install dependencies:**

Using npm:

```
npm install
```

Using yarn:

```
yarn
```

After installing the dependencies, it is possible to run the application in development mode or create a production build.

**Run in development mode:**

Using npm:

```
npm start
```

Using yarn:

```
yarn start
```

**Create a production build:**

Using npm:

```
npm run build
```

Using yarn:

```
yarn build
```
