import React from 'react';
import useRouter from '../router/hook/useRouter';

interface NaviButtonProps {
  text: string;
  url: string;
}

const NaviButton: React.FC<NaviButtonProps> = ({ text, url }) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(url);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '10px 20px',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
};

export default NaviButton;
