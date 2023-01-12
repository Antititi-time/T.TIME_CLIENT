import html2canvas from 'html2canvas';

interface paramsType {
  id: string;
  name: string;
}

const onDownload = ({ id, name }: paramsType) => {
  if (typeof window !== 'object') return;
  const DownloadCompo = document.getElementById(id) as HTMLElement;
  html2canvas(DownloadCompo, { allowTaint: true, useCORS: true }).then((canvas) => {
    document.body.appendChild(canvas);
    onSave(canvas.toDataURL('myResultImg'), name);
    document.body.removeChild(canvas);
  });
};

const onSave: (url: string, name: string) => void = (url, name) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
};

export { onDownload };
