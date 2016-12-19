# Steps performed

## Create a Task to build

See tasks.json. We are basically wireing the "build" script in package.json to the vsocde by using the tasks.json,
and setting isBuildCommand to true.

STRG+B => app.js is created!

webpack output is not colorized :-( there seem to be some extensions that do this, but I have not tried any yet.
BUT: Just use the "Problems" window in vsocde, error will be provided in real-time, even as you type. (View->Problems).

## Use a server instead of file://

It's not that nice to use file://, and reload every time. We start using the wonderfull "webpack-dev-server"!
The script tag in the html don't need the build/ folder any longer. This is provided by the webpack-dev-server.

### Install webpack-dev-server

    npm install --save-dev webpack-dev-server

### Create a task to launch

See the package.json. Because we have not installed the server globally, and we don't want to type node_module/.bin/....,
we create a "launch" npm script.

### Test the server

* npm run lauch
* open http://localhost:8080/, change and F5 for reload
* or open http://localhost:8080/webpack-dev-server/ to get auto-reload!

## Source Maps

SourceMaps are like .pdb files for the generated app.js. They match the compiled code to the original source.
This allows to debug in a friendly way.

### Enable Source Maps on for the compiler (webpack)

See changes in webpack.config.js. After this, webpack generates SourceMaps, and you can use it (test with debugger;)

### Enable Source Maps for typescript

See changes in tsconfig.json. After this, you see the jsx sytax in the Debugger.

## Debug locally in vscode

We should enable F5 / CTRL+F5.

* add a "lauch" task to tasks.json
The "problemMatcher" is required for it to function. This caused me some headache.....

* install the "Debugger for Chrome" extension.
See the extensions.json in .vscode

* add the chrome "userDataDir" to gitignore, so that we don't commit this stuff

