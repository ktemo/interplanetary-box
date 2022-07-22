import { useEffect } from "react";
import { useAddress } from '@thirdweb-dev/react';

import { onFilePicked, onUploadFile, getUserFiles } from '../utils/fileManager';

const FileManagerDashboard = () => {
  const address = useAddress();
  let files;

  return (
    <div>
        <ul>

        </ul>
        <input
          type="file"
          accept="image/*"
          onChange={onFilePicked}/>

        <a
          className="connect"
          onClick={onUploadFile}
          href="#"
          rel="noopener noreferrer"
        >
          Upload
        </a>
    </div>
  );
};

export { FileManagerDashboard };