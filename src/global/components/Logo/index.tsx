import Link from "next/link";

import Logo from '../../assets/vector.svg';

import { LogoImage } from "./styles";

export function LogoComponent() {
  return (
    <Link href="/" passHref>
      <LogoImage src={Logo} alt="Marvel" width={150} height={80} />
    </Link>
  )
}
