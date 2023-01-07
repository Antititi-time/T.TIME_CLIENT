export const filterQuestionType = (questionType: string) => {
  let output = '';
  switch (questionType) {
    case 'a':
      output = '협업';
      break;
    case 'b':
      output = '동기부여';
      break;
    case 'c':
      output = '성장';
      break;
    case 'd':
      output = '개인생활';
      break;
    case 'e':
      output = '건강';
      break;
  }
  return output;
};
