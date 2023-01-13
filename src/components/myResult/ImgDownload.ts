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
    onSave(canvas.toDataURL('myResult/img'), name);
  });
};

const onSave: (url: string, name: string) => void = (url, name) => {
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.href = url;
  link.download = name;
  link.click();
};

export { onDownload };
