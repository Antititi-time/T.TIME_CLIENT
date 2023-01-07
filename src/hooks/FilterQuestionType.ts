export const filterQuestionType = (questionType: string) => {
  switch (questionType) {
    case 'A':
      return '협업';
    case 'B':
      return '동기부여';
    case 'C':
      return '성장';
    case 'D':
      return '개인생활';
    case 'E':
      return '건강';
  }
};
