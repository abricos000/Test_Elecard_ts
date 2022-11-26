export interface IData {
    image: string;
    filesize: number;
    timestamp: number;
    category: string;
}
export interface ICard extends IData{
    id: number;
}
export interface IPageNumber {
    number: number;
    status: boolean;
}
export interface IMainBranch {
    bool: boolean;
    id: number;
    category: string;
    nestedValues: ICard[];
}








  
  
  