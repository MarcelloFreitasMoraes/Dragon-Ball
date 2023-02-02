export interface IContentHeroesProps {
  comics: {
    available: number;
  };
  description: string;
  events: {};
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: {
    available: number;
  };
  stories: {
    available: number;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface IContentDataProps {
  data: IContentHeroesProps
}