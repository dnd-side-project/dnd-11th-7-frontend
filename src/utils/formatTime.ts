export const formatTime = (hour: number) => {
  const formattedHour = (hour + 9).toString().padStart(2, '0');
  return `${formattedHour}:00`;
};
