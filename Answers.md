1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

-> Object.assign
-> Using the spread operator
-> using e6 array methods like array.filter, array.map etc

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-> actions makes up the functionality of the application. they send the action type and action data which are saved in the payload to the store which the reducer uses to update the store.

-> reducers are responsible for updating the state of the store based on action types.

-> store contains the application of the state and makes it avaialable to all components. It is known as the single source of truth because it makes the state available to all components thereby eliminating the need to pass props from parent and children.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

-> Application state is a redux state that stores the state of the application in a store and makes it available as props for any component that connects to its store while component state is a react method of passing the the state down as props from parent to children

A good to use redux is when you are working with a growing code base where a component might need state from a component they can't access as props, if the application is a small one then using Component state is okay.

1.  What is middleware?

-> Middleware is mostly used for asynchronous actions

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-> redux-thunk is the middleware that lets us perfom asynchronous calls to APIs inside our action creator functions

1.  Which `react-redux` method links up our `components` with our `redux store`?
    -> connect
