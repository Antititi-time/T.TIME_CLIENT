export const filterQuestionType = (questionType: string) => {
  let output = '';
  switch (questionType) {
    case 'A':
      output = '협업';
      break;
    case 'B':
      output = '동기부여';
      break;
    case 'C':
      output = '성장';
      break;
    case 'D':
      output = '개인생활';
      break;
    case 'E':
      output = '건강';
      break;
  }
  return output;
};
