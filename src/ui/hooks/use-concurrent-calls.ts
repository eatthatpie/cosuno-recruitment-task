import React from 'react';

export interface ConcurrentCallsHookResult {
  isLoading: boolean;
  registerCall: () => void;
  releaseCall: () => void;
}

export function useConcurrentCalls(): ConcurrentCallsHookResult {
  const [concurrentCalls, setConcurrentCalls] = React.useState(0);

  const isLoading = React.useMemo(() => concurrentCalls > 0, [concurrentCalls]);

  const registerCall = React.useCallback(() => {
    setConcurrentCalls((state) => state + 1);
  }, []);

  const releaseCall = React.useCallback(() => {
    setConcurrentCalls((state) => state - 1);
  }, []);
  
  return {
    isLoading,
    registerCall,
    releaseCall,
  };
}
