import * as S from "../../../styles/styled.index";
import Head from "next/head";
import { useRouter } from "next/router";
import Title from "../Title";
import { useState } from "react";

export default function Home() {
  const [hero, setHero] = useState("");
  const [namePerson, setNamePerson] = useState();
  const router = useRouter();

  return (
    <S.Container>
      <S.Back>
        <Head>
          <title>Marvel-Studio</title>
          <meta name="hero" content="Projeto Marvel-Studio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <S.Contant>
          <S.Box>
            <Title text={"MySuperHero"} />
            <div>
              <S.Input
                type="text"
                placeholder="Enter the hero name..."
                onChange={(e: any) => setNamePerson(e.target.value)}
                value={namePerson}
              />

              <S.Button
                onClick={() => {
                  setHero(hero);
                  router.push(`/Heroes?name=${namePerson}`);
                }}
                disabled={!namePerson}
              >
                Buscar
              </S.Button>
            </div>
          </S.Box>
        </S.Contant>
      </S.Back>
    </S.Container>
  );
}
