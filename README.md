# kqed-common

## Introduction
Hey Hi Hello :wave:, welcome to KQED's Frontend Component Library. Here you will find our Frontend components that are used throughout our development ecosystem. These are core components that are bundled via webpack that can be installed through `node package manager`. v1 is our node package and v2 will have our FE components hosted via StorybookJs :fist: keep tuned for future developments. 

---
### Documentation
**How To Bundle**

First step is taking a gander at the `webpack.config.js` and you will see our entry point is pointed to `./lib/index.js`.

This is the entry point for webpack and it will look at the `.index.js` folder. This `index.js` file is where you will create an import/export statement for any FE component we want in our kqed-common FE compnent library. 

Webpack will be looking at this file to see what FE components it will bundle for the node package. 

On the output side of things, we are pointing to the `./bundle.js` located in the root dist folder. 

---

**Folder Structure**

Our `lib` folder is where our component-library lives. Please drop your FE component there and make sure it is encapsulated in semantic parent component folder inside of `lib`

Next, make sure to add an export/import statement for your component and then run `yarn run build` which should output a success message. 

---

**Consuming NPM Package**

There are two ways of consuming the kqed-common node package which varies on the use case/development. We have 1) standard deployment and 2) standard development. ==Standard Deployment== is when you are looking to essentially consume the package in a repo to use the FE components vs. ==Standard Development== is when you are developing a FE component to add the kqed-common FE library. 

*Standard Deployment* :sailboat:

Alrighty so you're ready to consume the kqed-common package and use the FE components in your application. Open up your terminal on the application/repo that you are importing our kqed-common FE components and run this command: 
`yarn add git+ssh://git@github.com/KQED/kqed-common` 
NOTE: In order for this to run, ensure your git ssh key has the right permissions and is properly setup. 

Once the package is successfully added into your dependencies, you need to run `yarn` to be able to update your yarn.lock with the new package dependency. 

*Standard Development* :metal:

Okay, so you're building a FE component and wanting to add it to the kqed-common FE component library. Hooray :tada:, good work and thank you for contributing to the kqed-common FE component library. May your legacy live on here :handshake:  

Reminder: Make sure to add an import/export statement in `./lib/index.js` following this syntax: 
`export { default as FaIcon } from './FaIcon`

While developing your FE component here, you can watch for changes by running: 
`yarn run watch` or `yarn watch`

To bundle your component to be ready for consumption run: 
`yarn run build` or `yarn build`, this will output a new bundle.js which will be consumed to any application of your liking. Follow the **standard deployment** instructions above. 

---

**Importing the FE Component**

Once it is successfully added as a dependency in your application. You can check by looking at your `package.json`, you will see that it under the dependencies object. Now you won't see the package being imported into your root folder but don't fear! You can find in your `node_modules` folder under kqed-common :relieved: making it extra sure it is all there :call_me_hand:

If you scroll through your node modules until you located kqed-commons, you will find all FE components living in `./lib/` :nail_care:. 

When importing the component from kqed-common for use in an appliction of your liking, the import statement should look like: 
`import { FaIcon } from 'kqed-common` (using FaIcon component as an example)

