export const strictEquals = (valueA, valueB) => {

  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }

  if (Math.sign(valueA) < Math.sign(valueB) || Math.sign(valueA) > Math.sign(valueB)){
    return false;
  }

  if (!valueA && !valueB) {
    return true;
  }

  return Object.is(valueA, valueB);

};
