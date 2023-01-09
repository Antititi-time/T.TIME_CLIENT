import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgCenturyGothicLogo } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import { getTeamResult } from '@src/services';
import { useQuery } from 'react-query';
import { filterQuestionType } from '@src/hooks/FilterQuestionType';
import {
  imgTartPositive,
  imgTartNegative,
  imgMacaronPositive,
  imgMacaronNegative,
  imgEclairPositive,
  imgEclairNegative,
  imgCanelePositive,
  imgCaneleNegative,
  imgSaltbreadPositive,
  imgSaltbreadNegative,
} from '@src/assets/images';

interface TeamResultProps {
  teamCode: number;
}

function SimpleResult({ teamCode }: TeamResultProps) {
  const { data } = useQuery('teamResult', () => getTeamResult(teamCode), {
    enabled: !!teamCode,
  });

  const handleDate = (date: string) => {
    return date && date.replaceAll('-', '.');
  };

  const handleCategory = (category: string) => {
    const charCode = category?.charCodeAt(category.length - 1);
    const consonantCode = (charCode - 44032) % 28;
    if (consonantCode === 0) {
      return '가';
    }
    return '이';
  };

  const handleImgSrc = (isGood: boolean, category: string) => {
    if (isGood) {
      switch (category) {
        case 'a':
          return { src: imgTartPositive, alt: '웃는 타르트' };
        case 'b':
          return { src: imgMacaronPositive, alt: '웃는 마카롱' };
        case 'c':
          return { src: imgEclairPositive, alt: '웃는 에끌레어' };
        case 'd':
          return { src: imgCanelePositive, alt: '웃는 까눌레' };
        case 'e':
          return { src: imgSaltbreadPositive, alt: '웃는 소금빵' };
        default:
          return { src: imgTartPositive, alt: '웃는 타르트' };
      }
    } else {
      switch (category) {
        case 'a':
          return { src: imgTartNegative, alt: '우는 타르트' };
        case 'b':
          return { src: imgMacaronNegative, alt: '우는 마카롱' };
        case 'c':
          return { src: imgEclairNegative, alt: '우는 에끌레어' };
        case 'd':
          return { src: imgCaneleNegative, alt: '우는 까눌레' };
        case 'e':
          return { src: imgSaltbreadNegative, alt: '우는 소금빵' };
        default:
          return { src: imgTartNegative, alt: '우는 타르트' };
      }
    }
  };

  const { date, teamName, good, bad } = data?.data || {};
  return (
    <StSimpleResult>
      <StDate>{handleDate(date)}</StDate>
      <StTeamName>&#39;{teamName}&#39;</StTeamName>
      <StTeamResultText>
        <p>팀</p>
        <ImageDiv src={imgCenturyGothicLogo} alt="logo" className="logo" fill={true} />
        <p>결과</p>
      </StTeamResultText>
      <StImageContainer>
        <ImageDiv
          src={handleImgSrc(true, good).src}
          alt={handleImgSrc(true, good).alt}
          className="emoticon"
          fill={true}
        />
        <ImageDiv
          src={handleImgSrc(false, bad).src}
          alt={handleImgSrc(true, bad).alt}
          className="emoticon"
          fill={true}
        />
      </StImageContainer>
      <StTeamInfoDetail>
        <p>우리 팀은요..</p>
        <p>
          <span style={{ color: COLOR.BLUE_TEXT }}>{filterQuestionType(good)}</span>
          {handleCategory(good)} 가장 뛰어나고,
          <br />
          <span style={{ color: COLOR.ORANGE_TEXT }}>{filterQuestionType(bad)}</span>
          {handleCategory(bad)} 가장 필요해요.
        </p>
      </StTeamInfoDetail>
    </StSimpleResult>
  );
}

export default SimpleResult;

const StSimpleResult = styled.div``;

const StDate = styled.p`
  margin-bottom: 0.8rem;
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.PRETENDARD_M_12};
  line-height: 1.432rem;
`;

const StTeamName = styled.p`
  margin-bottom: 0.8rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.24rem;
`;

const StTeamResultText = styled.div`
  display: flex;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_22}
  line-height: 2.64rem;

  .logo {
    position: relative;
    width: 7.2rem;
    height: 2.4rem;
    margin: 0 0.4rem;
  }
`;

const StImageContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 5.2rem 0 2.8rem 2.1rem;

  .emoticon {
    position: relative;
    width: 12.5rem;
    height: 12.5rem;
  }
`;

const StTeamInfoDetail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5.2rem;
  text-align: center;

  & > p:first-of-type {
    margin-bottom: 0.6rem;
    color: ${COLOR.BLACK};
    ${FONT_STYLES.PRETENDARD_B_14};
  }

  & > p:nth-of-type(2) {
    color: ${COLOR.BLACK};
    ${FONT_STYLES.PRETENDARD_B_20};

    & > span {
      ${FONT_STYLES.PRETENDARD_EB_20};
    }
  }
`;
