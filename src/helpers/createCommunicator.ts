import EventEmitter from 'eventemitter3';

import { useCommunicator } from './useCommunicator';
import { Communicator } from '../interfaces/Communicator';
import { Dispatch } from '../interfaces/Dispatch';
import { Listener } from '../interfaces/Listener';

/**
 * Creates communicator instance which has helpers to bridge into React life cycle
 * @param defaultEventName name dispatch and useCommunicator functions will use by default
 * @returns Communicator
 */
export const createCommunicator = (defaultEventName = 'default'): Communicator => {
  const emitter = new EventEmitter();

  /**
   * Function that allows firing event from outside the React lifecycle
   * @param eventName name to dispatch event on, it has to match the listening `useCommunicator`,
  defaults to event name passed to `createCommunicator`
   * @param params passed into Listener function callback of `useCommunicator`
   */
  const dispatch: Dispatch = (eventName = defaultEventName, params) => {
    emitter.emit(eventName, params);
  };

  /**
   * Function that accepts a callback to fire once an event is emitted from outside lifecycle
   * @param listener function to fire once an event is emitted from outside lifecycle with dispatch,
   gets params from dispatch into callback
   * @param eventName name to listen event on, it has to match the firing `dispatch`,
  defaults to event name passed to `createCommunicator`
   */
  const useCommunicatorWithEmitter = (listener: Listener, eventName?: string) => useCommunicator(
    emitter,
    {
      eventName: eventName ?? defaultEventName,
      listener
    }
  );

  return {
    dispatch,
    useCommunicator: useCommunicatorWithEmitter
  };
};
