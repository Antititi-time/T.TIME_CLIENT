export const setConstantIndex = (input: string) => {
  let index = 0;
  switch (input) {
    case 'a':
      index = 0;
      break;
    case 'b':
      index = 1;
      break;
    case 'c':
      index = 2;
      break;
    case 'd':
      index = 3;
      break;
    case 'e':
      index = 4;
      break;
    default:
      index = 5;
      break;
  }
  return index;
};
