'use client';

import { useEffect, useState } from 'react';

export default function DownloadButton() {
  const [downloadLink, setDownloadLink] = useState('');

  const fetchLatestRelease = () => {
    fetch('https://api.github.com/repos/naveo/naveo/releases/latest')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const releaseLink = `https://github.com/naveo/naveo/releases/download/${data.tag_name}/naveo_x86_64-apple-darwin.dmg`;
        setDownloadLink(releaseLink);
      });
  };
  useEffect(() => fetchLatestRelease(), []);

  return (
    <a
      href={downloadLink}
      className="bg-blue-700 text-center py-4 px-8 rounded hover:bg-blue-600 text-slate-100 hover:text-slate-50 drop-shadow-md"
    >
      <button>
        Download <span className="text-xl font-light">naveo</span>
      </button>
    </a>
  );
}
