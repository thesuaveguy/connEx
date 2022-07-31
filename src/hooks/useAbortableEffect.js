import { useEffect } from 'react';

function useAbortableEffect(effect, dependencies) {
  const status = {};
  useEffect(() => {
    status.aborted = false;
    const cleanUpFn = effect(status);
    return () => {
      status.aborted = true;
      if (typeof cleanUpFn === 'function') {
        cleanUpFn();
      }
    };
  }, [...dependencies]);
}

export default useAbortableEffect;


