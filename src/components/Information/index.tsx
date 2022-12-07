import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Fragment,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import * as S from "../../../styles/styled.information";
import Text from "../Text";
import Title from "../Title";

export default function Information() {
  const router = useRouter();
  const [data, setdata] = useState();

  let url;
  let idDetails: unknown;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    idDetails = url.split("id=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${idDetails}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
        {
          headers: {},
        }
      )

      .then((response) => {
        setdata(response?.data?.data?.results);
      });
  }, [idDetails]);

  console.log(data, "data");

  return (
    <S.Container>
      <S.Back>
      <Head>
        <title>Detalhes</title>
        <meta name="Detalhes" content="Projeto Marvel-Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Text>
        <Title text={"MySuperHero"} />
      </S.Text>
      <S.Link>
        <S.Voltar src={"/voltar.png"} onClick={() => router.push("/")} />
      </S.Link>
      {data &&
        Object.values(data).map((item: any, index) => {
          return (
            <Fragment key={index}>
              <S.Name>
                <p>{item.name}</p>
              </S.Name>

              <S.Box>
                <S.Img
                  alt="heroi"
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
                <S.Img>
                  {item.description ? item.description : "Sem informações"}
                </S.Img>
              </S.Box>
              <S.Characters>
                {/* {item.comics.returned !== 0 && (
                  <Fragment>
                    <Text label={"Comics"} />
                    {item.comics.items.map(
                      (
                        characters: {
                          name:
                            | string
                            | number
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | ReactFragment
                            | ReactPortal
                            | null
                            | undefined;
                        },
                        index: Key | null | undefined
                      ) => {
                        return <p key={index}>{characters.name}</p>;
                      }
                    )}
                  </Fragment>
                )}

                {item.events.returned !== 0 && (
                  <Fragment>
                    <Text label={"Eventos"} />
                    {item.events.items.map(
                      (
                        characters: {
                          name:
                            | string
                            | number
                            | boolean
                            | ReactFragment
                            | ReactPortal
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | null
                            | undefined;
                        },
                        index: Key | null | undefined
                      ) => {
                        return <p key={index}>{characters.name}</p>;
                      }
                    )}
                  </Fragment>
                )}

                {item.series.returned !== 0 && (
                  <Fragment>
                    <Text label={"Séries"} />
                    {item.series.items.map(
                      (
                        characters: {
                          name:
                            | string
                            | number
                            | boolean
                            | ReactFragment
                            | ReactPortal
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | null
                            | undefined;
                        },
                        index: Key | null | undefined
                      ) => {
                        return <p key={index}>{characters.name}</p>;
                      }
                    )}
                  </Fragment>
                )}

                {item.stories.returned !== 0 && (
                  <Fragment>
                    <Text label={"História"} />
                    {item.stories.items.map(
                      (
                        characters: {
                          name:
                            | string
                            | number
                            | boolean
                            | ReactFragment
                            | ReactPortal
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | null
                            | undefined;
                        },
                        index: Key | null | undefined
                      ) => {
                        return <p key={index}>{characters.name}</p>;
                      }
                    )}
                  </Fragment>
                )} */}
              </S.Characters>
            </Fragment>
          );
        })}
        </S.Back>
    </S.Container>
  );
}
