# Steps performed

## Class vs. functional Components

* for "pure rendering" components (that just have a "render" function), it is not nesserary to define a class.
They can be definied just as a (lamda) function. See HelloLabel.tsx

* passing strong typed (!!!) state as props
Props is read-only state in react. It's like attributes in html tags.
We'll start with a greeting in HelloLabel.tsx

* try to refactor from "name" to "text"!!!

## Working with lists

* Let's extent the HelloLabel component with a simple list of Hobbies.
Please note that you can do anything you can do in .js also in .tsx.
For this example we'll use the js .map function to create React 'li' elements from a string array.

* Please note the "key" property. This is used for better DOM merging performance!

## Working with state and events

* state represents the dynamic state of a component ([state-and-lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html))
* Events can be bound directly as a function, not as a string ([events](https://facebook.github.io/react/docs/handling-events.html))

## Working with the real DOM

You (sometimes) need to work with the real DOM, to interact with the browser. Let's modify the TimeButton to automatically update itself by a timer.

I will also show you how to set the initial state with (optional) props.

