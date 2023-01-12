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
    default:
      return '협업';
  }
};

export const filterQuestionCategory = (category: string) => {
  switch (category) {
    case '협업':
      return 'a';
    case '동기부여':
      return 'b';
    case '성장':
      return 'c';
    case '개인생활':
      return 'd';
    case '건강':
      return 'e';
    default:
      return 'a';
  }
};
