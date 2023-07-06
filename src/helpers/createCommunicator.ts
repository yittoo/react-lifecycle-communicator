import EventEmitter from 'eventemitter3';

import { useCommunicator } from './useCommunicator';
import { Communicator } from '../interfaces/Communicator';


export const createCommunicator = <T = unknown>(eventName: string): Communicator<T> => {
  const emitter = new EventEmitter();

  const dispatch = (params?: T) => {
    emitter.emit(eventName, params);
  };

  return {
    dispatch,
    useCommunicator: (listener) => useCommunicator({ emitter, eventName, listener: listener })
  };
};
