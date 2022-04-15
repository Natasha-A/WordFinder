import axios from "axios";
import { useState, useEffect } from "react";

function Bookmarks() {
  const[bookmarks, setBookmarks]=useState({
    'pretty':[]
  });
  const getBookmark=(word, definitions) => setBookmarks(oBookmarks => ({oBookmarks, [word]: definitions})) 
  const deleteBookmark = word => setBookmarks(oBookmarks => {
    const copy = {oBookmarks};
    delete copy[word];
    return copy;
  })
  
  
  
  return (
    <div>
        <h1 className="mb-3">Bookmarks</h1>
    </div>
  );
}

export default Bookmarks;
//mnimo