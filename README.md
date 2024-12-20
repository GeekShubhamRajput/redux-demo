# redux-demo
A simple demo showcasing how to use Redux with React, demonstrating state management through actions, reducers, and the Redux store using react-redux hooks.

## Redux
Redux is a predictable state container for Javascript app.

## React-Redux 
React-Redux is the official Redux UI binding library for React.

## Action
An action is an object with a type property.

## Reducer
Reducer specify how the app's state changes in response to actions sent to store.
Function that accepts state and action as arguments, and returns the next state of the application.
reducer(previousState, action) => newState

## Redux Store
One store for the entire application.
Holds application state.

## Middleware
Middleware is the suggested way to extend Redux with custom functionality.
Provides a third-party extension point between dispatching an action, and the moment it reached the reducer.
Use middleware for logging, crash reporting, performing asynchronous tasks etc.

## Synchronous Actions
As soon as an action was dispatched, the state was immediately updated.

## Asynchronous Actions
Asynchronous API calls to fetch the data from an end point and use that data in your application.

## Axios
Requests to an API end point.

## Redux-Thunk
Define async action creators.
Middleware
