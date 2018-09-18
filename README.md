# React Redux Boilerplate

This repo serves as a starting point for a React Redux based application.

## Installation Notes
These aren't necessarily in any particular order, just in the order I've installed the repo in.

First off install create-react-app globally and run: `create-react-app myapp --scripts-version=react-scripts-ts` to get the basic React setup with TypeScript.

Next I personally like to do a bit of cleanup on all the redundant commentary in the `index.html` file and all the useless files in `src`

## Folders
```
config
public
src
 - actions
 - components
 - constants
 - containers
 - elements
 - reducers
 - selectors
 - styles
 - utils
```

Trying out something I've come across a few times now: splitting components into `components` and `elements`. The former is more of a collection of the latter, the small pieces that make up a page or more complex presentational logic.
