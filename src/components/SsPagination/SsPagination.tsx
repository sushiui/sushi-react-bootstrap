import React, {useCallback} from "react";
import {SsPaginationTypes} from "./SsPagination.types";
import {FormControl, FormSelect, Pagination} from "react-bootstrap";

const defaultPageSizeOption = [5, 10, 20, 40, 50];
import {debounce} from "lodash"

const SsPagination: React.FC<SsPaginationTypes> = ({
                                                       data,
                                                       onChangePage,
                                                       onChangeSize,
                                                       displaySize = false,
                                                       defaultSize = 10,
                                                       displayGoToPage = false,
                                                       pageSizeList = defaultPageSizeOption
                                                   }) => {

    if (!data?.pageable) return null;

    const {totalPages = 0} = data;
    const {pageNumber = 0} = data.pageable;
    const pageRange = Math.min(totalPages, 5);
    const startPage = Math.max(1, pageNumber - Math.floor(pageRange / 2));
    const endPage = Math.min(totalPages, startPage + pageRange - 1);

    const pages = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i - 1);

    // Handlers
    const handleChangePage = (page: number) => onChangePage?.(page);
    const handleChangeSize = (size: number) => onChangeSize?.(size);

    // Pagination controls
    const handlePrev = () => pageNumber > 0 && handleChangePage(pageNumber - 1);
    const handleNext = () => pageNumber < totalPages && handleChangePage(pageNumber + 1);

    function setGotoPage(v: string) {
        const targetPage = Math.min(Math.max(0, Number(v) - 1), totalPages - 1);
        handleChangePage(targetPage);
    }
    const handleGotoPage = useCallback(debounce(setGotoPage, 500), []);

    return (
        <Pagination style={{gap: '4px', border: '6px'}}>
            <Pagination.Prev onClick={handlePrev} disabled={pageNumber === 0}/>
            {startPage > 1 && (
                <>
                    <Pagination.Item onClick={() => handleChangePage(0)}>1</Pagination.Item>
                    <Pagination.Ellipsis disabled/>
                </>
            )}

            {pages.map(page => (
                <Pagination.Item
                    key={page}
                    active={pageNumber === page}
                    onClick={() => handleChangePage(page)}
                >
                    {page + 1}
                </Pagination.Item>
            ))}

            {endPage < totalPages && (
                <>
                    <Pagination.Ellipsis disabled/>
                    <Pagination.Item
                        onClick={() => handleChangePage(totalPages - 1)}
                        active={pageNumber === totalPages - 1}
                    >
                        {totalPages}
                    </Pagination.Item>
                </>
            )}

            <Pagination.Next onClick={handleNext} disabled={pageNumber + 1 >= totalPages}/>

            {displaySize && (
                <FormSelect
                    style={{width: '110px'}}
                    defaultValue={defaultSize}
                    onChange={e => handleChangeSize(Number(e.target.value))}
                >
                    {pageSizeList.map(size => (
                        <option key={size} value={size}>
                            {size} / Page
                        </option>
                    ))}
                </FormSelect>
            )}

            {displayGoToPage && (
                <>
                    <label style={{margin: '5px 7px'}}>Go to</label>
                    <FormControl
                        style={{width: '50px'}}
                        type="number"
                        min="1"
                        max={totalPages}
                        onChange={(e) => {
                            handleGotoPage(e.target.value);
                        }}
                        onKeyDown={e => {
                            const v = e.currentTarget.value;
                            if (e.key === 'Enter' && v) {
                                setGotoPage(v);
                            }
                        }}
                    />
                </>
            )}
        </Pagination>
    );
};

export default SsPagination;
