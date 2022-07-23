import React, { useEffect, useState } from "react";

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { useSelectors } from '../store/selectors'

const Profile = () => {
  const { userFiles, loadUserFiles } = useSelectors()

  useEffect(() => {
    loadUserFiles();
  }, []);

  return (
    <Section title="Profile">
      <VerticalFeatureRow
        file_name="surge.png"
        file_type="image"
        ipfs_cid="bafybeifmvkpms6uzuy4abakbw37hkaojopsn7hnwvafley46h5lu35ckli"
      />
      <div>
        {userFiles.map((e, i) => {
          return <div key={i}>{e.file_name}</div>;
        })}
      </div>
    </Section>
  );
};

export { Profile };
