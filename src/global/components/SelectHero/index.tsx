import * as S from "./styles";

import { TypographicComponent } from "../../components/Typographic";

import Link from "next/link";
import { IContentDataProps } from "../../global/@types/result";

export function SelectHeroComponent({ data }: IContentDataProps) {

  const maxDescription = data.description.substring(0, 100);
  const date = data.modified.substring(10, 0);

  return (
    <S.Content>
      <S.Container>
        <Link href={`Details?id=${data.id}`} passHref>
          <S.Thumbnail
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            width={300}
            height={280}
          />
        </Link>

        <S.Info>
          <TypographicComponent title={data.name} regular />

          <TypographicComponent
            title={data.description ?
              `${maxDescription}...`
              : "Dont't have description..."}
            description
          />

          <S.FooterInfo>
            <S.Id>
              <TypographicComponent title="Identificação" small />
              <TypographicComponent title={data.id} small primary />
            </S.Id>

            <S.Date>
              <TypographicComponent title="Última Modificação" small />
              <TypographicComponent title={date} small primary />
            </S.Date>
          </S.FooterInfo>
        </S.Info>
      </S.Container>
    </S.Content>
  );
}
