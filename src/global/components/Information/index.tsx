import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "../../../../styles/styled.information";
import { HeaderComponent } from "../Header";

export default function Information() {
  const [data, setdata] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_RESULT_DETAILS_BASE_URL
    const EXTENSION_URL = process.env.NEXT_PUBLIC_RESULT_EXTENSION_DETAILS_URL
    axios
      .get(
        `${BASE_URL}${id}${EXTENSION_URL}`,
        {
          headers: {},
        }
      )

      .then((response) => {
        setdata(response?.data?.data?.results);
      });
  }, [id]);

  return (
    <div className="container">
      <HeaderComponent />
      {data &&
        Object.values(data).map((hero: any) => {
          return (
            <>
              <S.BlockHeroInterno>
                <S.Img2
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                />
                <S.BlockTxt>
                  <h1>{hero.name}</h1>
                  <p>{hero.description ? hero.description : "No Infos"}</p>
                </S.BlockTxt>
              </S.BlockHeroInterno>
              <S.ContentApparition>
                {hero.comics.returned !== 0 && (
                  <S.BlockApparition>
                    <p>Comics</p>
                    {hero.comics.items.map((comics: any) => {
                      return (
                        <>
                          <li>{comics.name ? comics.name : "No Infos"}</li>
                        </>
                      );
                    })}
                  </S.BlockApparition>
                )}
                {hero.events.returned !== 0 && (
                  <S.BlockApparition>
                    <p>Eventos</p>
                    {hero.events.items.map((events: any) => {
                      return (
                        <>
                          <li>{events.name ? events.name : "No Infos"}</li>
                        </>
                      );
                    })}
                  </S.BlockApparition>
                )}
                {hero.series.returned !== 0 && (
                  <S.BlockApparition>
                    <p>Séries</p>
                    {hero.series.items.map((series: any) => {
                      return (
                        <>
                          <li>{series.name ? series.name : "No Infos"}</li>
                        </>
                      );
                    })}
                  </S.BlockApparition>
                )}
                {hero.stories.returned !== 0 && (
                  <S.BlockApparition>
                    <p>Histórias</p>
                    {hero.stories.items.map((stories: any) => {
                      return (
                        <>
                          <li>{stories.name ? stories.name : "No Infos"}</li>
                        </>
                      );
                    })}
                  </S.BlockApparition>
                )}
              </S.ContentApparition>
            </>
          );
        })}
    </div>
  );
}
