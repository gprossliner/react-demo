# What will be do?
We will convert the console.log("Hello World") to a `<div>Hello World</div>`, by using react.

# Steps performed

## Install react
the "react" package is the main react component, which is the virtual DOM, and the lifecyle basically.
Please note that this no a runtime, no dev dependency!

    npm install --save react

## Install react-dom
the "react-dom" package implements merging the virtual DOM to the browser. It's only needed in app.ts,
all other modules are based on the virtual DOM.

    npm install --save react-dom

Please Note: If you build again, the size of app.js doen't change, because we have not used the new dependencies anywhere!

## Install definitions for react
There is no much confusion about how to get typescript type-definitions: tsd, typings, ....

With typescipt 2.0 you no longer need tsd or typings!
You should just install the correpsonding @types/.... package
See: http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html


    npm install --save-dev @types/react
    npm install --save-dev @types/react-dom

## Configure typescript for react

We need to tell by the "jsx" key that we want to convert inline virtual DOM elements to the correpsonding react API calls.
Otherwise they would pass directly, causing errors.

## Create our first react component

See helloworld.tsx!

## Rename app.ts to app.tsx

We'll be using react here too!
Note that we also need to modify the entry-point in webpack.config.js!

## Add a "root" div to the .html

See the source there. This is where react will render everything into!

## Rewrite app.tsx to use the react-dom

We basically create an instance of the HelloWorld component, and render it with react-dom to the root-div


# Testing

## Compile in terminal
Compile again in terminal

    npm run build

app.js is generated. In includes all dependencies (like react and react-dom). It now is ~740 kB.
We don't do any minify here, this will greatly reduce in size.

## Open a browser to check
* You may open from file:// in chrome, and look how "Hello World" in the document