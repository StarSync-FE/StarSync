const getDaysRemaining = (deadline) => {
  if (!deadline) return null;

  const deadlineDate = new Date(deadline);
  if (Number.isNaN(deadlineDate.getTime())) return null;

  const now = new Date();
  const timeDifference = deadlineDate - now;
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft > 0 ? daysLeft : 0;
};

export default getDaysRemaining;
