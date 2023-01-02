import axios from 'axios';
import { useQuery } from 'react-query';
import { Favorite } from '@src/mocks/types';

function Example() {
  const { data } = useQuery('favorite', () => axios.get('/favorite'));

  return (
    <div>
      <button>유진s 페이보릿</button>
      {data && (
        <ul>
          {data.data.map((data: Favorite) => (
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
