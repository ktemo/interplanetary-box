import React, { useEffect } from "react";

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { useSelectors } from '../store/selectors';

const VerticalFeatures = () => {
  const { userFiles, loadUserFiles } = useSelectors();

  useEffect(() => {
    loadUserFiles();
  }, []);

  return (
    <Section title="All Items in Storage">
      {userFiles.map((e, i) => {
        return <VerticalFeatureRow
          file_name={e.file_name}
          file_type={e.file_type}
          ipfs_cid={e.ipfs_cid}
        />
      })}
    </Section>
  );
}

export { VerticalFeatures };
