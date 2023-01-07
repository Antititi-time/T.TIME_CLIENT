import html2canvas from 'html2canvas';

interface paramsType {
  id: string;
  name: string;
}

const onDownload = ({ id, name }: paramsType) => {
  const DownloadCompo = document.getElementById(id) as HTMLElement;
  html2canvas(DownloadCompo).then((canvas) => onSave(canvas.toDataURL('myResult/img'), name));
};

const onSave: (url: string, name: string) => void = (url, name) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
};

export { onDownload };
