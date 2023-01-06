export const setConstantIndex = (input: string) => {
  let index = 0;
  switch (input) {
    case 'A':
      index = 0;
      break;
    case 'B':
      index = 1;
      break;
    case 'C':
      index = 2;
      break;
    case 'D':
      index = 3;
      break;
    case 'E':
      index = 4;
      break;
    default:
      index = 5;
      break;
  }
  return index;
};
