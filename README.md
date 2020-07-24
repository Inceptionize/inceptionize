# Inceptionize

![Build Status](https://travis-ci.com/Inceptionize/inceptionize.svg?branch=master)

An application that helps teams and individuals organize inceptions in the easiest way possible by providing first steps and necessary resources to get them started

## Dev setup

### Using the correct version of Node

We are using `.nvmrc` file to specify the version of Node we are using. For consistentcy, install [nvm](https://github.com/nvm-sh/nvm) to use the Node version specified in the project.

After installing nvm, access the root folder of the project an run the command `nvm use`. This will make sure, you are using the version of the node specified in the project.

### Installing dependencies

Make sure you have [npm](https://www.npmjs.com/get-npm). Run `npm install` in the folder.

### Running the application

Run `npm run dev`.

### Testing the application

Run `npm run test`.

### Checking the build

The TravisCI build is available [here](https://travis-ci.com/github/Inceptionize/inceptionize).

### Accessing the application

The application is running on Netlify, available [here](https://inceptionize.netlify.app/).

### Using external libraries

For visualising the agenda, we used [Big Calendar](https://github.com/jquense/react-big-calendar) library. For tooltips on inception activities, we used [React Tooltip](https://wwayne.github.io/react-tooltip/) library.

### Using git mob

The members of this project are using [git mob](https://www.npmjs.com/package/git-mob) to co-author commit messages.