import { imgLoading } from '@src/assets/images';
interface paramsType {
  id: string;
  name: string;
}

const onDownload = async ({ id, name }: paramsType) => {
  const DownloadCompo = document.getElementById(id) as HTMLElement;
  const lib = await import('html2canvas');
  const canvas = await lib.default(DownloadCompo, {
    allowTaint: true,
    useCORS: true,
  });
  document.body.appendChild(canvas);
  canvas.setAttribute('loading', 'eager');
  onSave(canvas.toDataURL('img/'), name);
  document.body.removeChild(canvas);
};

const onSave: (url: string, name: string) => void = (url, name) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
};

export { onDownload };
