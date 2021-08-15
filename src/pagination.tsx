import { useEffect, useState } from "react";
import classes from '../styles/pagination.module.css'
import { Grid } from "@material-ui/core";
import PostCard from "../components/card";

const PostPagination = ({ data, pageLimit, dataLimit }: any) => {

    let pages = Math.ceil(data.length / dataLimit)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [currentPage]);

    const goToNextPage = () => {
        setCurrentPage(page => page + 1)
    }
    const goToPreviousPage = () => {
        setCurrentPage(page => page - 1)
    }
    const changePage = (e: any) => {
        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber)
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex)
    }
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill(0).map((_int, index) => start + index + 1)
    }

    return (
        <>
            <Grid container>
                {getPaginatedData().map((d: any, index: any) => (<PostCard key={index} data={d} />))}
            </Grid>
            <div className={classes.myNav}>
                <ul className={classes.pagination}>
                    <li className={classes.pageItem}>
                        <button
                            onClick={goToPreviousPage}
                            className={currentPage === 1 ? classes.disabled : ''}
                        >
                            prev
                        </button>
                    </li>
                    <li>
                        <ul className={classes.pageCount}>
                            {getPaginationGroup().map((item, index) => (
                                <button
                                    key={index}
                                    onClick={changePage}
                                    className={currentPage === item ? classes.active : ''}
                                >
                                    <li className={classes.pageCount}>{item}</li>
                                </button>
                            ))}
                        </ul>
                    </li>
                    <li className={classes.pageItem}>
                        <button
                            onClick={goToNextPage}
                            className={currentPage === pages ? classes.disabled : ''}
                        >
                            next
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PostPagination