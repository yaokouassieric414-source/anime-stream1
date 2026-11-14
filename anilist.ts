const ANILIST_API = 'https://graphql.anilist.co';

export async function fetchAniList(query: string, variables: Record<string, any> = {}, options: { revalidate?: number } = {}) {
  try {
    const fetchOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    };

    // Only add next cache options on server
    if (typeof window === 'undefined' && options.revalidate !== undefined) {
      (fetchOptions as any).next = { revalidate: options.revalidate };
    }

    const response = await fetch(ANILIST_API, fetchOptions);

    if (!response.ok) {
      throw new Error(`AniList API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching from AniList:', error);
    return null;
  }
}

export const TRENDING_QUERY = `
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(sort: TRENDING_DESC, type: ANIME, status: RELEASING) {
        id
        title { romaji english }
        coverImage { large extraLarge }
        bannerImage
        averageScore
        episodes
        seasonYear
        genres
        status
        format
        description(asHtml: false)
      }
    }
  }
`;

export const POPULAR_QUERY = `
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        id
        title { romaji english }
        coverImage { large }
        averageScore
        episodes
        seasonYear
        genres
        status
        format
      }
    }
  }
`;

export const NEW_QUERY = `
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(sort: START_DATE_DESC, type: ANIME, status: RELEASING) {
        id
        title { romaji english }
        coverImage { large }
        averageScore
        episodes
        seasonYear
        genres
        status
        format
      }
    }
  }
`;

export const MEDIA_DETAIL_QUERY = `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title { romaji english native }
      description(asHtml: false)
      coverImage { large extraLarge }
      bannerImage
      averageScore
      meanScore
      episodes
      duration
      seasonYear
      season
      status
      format
      genres
      studios { nodes { name } }
      startDate { year month day }
      endDate { year month day }
      trailer { id site thumbnail }
      streamingEpisodes {
        title
        thumbnail
        url
        site
      }
    }
  }
`;

export const SEARCH_QUERY = `
  query ($search: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: ANIME) {
        id
        title { romaji english }
        coverImage { large }
        averageScore
        seasonYear
        genres
        format
      }
    }
  }
`;

export const CATALOG_QUERY = `
  query ($page: Int, $perPage: Int, $genre: String, $year: Int, $status: MediaStatus, $format: MediaFormat) {
    Page(page: $page, perPage: $perPage) {
      media(
        type: ANIME
        genre: $genre
        seasonYear: $year
        status: $status
        format: $format
        sort: POPULARITY_DESC
      ) {
        id
        title { romaji english }
        coverImage { large }
        averageScore
        episodes
        seasonYear
        genres
        status
        format
      }
    }
  }
`;