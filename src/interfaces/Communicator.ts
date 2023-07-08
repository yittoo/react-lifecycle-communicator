import EventEmitter from 'eventemitter3';

import { Listener } from './Listener';
import { Dispatch } from './Dispatch';

export interface Communicator {
  useCommunicator: (listener: Listener, eventName?: string) => void;
  dispatch: Dispatch,
  __UNSAFE_emitter: EventEmitter
}
