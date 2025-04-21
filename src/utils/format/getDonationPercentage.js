const getDonationPercentage = (targetAmount, receivedAmount) => {
  if (typeof receivedAmount !== 'number' || typeof targetAmount !== 'number' || targetAmount <= 0) {
    return 0;
  }
  const percentage = (receivedAmount / targetAmount) * 100;

  return Math.min(percentage, 100).toFixed(2);
};

export default getDonationPercentage;
