const calculateMCM = async (numbers) => {
  // Lógica para calcular el mínimo común múltiplo
  numbers = numbers.split(',');
  const calculateMCD = (a, b) => (b === 0 ? a : calculateMCD(b, a % b));
  const calculateMCM2 = (a, b) => (a * b) / calculateMCD(a, b);

  return numbers.reduce((mcm, num) => calculateMCM2(mcm, num), 1);
};

const incrementNumber = async (number) => {
  // Lógica para incrementar el número en 1
  return parseInt(number) + 1;
};

module.exports = {
  calculateMCM,
  incrementNumber,
};
