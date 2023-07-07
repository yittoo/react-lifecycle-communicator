import { useEffect } from 'react';
import { EventEmitter } from 'eventemitter3';
import { Listener } from '../interfaces/Listener';


export interface UseCommunicatorParams {
  eventName: string;
  listener: Listener;
}

export const useCommunicator = (emitter: EventEmitter, { eventName, listener }: UseCommunicatorParams): void => {
  useEffect(() => {
    emitter.on(eventName, listener);

    () => {
      emitter.removeListener(eventName, listener);
    };
  }, [emitter, eventName, listener]);
};
