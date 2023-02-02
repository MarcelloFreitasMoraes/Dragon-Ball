import Link from "next/link";

import * as S from "./styles";

export function FooterComponent() {
  return (
    <S.Footer>
      <div className="container">
        <p>
          Desenvolvido por{" "}
          <Link href="https://github.com/MarcelloFreitasMoraes" passHref>
            <strong>Marcello Moraes</strong>
          </Link>
        </p>
        <div className="icons">
          <Link href="https://github.com/MarcelloFreitasMoraes" passHref>
            <S.Github />
          </Link>

          <Link href="https://www.facebook.com/marcellofreitasmoraes" passHref>
            <S.Facebook />
          </Link>

          <Link href="https://www.linkedin.com/in/marcelo-moraes-2a58161a1" passHref>
            <S.Linkedin />
          </Link>
        </div>
      </div>
    </S.Footer>
  );
}
