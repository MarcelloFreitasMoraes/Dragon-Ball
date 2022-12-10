export interface CardDetails {
  hero: {
    comics: {
      available: number;
      collectionURI: string;
      items: ItemsProps;
      returned: number;
    }
    description: string;
    events: {
      available: number;
      collectionURI: string;
      items: ItemsProps;
      returned: number;
    }
    id: number;
    modified: string;
    name: string;
    resourceURI: string;
    series: {
      available: number;
      collectionURI: string;
      items: ItemsProps;
      returned: number;
    }
    stories: {
      available: number;
      collectionURI: string;
      items: ItemsProps;
      returned: number;
    }
    thumbnail: {
      path: string;
      extension: string;
    }
  }
}

export interface ItemsProps {
  name: string;
  resourceURI: string;
}