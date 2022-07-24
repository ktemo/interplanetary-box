import { Section } from '../layout/Section';

const Hero = () => (
  <Section yPadding="pt-20 pb-32"
    title={
      <>
        <span className="text-primary-500">In-Box</span>
      </>
    }
    description="A decentralized service to upload and share content with anyone">
  </Section>
);

export { Hero };
