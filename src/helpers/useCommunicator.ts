import { useEffect } from 'react';
import { EventEmitter } from 'eventemitter3';
import { Listener } from '../interfaces/Listener';


export interface UseCommunicator {
  (createParams: UseCommunicatorParams): void
}

export interface UseCommunicatorParams {
  eventName: string;
  emitter: EventEmitter;
  listener: Listener;
}

export const useCommunicator: UseCommunicator = ({ emitter, eventName, listener }) => {
  useEffect(() => {
    emitter.on(eventName, listener);

    () => {
      emitter.removeListener(eventName, listener);
    };
  }, [emitter, eventName, listener]);
};
