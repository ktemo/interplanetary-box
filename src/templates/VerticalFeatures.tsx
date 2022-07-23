import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      file_name="Your title here"
      file_type="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      ipfs_cid="/assets/images/feature.svg"
    />
    <VerticalFeatureRow
      file_name="Your title here"
      file_type="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      ipfs_cid="/assets/images/feature.svg"
      reverse
    />
    <VerticalFeatureRow
      file_name="Your title here"
      file_type="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      ipfs_cid="/assets/images/feature.svg"
    />
  </Section>
);

export { VerticalFeatures };
