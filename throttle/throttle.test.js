const { throttle } = require('./throttle');

describe('throttle', () => {
  jest.useFakeTimers();

  it('should call the callback immediately on the first call', () => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 1000);
    throttledCallback();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback again before the limit', () => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 1000);
    throttledCallback();
    throttledCallback();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should call the callback again after the limit', () => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 1000);
    throttledCallback();
    jest.advanceTimersByTime(1000);
    throttledCallback();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should handle multiple rapid calls correctly', () => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 1000);
    throttledCallback();
    throttledCallback();
    jest.advanceTimersByTime(500);
    throttledCallback();
    jest.advanceTimersByTime(500);
    throttledCallback();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should work with arguments', () => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 1000);
    throttledCallback('arg1', 'arg2');
    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
  });
});
