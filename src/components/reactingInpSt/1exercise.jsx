import { useState } from 'react';

export default function Picture() {
  const { isActive, setIsActive } = useState(false);

  let backgroundCSS = 'background';
  let pictureCSS = 'picture';

  if (isActive) {
    pictureCSS += ' picture--active';
  } else {
    backgroundCSS += ' background--active';
  }

  return (
    <div className={backgroundCSS} onClick={() => setIsActive(false)}>
      <img
        className={pictureCSS}
        onClick={(e) => {
          e.stopPropagation;
          setIsActive(true);
        }}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
