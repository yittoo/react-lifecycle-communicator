interface TestHookProps<T> {
  callback: () => T
}

export const TestHook = <T>({ callback }: TestHookProps<T>) => {
  callback();
  return null;
};
