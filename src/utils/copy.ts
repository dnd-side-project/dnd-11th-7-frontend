export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('링크가 복사되었습니다');
  } catch (e) {
    alert('잠시 후 다시 시도해 주세요');
  }
};
