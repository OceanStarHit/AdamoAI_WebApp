export const getBlob = async (blobUrl: string) => {
  const response = await fetch(blobUrl!);
  const blob = await response.blob();
  const reader = new FileReader();
  let base = '';
  reader.onload = function () {
    const dataUrl = reader.result as unknown as string;
    const base64 = dataUrl.split(',')[1];
    base = base64;
  };
  reader.readAsDataURL(blob);
  return base;
};
