# React Beej

> A feature rich boilerplate to bootstrap your react projects.

[comment]: <> ([![NPM Version][npm-image]][npm-url])
[comment]: <> ([![Build Status][travis-image]][travis-url])
[comment]: <> ([![Downloads Stats][npm-downloads]][npm-url])

I used to find it monotonous and repetetive to set up the `create-react-app` boilerplate with auxillary and essential tools to bootstrap a new project. Usually, the libraries and the tool remained the same for most of the projects. Rarely, I had to make changes to the existing set up.

Hence, I decided to create a boilerplate with the tools and library I usually end up using with `create-react-app` hoping this would help other developers too while starting new projects.

## Usage example

Clone the project and replace project name seen in the below code with your project name:

```sh
git clone https://github.com/rashtay/react-beej.git <your-project-name>
```

The `routes/` folder consists of the pages. Replace the existing `containers` with the container of your choice and you are good to go.

Below, I have listed the tools and libraries with official documentation integrated used in the project:

- [Create React App](https://create-react-app.dev/docs/getting-started)
- [React](https://reactjs.org/)
- [React DOM](https://reactjs.org/docs/react-dom.html)
- [React Router for navigation](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux: Central State Management](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Reselect](https://github.com/reduxjs/reselect)
- [ESLint](https://eslint.org/)
- [Lint Staged](https://www.npmjs.com/package/lint-staged)
- [Husky](https://www.npmjs.com/package/husky)
- [Cross ENV](https://www.npmjs.com/package/cross-env)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [Flow: Typechecker](https://flow.org/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Release History

- 0.1.0
  - The first proper release
- 0.0.1
  - Work in progress

## Meta

Rahul Shetty – [@rash_tay](https://twitter.com/rash_tay) – shettyrahul8june@gmail.com

Distributed under the XYZ license. See `LICENSE` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
