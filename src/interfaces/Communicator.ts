import { Listener } from './Listener';

export interface Communicator<T> {
  useCommunicator: (listener: Listener) => void;
  dispatch: (event?: T) => void;
}
