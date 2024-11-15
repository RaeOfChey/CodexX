// this provides functions for getting either comma separated strings, or unordered list items
// to be used to instert html into an html list

import { RawgGame, RawgDevelopmentTeam } from '../interfaces/RawgGame';

export function concatGenres(game: RawgGame): string {
    const genresArray = game.genres ? game.genres.map(g => `${g.name}`) : [];
    return genresArray.join(', ') || 'N/A'; // Default to 'N/A' if no genres
}

export function listGenres(game: RawgGame): string {
    const genresArray = game.genres.map(g => `<li>${g.name}</li>`);
    const genresString = genresArray.join('');
    return genresString;
}

// export function concatPlatforms(game: RawgGame): string {
//     const platformArray = game.platforms ? game.platforms.map(p => `${p.platform.name}`) : [];
//     return platformArray.join(', ') || 'N/A'; // Default to 'N/A' if no platforms
// }

// export function concatStores(game: RawgGame): string {
//     const storesArray = game.stores ? game.stores.map(s => `${s.store.name}`) : [];
//     return storesArray.join(', ') || 'N/A'; // Default to 'N/A' if no stores
// }

// Concatenate development team details with position names
// export function concatDevelopmentTeam(team: RawgDevelopmentTeam): string {
    // const teamArray = team.results
        // ? team.results.map(t => `${t.name} -${t.positions ? t.positions.map(p => ` ${p.name}`).join(', ') : ''}`)
        // : [];
    // return teamArray.join(' | ') || 'No team information available'; // Default if no team info
//     const platformArray = team.platforms.map(p => `${p.platform.name}`);
//     const platformString = platformArray.join(', ');
//     return platformString;
// }

export function listPlatforms(game: RawgGame): string {
    const platformArray = game.platforms?.map(p => `<li>${p.platform.name}</li>`);
    const platformString = platformArray.join('');
    return platformString;
}

export function concatStores(game: RawgGame): string {
    const storesArray = game.stores?.map(s => `${s.store.name}`);
    const storesString = storesArray?.join(', ');
    return storesString;
}

export function concatPlatforms(game: RawgGame): string {
    const platformArray = game.platforms ? game.platforms?.map(p => `${p.platform.name}`) : [];
    return platformArray.join(', ') || 'N/A'; // Default to 'N/A' if no platforms
}

export function listStores(game: RawgGame): string {
    const storesArray = game.stores.map(s => `<li>${s.store.name}</li>`);
    const storesString = storesArray.join('');
    return storesString;
}
// this will take a dev team and output something like this:
export function listDevelopmentTeam(team: RawgDevelopmentTeam): string {
    console.log(team.count);
    if (team.count > 0) {
        const teamArray = team.results.map(t => `<li>${t.name} -${t.positions.map(p => ` ${p.name}`)}</li>`);
        const teamString = teamArray.join('');
        return teamString;
    } else {
        return "No information found."
    }
}