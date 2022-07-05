import INews from '../interfaces/interfaceNews';
import ISources from '../interfaces/interfaceSources';

export interface IResponseNews {
  articles: INews[]
}

export interface IResponseSource {
  sources: ISources[]
}