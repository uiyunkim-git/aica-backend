import { useCallback, useEffect, useState } from 'react';
import ArrowLeftIcon from '@Icons/arrow_left.svg';
import ArrowRightIcon from '@Icons/arrow_right.svg';
import TextField from '@Atoms/TextField';

import { Divider } from '@Atoms/Divider';
import { Text } from '@Atoms/Typography';
import { useInput } from '@Hooks';
import { PageButton, PageNavigationContainer } from './PageNavigation.styled';

interface PageNavigationProp {
    page: number;
    setPage: (page: number) => void;
    countTotalItem: number;
    countPerPage?: number;
    countPageDisplayed?: number;
    className?: string;
}

export function PageNavigation({
    page,
    setPage,
    countTotalItem,
    countPerPage = 20,
    countPageDisplayed = 5,
    className,
}: PageNavigationProp) {
    const [lastPage, setLastPage] = useState<number>(
        calculateLastPage(countTotalItem, countPerPage),
    );
    const [pageNumberList, setPageNumberList] = useState<number[]>(
        makePageNumberList(page, lastPage, countPageDisplayed),
    );
    const [inputPage, onChangeInputPage] = useInput(
        page ? page.toString() : '1',
    );

    useEffect(() => {
        setLastPage(calculateLastPage(countTotalItem, countPerPage));
    }, [countTotalItem, countPerPage]);

    useEffect(() => {
        setPageNumberList(
            makePageNumberList(page, lastPage, countPageDisplayed),
        );
    }, [page, lastPage, countPageDisplayed]);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
        (e) => {
            e.preventDefault();
            const inputPageNumber = parseInt(inputPage, 10);
            if (inputPageNumber > 0 && inputPageNumber <= lastPage) {
                setPage(inputPageNumber);
            }
        },
        [inputPage, lastPage, setPage],
    );

    return (
        <PageNavigationContainer className={className}>
            <PageButton
                onClick={() => setPage(page - 1)}
                buttonType="normal"
                onlyIcon="fit"
                color="black"
                disabled={page <= 1}
            >
                <ArrowLeftIcon />
            </PageButton>
            {pageNumberList.map((pageNumber) => (
                <PageButton
                    key={`${pageNumber}_page`}
                    onClick={() => setPage(pageNumber)}
                    page={pageNumber}
                    onlyIcon="fit"
                    color={page === pageNumber ? 'blue' : 'black'}
                >
                    {pageNumber}
                </PageButton>
            ))}
            <PageButton
                onClick={() => setPage(page + 1)}
                buttonType="normal"
                onlyIcon="fit"
                color="black"
                disabled={page >= lastPage}
            >
                <ArrowRightIcon />
            </PageButton>
            <Divider direction="vertical" height="16px" />
            <form
                style={{
                    paddingLeft: '8px',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                    height: '100%',
                }}
                onSubmit={onSubmit}
            >
                <Text color="black1">페이지로 이동</Text>
                <TextField
                    width="48px"
                    height="32px"
                    value={inputPage}
                    onChange={onChangeInputPage}
                />
            </form>
        </PageNavigationContainer>
    );
}

const calculateLastPage = (countTotal: number, countPerPage: number) => {
    return countPerPage > 0 ? Math.ceil(countTotal / countPerPage) : 1;
};

const makePageNumberList = (
    page: number,
    lastPage: number,
    countPageDisplayed: number,
) => {
    const maxStartPage = lastPage - countPageDisplayed + 1;
    const validMaxStartPage = maxStartPage > 0 ? maxStartPage : 1;

    const startPage = page - Math.floor(countPageDisplayed / 2);
    const validStartPage =
        startPage > 0
            ? startPage > validMaxStartPage
                ? validMaxStartPage
                : startPage
            : 1;

    const pageNumberList = Array(countPageDisplayed)
        .fill(validStartPage)
        .map((start, index) => {
            const thisPage = start + index;
            return thisPage <= lastPage ? thisPage : -1;
        })
        .filter((thisPage: number) => thisPage > 0);
    return pageNumberList;
};
