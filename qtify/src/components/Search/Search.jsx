import React from "react";
import styles from "./Search.module.css"
import useAutocomplete from "@mui/base/useAutocomplete"
import {styled} from "@mui/system"
import { useNavigate } from "react-router-dom";
import SearchIcon from "../searchIcon/SearchIcon"

function Search ({searchData, placeholder}){
//  const navigate =useNavigate();
 const onSubmit =(e,value)=>{
    e.preventDefault()
    console.log(value)
    // navigate(`/album/${value.slug}`)
 }
 return (
   <div style={{ position: "relative" }}>
     <form
       className={styles.wrapper}
       onSubmit={(e) => {
         onSubmit(e);
       }}
     >
       <div>
         <input
           name="albums"
           className={styles.search}
           placeholder={placeholder}
         />
       </div>
       <div>
         <buttom className={styles.searchButton} type="submit">
            <SearchIcon />
         </buttom>
       </div>
     </form>
   </div>
 );
}

export default Search