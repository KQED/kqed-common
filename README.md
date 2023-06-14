# kqed-common

## Introduction
Hey Hi Hello :wave:, welcome to KQED's Frontend Component Library. Here you will find our Frontend components that are used throughout our development ecosystem. These are core components that are bundled via webpack that can be installed through `node package manager`. v1 is our node package and v2 will have our FE components hosted via StorybookJs :fist: keep tuned for future developments. 

### Documentation
==How To Bundle==
First step is taking a gander at the `webpack.config.js` and you will see our entry point is pointed to `./lib/index.js`.

This is were our components will be exported, follow the pattern you see there to import/export your component. 

Webpack will be looking at this folder to see what files it will bundle for the node package. 

On the output side of things, we are pointing to the `./bundle.js` located in the root dist folder. 

**Folder Structure**
Our `lib` folder is where our component-library lives. Please drop your FE component there and make sure it is encapsulated in semantic parent component folder inside of `lib/component-library`

Next, make sure to export/import said component and then run `yarn run build` which should output a success message. 

**Consuming NPM Package**
Once you have completed bundling, open the your terminal on the application that will be consuming the NPM package (KQED-common). 

NOTE: If you are adding KQED-common for the first time, then disregard this message BUT if it is not: you need to delete your `yarn.lock` so it can pull in the most recent changes.

This command is going to be RELATIVE to where the KQED-common file lives so for example: if it lives in the same folder as the repo that is consuming this package this commands will work: 
`yarn add ./kqed-common` however if it lives in a parent folder two levels above then the command will be: `yarn add ../../kqed-commmon`

The way this package is being consumed is where this folder is currently living so make sure you know it's relative path to where you will consuming this package. 

**Importing the FE Component**
Once it is successfully added as a dependency in your application. You can check by looking at your `package.json`, you will see that it's point to a relative file path to where kqed-commons is located. Now you won't see the package being imported into your root folder but don't fear! You can find in your `node_modules` folder :relieved:. 

If you scroll through your node modules until you located kqed-commons, you will find your FE components living in `./lib/component-library` :nail_care:. 

Import statement may vary but treat the file as if it is an relative path for example if we are importing the FaIcon into our component we can import it like: 
`import FaIcon from 'kqed-common/lib/component-library/FaIcon/FaIcon'`

