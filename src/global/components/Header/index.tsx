import { FormComponent } from '../Form';
import { LogoComponent } from '../Logo'

import { Content } from "./styles";

export function HeaderComponent() {
  return (
    <Content>
      <div className="container">
        <LogoComponent />

        <FormComponent isSearch />
      </div>
    </Content>
  );
}
