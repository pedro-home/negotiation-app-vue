# negotiation-app-vue

## Overview

The app is based on the idea of a work contract negotiation: Employer and employee enter salary values and the app tells if the expectations meet. The interface of the app consists of two tabs: one for the employee and one for the employer. Each tab contains an input box which only accepts numbers, and a “Submit” button. Once a value has been entered and submitted, the input field of the tab disappears. The employer enters how much she is willing to pay maximally. The employee enters how much he expects to be paid minimally. As soon as both inputs have been submitted, a modal window pops up and shows either “Success!” or “Failure!”, as well as the entered values. “Success” is only if the employee’s minimum pay is equal to or below the employer’s maximum pay. Otherwise the input is considered a “Failure”. The modal window should also show the current temperature in London, using data from the the https://openweathermap.org/current API. (Because why not.) The wireframes below are for illustration of the idea and not intended to be an exact template.

## Tasks

- We do not evaluate on UI design. You do not have to apply styling beyond making things recognizable. If your app looks different than in our wireframes, that’s okay.
- The app should be built as a Single Page Application in vue.js.
- You are free to use a framework such as bootstrap, but you are not required.
- It is enough to target the newest version of chrome.
- The code should be completely refactored.
- Please add tests to your code.
- Please include notes how your code and the tests should be run.

## Quick Notes

- The `appid` from _Open Weather Map API_ should be private, since it's considered _personal_ data. To ease the process of running this project locally, it has been added directly to the API url. The correct way would be through _NODE_ environments.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Runs linters and unit tests

```
npm run test
```
