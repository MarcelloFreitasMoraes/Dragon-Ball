import * as S from "../../../../styles/styled.index";
import Head from "next/head";
import { FormComponent } from "../Form";
import { TypographicComponent } from "../Typographic";
import Image from "next/image";
import heroi from "../../assets/spider.png";

export default function Home() {

  return (
    <div>
        <Head>
          <title>Home | Marvel Comics for tests!</title>
          <meta name="hero" content="Projeto Marvel-Studio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>           
      <S.Main>
        <S.GroupLeft>
          <div>
            <FormComponent isSearch />
            <TypographicComponent title="For test next js" small />
            <TypographicComponent title="Marvel Api" large />

            <TypographicComponent title="Produced 100% by Marcelo Moraes. Login and have fun in the world
              of marvel" description />            
          </div>
        </S.GroupLeft>

        <S.GroupRight>
          <div>
            <Image src={heroi} width={625} height={625} alt="Spider Man" />
          </div>
        </S.GroupRight>
      </S.Main>
    </div>
  );
}
