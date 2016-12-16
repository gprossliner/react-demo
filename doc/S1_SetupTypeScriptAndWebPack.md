# Steps performed

## Created Directory structure
    md src
    md build

## Create a boilerplate project.json
It will use the current directory name as the project's name

    npm init -y

## Install typescript and webpack
We install it as dev-dependencies, they will not go to the output

    npm install --save-dev typescript webpack

## Install the typescript loader for webpack
webpack is generic, so to let webpack know about typescript, we need a loader.
There is more than one loader out there, I'll use the basic "ts-loader" here

    npm install --save-dev ts-loader

## Include a configuration for typescript
tsconfig.json: It can be empty, but we'll need it later anyway, so we don't configure the toolchain without it.


## Include a configuration file for webpack
webpack uses an imperative configuration script. See the provided webconfig.config.js,
including the comments there


## Include the source .ts files for the very first example
src/helloworld_module.ts: Just exports the string "Hello World"
src/app.ts: Imports the helloworld_module into a variable, and does a console.log.

## Include the index.html
In order to run the app in the browser, we need a .html file.
It does nothing special, it basically just includes "/build/app.js" which is the output
file of webpack

## add .gitignore
node_modules

# Testing

## Compile in terminal
We have not integrated anything to .vscode, so we build from terminal:

    npm run build

app.js should now be generated, including all dependencies (currently only helloworld_module). It should be about 1.8k.

## Open a browser to check
* You may open from file:// in chrome, and look how "Hello World" is printed to the console.
* You also may step though by using F11, so that you may see how modules get loaded in webpack.