
import React, { useEffect, useState } from "react";
import { useAddress } from '@thirdweb-dev/react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { getUserFiles } from '../utils/fileManager';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [val, setVal] = useState([]);

  const userData = () => {
    getUserFiles().then((data) => {
      console.log('====================================');
      console.log("Data from getUserFiles", data);
      console.log('====================================');
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
        title="Your title here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
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
