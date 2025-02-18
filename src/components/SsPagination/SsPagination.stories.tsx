import React, {useState} from 'react';

import {Meta, StoryObj} from '@storybook/react';
import SsPagination from "./SsPagination";


const meta: Meta<typeof SsPagination> = {
    title: 'Sushi Design/SsPagination',
    tags: ['autodocs', 'pagination'],
    component: SsPagination,
};

export default meta;
type Story = StoryObj<typeof SsPagination>;


const PaginationWithHook = () => {
    const [pageDetail, setPageDetail] = useState({
        pageable: {
            pageNumber: 1,
            pageSize: 20,
        },
        totalPages: 10,
    })
    const setPage = (page: number) => {
        setPageDetail({...pageDetail, pageable: {pageNumber: page, pageSize: pageDetail.pageable?.pageSize}});
    };
    const setSize = (size: number) => {
        setPageDetail({...pageDetail, pageable: {pageNumber: pageDetail.pageable?.pageNumber, pageSize: size}});
    };
    return <>
        current page: {pageDetail.pageable?.pageNumber}, size: {pageDetail.pageable?.pageSize}
        <SsPagination onChangePage={setPage} defaultSize={20} displayGoToPage onChangeSize={setSize} displaySize data={pageDetail}/>
    </>
};

export const Primary: Story = {
    render: () => <PaginationWithHook/>,
};
