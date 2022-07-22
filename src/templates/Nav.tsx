import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { ConnectMetamaskButtonComponent } from './ConnectWallet';
import { Logo } from './Logo';

const Nav = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <ConnectMetamaskButtonComponent />
      </li>
    </NavbarTwoColumns>
  </Section>
);

export { Nav };
