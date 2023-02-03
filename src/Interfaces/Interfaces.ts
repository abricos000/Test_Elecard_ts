
export interface ICard {
    image: string;
    filesize: number;
    timestamp: number;
    category: string;
    id?: number;
}
export interface PropsCards {
    postList: ICard[];
    onClose: CallableFunction;
}
  
export interface IPageNumber {
    number: number;
    status: boolean;
}
export interface IMainBranch {
    bool: boolean,
    id: number,
    category: string,
    nestedValues: ICard[]
}
export interface IBranch {
    image: string;
    filesize: number;
    timestamp: number;
    category: string;
    id: number;
}







  
  
  