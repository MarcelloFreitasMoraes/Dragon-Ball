import * as S from "../../../styles/styled.index";
import Head from "next/head";
import { useRouter } from 'next/router'
import Title from "../Title";
import { useState } from "react";

export default function Home() {

    const router = useRouter()
    const [hero, setHero] = useState('')
  const [namePerson, setNamePerson] = useState();

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
          <Title 
          text={'Meus Heroes'}
          />
          <S.Input type="text" onChange={(e:any) => setNamePerson(e.target.value)} value={namePerson} />
          </S.Box>
          <S.Button onClick={() => {
            setHero(hero)
            router.push(`/Heroes?name=${namePerson}`)          
          }}
            >Buscar</S.Button>
        </S.Contant>
      </S.Back>
    </S.Container>
  );
}
