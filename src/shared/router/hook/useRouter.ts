import { useCallback } from 'react';

const useRouter = () => {
  const push = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    const popStateEvent = new PopStateEvent('popstate');
    window.dispatchEvent(popStateEvent);
  }, []);

  return { push };
};

export default useRouter;
