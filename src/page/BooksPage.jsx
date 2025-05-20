import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllbooks } from "../redux/slice/booksSlice";
import BookCard from "./BookCard";


function BooksPage() {
    const dispatch =useDispatch();
    const isloading  =useSelector(state=> state.booksReducer.isloading);
    const books =useSelector(state => state.booksReducer.books);;

    useEffect(() => {
        dispatch(getAllbooks());
    }, [])

  return (
    
       <div style={{ display: 'flex'}}>{
            isloading ? <div>Loading</div> : <div style={{ display: 'flex', gap:10, flex:'wrap'}}>{books.map((item, index) => <BookCard key={index} data={item} />)}</div>
        }</div>
  )
}

export default BooksPage