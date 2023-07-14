import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "../../../../styles/styled.information";

export default function Information() {
  const [data, setdata] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
        {
          headers: {},
        }
      )

      .then((response) => {
        setdata(response?.data?.data?.results);
      });
  }, [id]);

  const searchId = async (id: string) => {
    try {
        const response = await axios.get(
            `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a`);
        return response.data;
    } catch (error) {
        console.error('Erro na busca do herói:', error);
        throw error;
    }
};
console.log(data, 'information');

  return (
    <div className="container"> 
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
