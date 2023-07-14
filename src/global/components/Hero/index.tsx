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
  }), [];

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_RESULT_BASE_URL
    const EXTENSION_URL = process.env.NEXT_PUBLIC_RESULT_EXTENSION_URL
    setLoading(true);
    axios
      .get(`${BASE_URL}${name}${EXTENSION_URL}`)
      .then((response: { data: { data: { results: SetStateAction<IContentHeroesProps[]>; }; }; }) => {
        setSearch(response?.data?.data?.results)
        setLoading(false);
      })
      .catch((error: { toJSON: () => any; }) => {
        console.log(error.toJSON());
      });
  }, [name, nameHeroes]);

  useEffect(() => {
    setCurrentPage(0)
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
          <SelectOptionsComponent itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
      </S.Heading>
    );
  };

  return (
    <div className="container">
        <>
      <HeaderComponent />
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
        <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
      </div>

  );
}
