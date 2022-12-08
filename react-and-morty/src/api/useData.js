import { useEffect } from 'react';
import { useFetch } from './useFetch.js';
import { mainUrls } from './dataRoutes.js';

/**
     Fetch data from an open-source API. It returns json containing pagination.
     The json contains an `info` and a `results` property. The `info` contains every information about the pagination,
     the `results` contains the characters objects situated in the given page number in the pagination.
     *
     * @param pageNum integer that gives the pagination page number. The json `info` property contains how many pages are.
     */
export const useCharacters = (pageNum = 1) => {
  const [characters, setUrl] = useFetch(mainUrls.characters + pageNum);
  useEffect(() => {
    setUrl(mainUrls.characters + pageNum);
  }, [pageNum]);
  return characters === undefined ? 'Loading...' : characters;
};

export const useCharacter = (id = 1) => {
  const [character, setUrl] = useFetch(mainUrls.character + id);
  useEffect(() => {
    setUrl(mainUrls.character + id);
  }, [id]);
  return character === undefined ? 'Loading...' : character;
};

/**
     Fetch data from an open-source API. It returns json containing pagination.
     The json contains an `info` and a `results` property. The `info` contains every information about the pagination,
     the `results` contains the locations objects situated in the given page number in the pagination.
     *
     * @param pageNum integer that gives the pagination page number. The json `info` property contains how many pages are.
     */
export const useLocations = (pageNum = 1) => {
  const [locations, setUrl] = useFetch(mainUrls.locations + pageNum);
  useEffect(() => {
    setUrl(mainUrls.locations + pageNum);
  }, [pageNum]);
  return locations === undefined ? 'Loading...' : locations;
};
