import html2canvas from 'html2canvas';

interface props {
  id: string;
  name: string;
}
const clickLink = (link: HTMLAnchorElement) => {
  link.click();
};

const accountForBrowser = (click: (link: HTMLAnchorElement) => void, link: HTMLAnchorElement) => {
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
};

const simulateDownload = (uri: string, filename: string) => {
  const link = document.createElement('a');
  if (typeof link.download !== 'string') {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForBrowser(clickLink, link);
  }
};

export const PngExport = async ({ id, name }: props) => {
  if (document) {
    html2canvas(document.getElementById(`#${id}`)!).then((canvas) => {
      simulateDownload(canvas.toDataURL(), name);
    });
  }
};
