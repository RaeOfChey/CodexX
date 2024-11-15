// Basic usage here:
// For each category, like games, creators, publishers, etc. there will be three functions:
// 
//  getGame(id: number)                       - returns one specific game object
//  getGames(perPage: number, page: number)   - returns an array of game objects
//  searchGames(game: string)                 - returns an array of game objects, or one game object
//
// Other categories will work similarily, getCreator, getCreators, searchCreators

import {

  RawgGame,
  RawgGames,
  // RawgCreator,
  // RawgCreators,
  // RawgPublisher,
  // RawgPublishers,
  // RawgDeveloper,
  // RawgDevelopers,
  // RawgScreenshots,
  RawgDevelopmentTeam
} from '../interfaces/RawgGame';
// const apiKey = import.meta.env.VITE_API_KEY;
// const apiUrl = import.meta.env.VITE_API_URL;

class RawgService {

  // --------------GAMES BEGIN-----------------
  async getGame(id: number): Promise<RawgGame> {
    const response = await fetch(`/api/rawg/game/${id}`);
    const data = await response.json();
    return data;
  }

  async getGames(): Promise<RawgGames> {
    // console.log('fetching games')
    const response = await fetch('/api/rawg/games');
    // console.log(response)
    const data = await response.json();
    // console.log(data)
    return data;
  }

  async searchGame(gameName: string): Promise<RawgGames> {
    const response = await fetch(`/api/rawg/search/${gameName}`);
    // console.log(response);
    const data = await response.json();
    return data;
  }
  // ----------------GAMES END-----------------------

  // -------------DEVELOPEMENT TEAM BEGIN-----------------
  async getDevelopmentTeam(id: number): Promise<RawgDevelopmentTeam> {
    const response = await fetch(`/api/rawg/devteam/${id}`);
    const data = await response.json();
    return data;
  }
  // --------------DEVELOPMENT TEAM END-------------------

  // // ------------------CREATORS BEGIN----------------
  // async getCreators(perPage: number, page: number): Promise<RawgCreators> {
  //   const response = await fetch(`${this.REQUEST_URL}/creators?page=${page}&page_size=${perPage}&key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }

  // async searchCreator(name: string): Promise<RawgCreator | RawgCreators> {
  //   const response = await fetch(`${this.REQUEST_URL}/creators?search=${name}&key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }

  // async getCreator(id: number): Promise<RawgCreator> {
  //   const response = await fetch(`${this.REQUEST_URL}/creators/${id}?key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }
  // // -------------------CREATORS END-----------------------

  // // -------------------PUBLISHERS BEGIN-------------------
  // async getPublishers(perPage: number, page: number): Promise<RawgPublishers> {
  //   const response = await fetch(`${this.REQUEST_URL}/publishers?page=${page}&page_size=${perPage}&key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }

  // async searchPublisher(name: string): Promise<RawgPublisher | RawgPublishers> {
  //   const response = await fetch(`${this.REQUEST_URL}/publisher?search=${name}&key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }

  // async getPublisher(id: number): Promise<RawgPublisher> {
  //   const response = await fetch(`${this.REQUEST_URL}/creators/${id}?key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }
  // // -------------------PUBLISHERS END---------------------

  // // --------------DEVELOPERS BEGIN---------------------------
  // async getDevelopers(perPage: number, page: number): Promise<RawgDevelopers> {
  //   const response = await fetch(`${this.REQUEST_URL}/developers?page=${page}&page_size=${perPage}&key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }

  // async searchDevelopers(name: string): Promise<RawgDeveloper | RawgDevelopers> {
  //   const response = await fetch(`${this.REQUEST_URL}/developers?search=${name}&key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }

  // async getDeveloper(id: number): Promise<RawgDeveloper> {
  //   const response = await fetch(`${this.REQUEST_URL}/developers/${id}?key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }
  // // ----------------DEVELOPERS END----------------------

  // // -------------SCREENSHOTS BEGIN----------------------
  // // this is different from the short_screenshots provided from game details, we may not need to use this
  // async getScreenshots(id: number): Promise<RawgScreenshots> {
  //   const response = await fetch(`${this.REQUEST_URL}/games/${id}/screenshots?key=${this.API_KEY}`, {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   return JSON.parse(data);
  // }
  // // ---------------SCREENSHOTS END-----------------------


}
const rawgService = new RawgService();
export { rawgService };