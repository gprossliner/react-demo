# Migrating the Angular demo to search for github repositories

Angular Version: https://github.com/world-direct/Modern_Frontend_Development_Sources/tree/02_Angular

## Create App Structure

I will use the same component layout as in the Angular version of the Application.

We will use these main directories in the RepoSearch Application:

* Components: Contains our React Components
* Services: Contains the code of the non-UI services
* Shared: Contains shared code, like the types of the ViewModels

## App.tsx

Container for the whole Application. Has a Hello, and holds the RepoSearch

## RepoSearch.tsx

Container for the search functionality

## RepoList.tsx

Renderes the list of the search results

## RepositoryTile

Renderes a single result

## NgIf

Shows how easy it is, to create "container" Components.

Some notes:
* We also integrated bootstrap, but direclty, not with less / webpack
* The root-level app now directly contains the RepoSearch-App, the code from the previous examples is still there, but not references

# Comsume the REST service

Let's wire up the service. We'll take it from the Angular implemenation!

## Choosing a Client

We'll use axios (https://github.com/mzabriskie/axios), because:

* It's very popular
* It runs in browser and node.js
* It direclty contains typescript definitions
* It supports native ES6 Promises

For Angular users:
"axios is heavily inspired by the $http service provided in Angular. Ultimately axios is an effort to provide a standalone $http-like service for use outside of Angular."

## rxjs

React has no dependency to rxjs, so we'll be using Promises directly.

