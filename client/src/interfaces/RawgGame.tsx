interface RawgPlatform {
    id: number;
    name: string;
    slug: string;
    image?: string;
    year_end?: number;
    year_start?: number;
    games_count?: number;
    image_background?: string;
}

interface RawgGenre {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}

interface RawgStore {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
}

interface RawgRating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface RawgDeveloper {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    description?: string;
}

export interface RawgDevelopers {
    count: number;
    next: string;
    previous: string;
    results: RawgDeveloper[];
}

export interface RawgPublisher {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    description?: string
}

export interface RawgPublishers {
    count: number;
    next: string;
    previous: string;
    results: RawgPublisher[];
}

export interface RawgGame {
    id: number;
    name: string;
    description: string;
    metacritic: number;
    released: string;
    background_image: string;
    website: string;
    playtime: number;
    rating: number;
    ratings_count: number;
    platforms: {
        platform: RawgPlatform;
        released_at: string;
        requirements: any;
    }[];

    stores: {
        id: number;
        url: string;
        store: RawgStore;
    }[];

    short_screenshots: {
        id: number;
        image: string;
    }[]

    developers: RawgDeveloper[];
    genres: RawgGenre[];
    publishers: string[];
    esrb_rating: {
        id: number;
        name: string;
        slug: string;
    };
}

// list of games paginated
export interface RawgGames {
    count: number;              // number of results
    next: string | null;        // link to api call for next page of results, null if on last page
    previous: string | null;    // link to previous page, null if on page 1
    results: RawgGame[];        // array of game objects
}

// details on a game creator - ie. credited with a major role like writer, producer, director, etc.
// the optional values are not given when looking at a list of creators,
// they are only provided when getting details on one creator
export interface RawgCreator {
    id: number;                 // internal id number
    name: string;               // name in plain text
    slug: string;               // name lower case with hyphens
    image: string;              // headshot
    image_background: string;
    description?: string;
    games_count: number;        // total games credited
    reviews_coun?: number;
    rating?: string;
    rating_top?: number;
    updated?: string;
    positions: {                // array of positions (or credits) given to the creator
        id: number;
        name: string;
        slug: string;
    }[];
    games: {
        id: number;
        slug: string;
        name: string;
        added: number;      // not sure what this number means
    }[];
    platforms?: {                        // what platforms their games have been released on
        total: number;                  // total number of platforms
        results: {
            count: number;              // how many on this platform
            percent: number;            // percentage of their games on this platform
            platform: RawgPlatform;     // which platform
        }[];
    };
    ratings?: RawgRating[];      // Rawg user ratings 1 to 5
    timeline?: {                 // number of games released by year
        year: number;
        count: number;
    }[];
}

export interface RawgCreators {
    count: number;
    next: string | null;
    previous: string | null;
    results: RawgCreator[];
}

interface RawgScreenshot {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
}

export interface RawgScreenshots {
    count: number;
    next: string | null;
    previous: string | null;
    results: RawgScreenshot[] | null;
}

export interface RawgDevelopmentTeam {
    count: number;
    next: string | null;
    previous: string | null;
    results: RawgCreator[];
}