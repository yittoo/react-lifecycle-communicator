import EventEmitter from 'eventemitter3';

import { createCommunicator } from '../../src/helpers/createCommunicator';
import { useCommunicatorBase } from '../../src/helpers/useCommunicatorBase';
import { Communicator } from '../../src/interfaces/Communicator';

jest.mock('eventemitter3');

jest.mock('../../src/helpers/useCommunicatorBase');

describe('createCommunicator', () => {
  let communicator: Communicator;

  beforeEach(() => {
    jest.clearAllMocks();
    communicator = createCommunicator();
  });

  describe('createCommunicator', () => {
    it('returns expected result', () => {
      expect(communicator).toEqual({
        dispatch: expect.any(Function),
        useCommunicator: expect.any(Function),
        __UNSAFE_emitter: expect.any(EventEmitter)
      });
      expect(EventEmitter).toHaveBeenCalled();
    });
  });

  describe('dispatch', () => {
    it('should emit an event', () => {
      communicator.dispatch();

      expect(communicator.__UNSAFE_emitter.emit).toHaveBeenCalledWith('default', undefined);
    });

    it('should emit an event with given event name', () => {
      communicator.dispatch();

      expect(communicator.__UNSAFE_emitter.emit).toHaveBeenCalledWith('default', undefined);
    });
  });

  describe('useCommunicator', () => {
    it('calls imported useCommunicator with required params', () => {
      const mockListener = jest.fn();

      communicator.useCommunicator(mockListener);

      expect(useCommunicatorBase).toHaveBeenCalledWith(
        communicator.__UNSAFE_emitter,
        { eventName: 'default', listener: mockListener }
      );
    });
    it('calls imported useCommunicator with optional params', () => {
      const mockListener = jest.fn();

      communicator.useCommunicator(mockListener, 'my-event');

      expect(useCommunicatorBase).toHaveBeenCalledWith(
        communicator.__UNSAFE_emitter,
        { eventName: 'my-event', listener: mockListener }
      );
    });
  });
});
