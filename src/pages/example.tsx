import axios from 'axios';
import { useQuery } from 'react-query';
import { Favorite } from '@src/mocks/types';
import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgTopLogo } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import { COLOR } from '@src/styles/color';

function Example() {
  const { data } = useQuery('favorite', () => axios.get('/favorite'));
  const handleLogIn = () => {
    axios
      .post('', {
        username: '',
        email: '',
        password: '',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <StExample>
      <StTitle onClick={handleLogIn}>유진s 페이보릿</StTitle>
      <ImageDiv src={imgTopLogo} alt="티타임" className="imgTopLogo" />
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
    </StExample>
  );
}

export default Example;

const StExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .imgTopLogo {
    width: 5.8rem;
    height: 3rem;
    margin: 1rem;
  }
`;

const StTitle = styled.h1`
  ${FONT_STYLES.PRETENDARD_R_14};
  color: ${COLOR.ORANGE_TEXT};
`;
