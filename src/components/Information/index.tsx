/* eslint-disable react/jsx-key */
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { 
  useEffect,
  useState,
} from "react";
import * as S from "../../../styles/styled.information";
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
        Object.values(data).map((hero: any) => {
          return (
            <>
             <S.BlockHeroInterno>
                          <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>  
                          <S.BlockTxt>
                            <h1>{hero.name}</h1>
                            <p>{hero.description ? hero.description : 'No Infos'}</p>                            
                          </S.BlockTxt>                    
                    </S.BlockHeroInterno>
                    <S.ContentApparition>
                      {hero.comics.returned !== 0 && (
                        <S.BlockApparition>
                        <p>Comics</p>
                        {hero.comics.items.map((comics:any) => {
                          return (
                              <li>{comics.name ? comics.name : 'No Infos'}</li>                        
                          );
                        })}
                        </S.BlockApparition>
                      )}
                      {hero.events.returned !== 0 && (
                        <S.BlockApparition>
                        <p>Eventos</p>
                        {hero.events.items.map((events:any) => {
                          return (
                              <li>{events.name ? events.name : 'No Infos'}</li>                        
                          );
                        })}
                        </S.BlockApparition>
                      )}                    
                      {hero.series.returned !== 0 && (
                        <S.BlockApparition>
                        <p>Séries</p>
                        {hero.series.items.map((series:any) => {
                          return (
                              <li>{series.name ? series.name : 'No Infos'}</li>                        
                          );
                        })}
                        </S.BlockApparition>
                      )} 
                      {hero.stories.returned !== 0 && (
                        <S.BlockApparition>
                        <p>Histórias</p>
                        {hero.stories.items.map((stories:any) => {
                          return (
                              <li>{stories.name ? stories.name : 'No Infos'}</li>                        
                          );
                        })}
                        </S.BlockApparition>
                         )}  
                         </S.ContentApparition>                          
                         </>
                );               
              })}    
        </S.Back>
    </S.Container>
  );
}
