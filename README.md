### React Lifecycle Communicator

A way to connect functionality into react lifecycle with hooks and `eventemitter3` npm package.

#### Installation:
`npm i react-lifecycle-communicator`

or

`yarn add react-lifecycle-communicator`

#### Usage:
```javascript
// myCommunicator.js
import { createCommunicator } from 'react-lifecycle-communicator';

const { dispatch, useCommunicator } =  createCommunicator(defaultEventName);

export { dispatch, useCommunicator };

// dispatch.js
import { dispatch } from  'path-to/myCommunicator';

/**
* Function that allows firing event from outside the React lifecycle
* @param  eventName name to dispatch event on, it has to match the listening `useCommunicator`,
defaults to event name passed to `createCommunicator`
* @param  params passed into Listener function callback of `useCommunicator`
*/
dispatch(eventName, myParams);

// MyComponent.js
import { useCommunicator } from  'path-to/myCommunicator';

const MyComponent = () => {
  /**
  * Function that accepts a callback to fire once an event is emitted from outside lifecycle
  * @param  listener function to fire once an event is emitted from outside lifecycle with dispatch,
  gets params from dispatch into callback
  * @param  eventName name to listen event on, it has to match the firing `dispatch`,
  defaults to event name passed to `createCommunicator`
  */
  useCommunicator(listener, eventName);

  // ... my component logic
};
```
