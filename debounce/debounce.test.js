const { debounce } = require('./debounce');

describe('debounce', () => {
  jest.useFakeTimers(); // Use fake timers for more control over time-based functions

  it('should not call the callback immediately', () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 1000);
    debouncedCallback();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should call the callback after the specified wait time', () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 1000);
    debouncedCallback();
    jest.advanceTimersByTime(1000); // Fast-forward time by 1 second
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback multiple times if called rapidly', () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 1000);
    debouncedCallback();
    debouncedCallback();
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple calls spaced apart by more than the wait time', () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 1000);
    debouncedCallback();
    jest.advanceTimersByTime(1000);
    debouncedCallback();
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
