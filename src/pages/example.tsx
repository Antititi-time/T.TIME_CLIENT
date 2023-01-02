import { useState } from 'react';
import { Favorite } from '../mocks/types';

function Example() {
  const [favoriteData, setFavoriteData] = useState<Favorite[] | null>(null);

  const handleGetReviews = () => {
    fetch('/favorite')
      .then((res) => res.json())
      .then(setFavoriteData);
  };

  return (
    <div>
      <button onClick={handleGetReviews}>유진s 페이보릿</button>
      {favoriteData && (
        <ul>
          {favoriteData.map((data) => (
            <li key={data.id}>
              <p>{data.mint}</p>
              <br />
              <p>{data.choco}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Example;
