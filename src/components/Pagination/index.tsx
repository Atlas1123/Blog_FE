// node_modules
import React, { useEffect, useState } from "react";
import { Box, Text, Button, Input } from "@chakra-ui/react";

// props type
type Props = {
    allPagesNumber: number;
    pageChange: (page: number) => void;
};

const PaginationComponent: React.FC<Props> = ({
    allPagesNumber,
    pageChange,
}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        pageChange(currentPage);
    }, [currentPage, pageChange]);

    useEffect(() => {
        if (currentPage > allPagesNumber) {
            setCurrentPage(allPagesNumber ? allPagesNumber : 1);
        }
    }, [allPagesNumber, setCurrentPage, currentPage]);

    const onFirstPage = (): void => {
        setCurrentPage(1);
    };

    const onLastPage = (): void => {
        setCurrentPage(allPagesNumber);
    };

    const onNextPage = (): void => {
        setCurrentPage(currentPage + 1);
    };

    const onPreviousPage = (): void => {
        setCurrentPage(currentPage - 1);
    };

    const getPageNumbers = () => {
        if (allPagesNumber < 5) {
            let arr = [];
            for (let i = 1; i <= allPagesNumber; i++) {
                arr.push(i);
            }
            return arr;
        } else if (currentPage <= 4) {
            return [1, 2, 3, 4, 5];
        } else if (currentPage > allPagesNumber - 4) {
            let arr = [];
            for (let i = 4; i >= 0; i--) {
                arr.push(allPagesNumber - i);
            }
            return arr;
        } else {
            return [currentPage -1, currentPage,
            currentPage + 1];
        }
    }

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Button disabled={currentPage <= 1} onClick={() => onFirstPage()} mr="1" >
                First
            </Button>
            <Button
                disabled={currentPage <= 1} mr="1" 
                onClick={() => onPreviousPage()}
            >
                Previous
            </Button>
            { currentPage > 4 &&
                <React.Fragment>
                    <Button bg={"#edf2f7"} mr="1" 
                        onClick={ () => setCurrentPage(1)}>1</Button>
                    <span style={{margin: "0px 5px"}} className="h4">...</span>
                </React.Fragment>
            }
            { getPageNumbers().map(num =>
            <Button bg={ `${num === currentPage
                ? "#000": "#edf2f7"}`} color={ `${num === currentPage
                    ? "#fff": "#000"}`} mr="1" 
                        onClick={ () => setCurrentPage(num)} key={ num }>
                    { num }
                </Button>)
            }
            { currentPage <= (allPagesNumber - 4) &&
            <React.Fragment>
            <span style={{margin: "0px 5px", fontSize:"15px"}} className="h4">...</span>
            <Button bg={"#edf2f7"} mr="1" 
            onClick={ () => setCurrentPage(allPagesNumber)}>
            { allPagesNumber }
            </Button>
            </React.Fragment>
            }
            <Button mr="1" 
                disabled={currentPage >= allPagesNumber}
                onClick={() => onNextPage()}
            >
                Next
            </Button>
            <Button
                disabled={currentPage >= allPagesNumber}
                onClick={() => onLastPage()}
            >
                Last
            </Button>
        </Box>
    );
};

export default PaginationComponent;
