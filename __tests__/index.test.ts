import { createCommunicator } from '../src';
import { createCommunicator as expected } from '../src/helpers/createCommunicator';

jest.mock('../src/helpers/createCommunicator');

describe('entry point', () => {
  it('exports createCommunicator', () => {
    expect(createCommunicator).toBe(expected);
  });
});
