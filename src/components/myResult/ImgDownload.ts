import html2canvas from 'html2canvas';

interface paramsType {
  name: string;
  element: HTMLElement;
}

const onDownload = async ({ element, name }: paramsType) => {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL('myResult/image');
  downloadImage(image, name);
};

const downloadImage = (image: string, name: string) => {
  const fakeLink = window.document.createElement('a');
  fakeLink.download = name;
  fakeLink.href = image;
  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export { onDownload };
