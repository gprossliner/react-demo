# Steps performed
# Migrating the Angular demo to search for github repositories

Angular Version: https://github.com/world-direct/Modern_Frontend_Development_Sources/tree/02_Angular

## Setup

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
