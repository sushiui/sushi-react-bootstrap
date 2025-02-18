export interface SsPaginationTypes {
    data: (Partial<ISsPaging> | undefined) | Partial<ISsPaging>,
    onChangePage?: (page: number) => void
    onChangeSize?: (size: number) => void
    displaySize?: boolean
    defaultSize?: number | 5 | 10 | 20 | 30 | 40 | 50
    displayGoToPage?: boolean
    pageSizeList?: number[]
}

export interface ISsPaging {
    last?: boolean;
    numberOfElements?: number;
    pageable?: Pageable;
    totalElements?: number;
    totalPages?: number;
}

export interface Pageable {
    pageNumber?: number;
    pageSize?: number;
}
