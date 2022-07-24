import { useEffect } from "react";

import { useAddress } from '@thirdweb-dev/react';

import { Section } from "../layout/Section";
import { onFilePicked, onUploadFile, getUserFiles } from '../utils/fileManager';

const FileManagerDashboard = () => {
  const address = useAddress();
  let files;

  return (
    <Section>
      <div>
        <input
          type="file"
          accept="/*"
          onChange={onFilePicked} />

        <button
          className="connect"
          onClick={onUploadFile}
          href="#"
          rel="noopener noreferrer"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </ button>
      </div>
    </Section>

  );
};

export { FileManagerDashboard };