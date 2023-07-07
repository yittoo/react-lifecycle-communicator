import { Listener } from './Listener';
import { Dispatch } from './Dispatch';

export interface Communicator {
  useCommunicator: (listener: Listener, eventName?: string) => void;
  dispatch: Dispatch
}
