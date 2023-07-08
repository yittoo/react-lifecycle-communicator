import React from 'react';
import { EventEmitter } from 'eventemitter3';

import { useCommunicatorBase } from '../../src/helpers/useCommunicatorBase';
import { TestHook } from '../testHelpers/TestHook';
import { asyncRender } from '../testHelpers/asyncRender';

jest.mock('eventemitter3');

describe('useCommunicatorBase', () => {
  it('mounts and unmounts properly', async () => {
    const emitter = new EventEmitter();
    const mockListener = jest.fn();
    const eventName = 'hello';

    const rendered = await asyncRender(
      <TestHook
        callback={() => useCommunicatorBase(
          emitter, {
            eventName,
            listener: mockListener
          })}
      />
    );

    expect(emitter.on).toHaveBeenCalledWith(eventName, mockListener);
    expect(emitter.removeListener).not.toHaveBeenCalled();

    rendered.unmount();

    expect(emitter.removeListener).toHaveBeenCalledWith(eventName, mockListener);
  });
});
