import React, {
  Children,
  useEffect,
  useState,
  ReactNode,
  isValidElement,
} from 'react';

interface RouterProps {
  children: ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.props.path === currentPath) {
          return child;
        }
        return null;
      })}
    </>
  );
};

export default Router;
