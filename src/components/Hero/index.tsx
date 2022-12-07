import * as S from "../../../styles/styled.hero";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title";
import { useRouter } from "next/router";

export default function Hero() {
  const [data, setData] = useState();
  const [nameHeroes] = useState();
  const router = useRouter()

  let url
  let nameHero: unknown

  if (typeof window !== 'undefined') {
    url = window.location?.href;
    nameHero = url.split("name=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
      )
      .then((response) => {
        setData(response?.data?.data?.results);
      });
  }, [nameHeroes, nameHero]);

  console.log(data, "data");

  return (
    <S.Container>
      <S.Back>
        <Head>
          <title>Marvel-Studio</title>
          <meta name="Busca Heroes" content="Projeto Marvel-Studio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <S.Text>
        <Title text={"MySuperHero"} />
        </S.Text>
        <S.Link>
        <S.Voltar src={'/voltar.png'} onClick={() => router.push('/')}/>
        </S.Link>        
        <S.Contant>
          {data &&
            Object.values(data).map((item: any, index) => {
              return (
                <>
                  <S.Box>
                    <S.Name>
                      <p>{item.name}</p>
                    </S.Name>
                    <S.Card>
                      <S.Img
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      />
                    </S.Card>
                  </S.Box>
                </>
              );
            })}
        </S.Contant>
      </S.Back>
    </S.Container>
  );
}
