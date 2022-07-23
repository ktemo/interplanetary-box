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
          accept="image/*"
          onChange={onFilePicked} />

        <a
          className="connect"
          onClick={onUploadFile}
          href="#"
          rel="noopener noreferrer"
        >
          Upload
        </a>
      </div>
    </Section>

  );
};

export { FileManagerDashboard };