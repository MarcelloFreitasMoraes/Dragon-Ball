import { IHeaderProps } from '../../@types/header';
import { FormComponent } from '../Form';
import { LogoComponent } from '../Logo'

import { Content } from "./styles";

export function HeaderComponent({isSearch}:IHeaderProps) {
  return (
    <Content>
      <div className="container">
        <LogoComponent />
        {isSearch &&
          <FormComponent isSearch />
        }
      </div>
    </Content>
  );
}
