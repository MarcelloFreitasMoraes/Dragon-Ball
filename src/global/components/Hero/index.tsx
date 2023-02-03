import * as S from "../../../../styles/styled.hero";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { LoadingComponent } from "../Loading";
import { NotFoundComponent } from "../NotFound";
import { TypographicComponent } from "../Typographic";
import { SelectHeroComponent } from "../SelectHero";
import { PaginationComponent } from "../Pagination";
import { HeaderComponent } from "../Header";
import { SelectOptionsComponent } from "../SelectOptions";
import { IContentHeroesProps } from "../../@types/result";
import md5 from "md5";
import API from "../../../services/marvelServices";

export default function Hero() {
  const [search, setSearch] = useState<IContentHeroesProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const [nameHeroes] = useState();
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    document.title = `Resultado: ${name} | Marvel Comics for tests!`;
  }),
    [];

    // const publicKey = "65f2918914581c909fa90e44ca117531";
    // const privateKey = "2e1fe5c824cab320bc7936836458faba0cf74e16";
    // const ts = Number(new Date());
    // const hash = md5(ts + publicKey + privateKey);

  // useEffect(() => {
  // setLoading(true);
  //   API.get(`/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  //   .then(response => {
  // setSearch(response?.data?.data?.results)
  // setLoading(false);
  // })
  //   .catch((error: { toJSON: () => any; }) => {
  // console.log(error.toJSON());
  // });
  // }, [ name, nameHeroes]);

    useEffect(() => {
      const baseURL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`;
      setLoading(true);
      axios
        .get(baseURL)
        .then(
          (response: {
            data: { data: { results: SetStateAction<IContentHeroesProps[]> } };
          }) => {
            setSearch(response?.data?.data?.results);
            setLoading(false);
          }
        )
        .catch((error: { toJSON: () => any }) => {
          console.log(error.toJSON());
        });
    }, [name, nameHeroes]);

    useEffect(() => {
      setCurrentPage(0);
    }, [itensPerPage]);
  
    const pages = Math.ceil(search.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = search.slice(startIndex, endIndex);   

  const resultSearchTitle = () => {
    return (
      <S.Heading>
        <S.HeadingTitle>
          <TypographicComponent title="Você pesquisou: " medium />
          <TypographicComponent title={name} medium primary />
        </S.HeadingTitle>
        <SelectOptionsComponent
          itensPerPage={itensPerPage}
          setItensPerPage={setItensPerPage}
        />
      </S.Heading>
    );
  };
 
  return (
    <>
      <HeaderComponent />
      <div className="container">
        {resultSearchTitle()}
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            {search.length > 0 ? (
              <S.ListHero>
                {currentItens.map((item) => (
                  <SelectHeroComponent key={item.id} data={item} />
                ))}
              </S.ListHero>
            ) : (
              <NotFoundComponent />
            )}
          </>
        )}
        <PaginationComponent
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
