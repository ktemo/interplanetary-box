import React, { useEffect } from "react";

import { LandingPageStub } from '../feature/LandingPageStub';
import { Section } from '../layout/Section';
import { useSelectors } from '../store/selectors';

const VerticalFeatures = () => {
  const { userFiles, loadUserFiles } = useSelectors();

  useEffect(() => {
    loadUserFiles();
  }, []);

  return (
    <Section title="All Items in Storage">
      {/* {userFiles.map((e, i) => {
        return <VerticalFeatureRow
          file_name={e.file_name}
          file_type={e.file_type}
          ipfs_cid={e.ipfs_cid}
        />
      })} */}
      <LandingPageStub
        file_name="rainbow.jpg"
        img="../../rainbow.jpg"
      />
      <LandingPageStub
        file_name="surge.png"
        img="../../surge.png"
      />
      <LandingPageStub
        file_name="bottle.jpg"
        img="../../bottle.jpg"
      />
      <LandingPageStub
        file_name="bubbles.jpg"
        img="../../bubbles.jpg"
      />
    </Section>
  );
};

export { VerticalFeatures };
