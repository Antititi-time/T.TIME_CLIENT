export const filterQuestionType = (questionType: string) => {
  switch (questionType) {
    case 'a':
      return '협업';
    case 'b':
      return '동기부여';
    case 'c':
      return '성장';
    case 'd':
      return '개인생활';
    case 'e':
      return '건강';
  }
};
