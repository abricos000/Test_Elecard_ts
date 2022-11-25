export interface PropsButton {
    children: string;
    onClick: CallableFunction;
}
export interface ICard {
    image: string;
    filesize: number;
    timestamp: number;
    category: string;
    id?: number;
}
export interface PropsCard {
    post: ICard;
    onRemove: CallableFunction;
}
export interface PropsCards {
    postList: ICard[];
    onClose: CallableFunction;
}

export type IRepoKeys = 'filesize' | 'timestamp' | 'category';
  
export interface PropsSortCardsPage {
    onAddAllCards: CallableFunction ;
    onShowDeletedCards: CallableFunction;
    removeShowDeletedCards: CallableFunction;
    quantityPosts: number;
    setCards: CallableFunction;
    onBackToCards: CallableFunction;
}
export interface IPageNumber {
    number: number;
    status: boolean;
}
export interface PropsCardsPage {
    posts: ICard[] ;
    onScrollToTop: CallableFunction;
}
export interface PropsFooter {
    children: string;
}
export interface PropsHeader {
    onChangeRenderMethod: CallableFunction ;
    renderMethod: string;
}
export interface PropsMain {
    renderMethod: string;
}
export interface PropsModal {
    children: React.ReactNode;
    onClose: CallableFunction
}
export interface PropsBranchThee {
    onClickImageModal: CallableFunction;
    elementCategories: ICard;
}
export interface IMainBranch {
    bool: boolean,
    id: number,
    category: string,
    nestedValues: ICard[]
}
export interface PropsTreeList {
    onAddTree: CallableFunction;
    onClickImageModal: CallableFunction;
    elementArray: IMainBranch;
}
export interface IColection {
    [key: string]: IMainBranch;
}
export interface IBranch {
    image: string;
    filesize: number;
    timestamp: number;
    category: string;
    id: number;
}
export interface PropsPageTreeList {
    posts: IBranch[];
}
export interface PropsPagination {
    onPaginate: CallableFunction;
    pageNumbers: IPageNumber[];
}
export interface IOption {
    value: string;
    name: string;
}
export interface PropsRadioButton {
    onSortData: IOption [];
    onChange: CallableFunction;
    sortMethod: string;
  }
  
  
  