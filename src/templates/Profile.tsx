import React, { useEffect, useState } from "react";

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { getUserFiles } from '../utils/fileManager';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [val, setVal] = useState([]);

  const userData = () => {
    getUserFiles().then((data) => {
      console.log(">> Data from getUserFiles", data);
      setLoading(false);
      setVal(data);
    });
  };

  useEffect(() => {
    userData();
  }, []);

  if (loading) {
    return (
      <div>
        Loading
      </div>
    );
  }


  return (
    <Section title="Profile">
      <VerticalFeatureRow
        file_name="surge.png"
        file_type="image"
        ipfs_cid="bafybeifmvkpms6uzuy4abakbw37hkaojopsn7hnwvafley46h5lu35ckli"
      />
      <div>
        {val.map((e, i) => {
          return <div key={i}>{e.file_name}</div>;
        })}
      </div>
    </Section>
  );
};

export { Profile };
