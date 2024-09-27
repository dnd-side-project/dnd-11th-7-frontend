export const formatTime = (hour: number) => {
  const formattedHour = (hour + 9).toString().padStart(2, '0');
  if (formattedHour == '24') {
    return `${Number(formattedHour) - 1}:59:59`;
  }
  return `${formattedHour}:00:00`;
};
