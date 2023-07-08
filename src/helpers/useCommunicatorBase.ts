import { useEffect } from 'react';
import { EventEmitter } from 'eventemitter3';
import { Listener } from '../interfaces/Listener';


export interface UseCommunicatorParams {
  eventName: string;
  listener: Listener;
}

export const useCommunicatorBase = (emitter: EventEmitter, { eventName, listener }: UseCommunicatorParams): void => {
  useEffect(() => {
    emitter.on(eventName, listener);

    return () => {
      emitter.removeListener(eventName, listener);
    };
  }, [emitter, eventName, listener]);
};
