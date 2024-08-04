import styles from "./styles.module.css"

function showFilters(filtersDisplay, setFiltersDisplay) {
    if (filtersDisplay === "none") {
        setFiltersDisplay("block");
    } else {
        setFiltersDisplay("none");
    }
}

function displayResults(setDisplaySearchOrAll, setCurrentPage) {
    setDisplaySearchOrAll("search")
    setCurrentPage(1)
}

const SearchBar = (props) => {
    return (
        <div id={styles["search-bar"]}>
            <div id={styles["search-field"]}>
                <svg id={styles["search-icon"]} onClick={() => displayResults(props.setDisplaySearchOrAll, props.setCurrentPage)}xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="hover">
                    <mask id="mask0_1_1859" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 2H21.4768V21.477H2V2Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1_1859)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7388 3.5C7.19576 3.5 3.49976 7.195 3.49976 11.738C3.49976 16.281 7.19576 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36876 21.477 1.99976 17.108 1.99976 11.738C1.99976 6.368 6.36876 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z" fill="white"/>
                    </g>
                    <mask id="mask1_1_1859" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="17" y="17" width="6" height="6">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.24 17.7069H22.264V22.7217H17.24V17.7069Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1_1_1859)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z" fill="white"/>
                    </g>
                </svg>
                <input 
                    value={props.searchInput} 
                    onChange={(e) => props.setSearchInput(e.target.value)} 
                    className="hover" 
                    id={styles["search-input"]} 
                    placeholder="Type book title/genre/name of author"
                ></input>

                <svg onClick={() => showFilters(props.filtersDisplay, props.setFiltersDisplay)} className="hover" id={styles["filters-icon"]} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0801 18.5928H3.77905C3.36505 18.5928 3.02905 18.2568 3.02905 17.8428C3.02905 17.4288 3.36505 17.0928 3.77905 17.0928H10.0801C10.4941 17.0928 10.8301 17.4288 10.8301 17.8428C10.8301 18.2568 10.4941 18.5928 10.0801 18.5928Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.1909 8.90039H12.8909C12.4769 8.90039 12.1409 8.56439 12.1409 8.15039C12.1409 7.73639 12.4769 7.40039 12.8909 7.40039H19.1909C19.6049 7.40039 19.9409 7.73639 19.9409 8.15039C19.9409 8.56439 19.6049 8.90039 19.1909 8.90039Z" fill="white"/>
                    <mask id="mask0_1_1999" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="3" y="5" width="7" height="7">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 5.00037H9.2258V11.192H3V5.00037Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1_1999)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.11276 6.5C5.22376 6.5 4.49976 7.216 4.49976 8.097C4.49976 8.977 5.22376 9.692 6.11276 9.692C7.00276 9.692 7.72576 8.977 7.72576 8.097C7.72576 7.216 7.00276 6.5 6.11276 6.5ZM6.11276 11.192C4.39676 11.192 2.99976 9.804 2.99976 8.097C2.99976 6.39 4.39676 5 6.11276 5C7.82976 5 9.22576 6.39 9.22576 8.097C9.22576 9.804 7.82976 11.192 6.11276 11.192Z" fill="white"/>
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.3877 16.208C16.4977 16.208 15.7737 16.924 15.7737 17.804C15.7737 18.685 16.4977 19.4 17.3877 19.4C18.2767 19.4 18.9997 18.685 18.9997 17.804C18.9997 16.924 18.2767 16.208 17.3877 16.208ZM17.3877 20.9C15.6707 20.9 14.2737 19.511 14.2737 17.804C14.2737 16.097 15.6707 14.708 17.3877 14.708C19.1037 14.708 20.4997 16.097 20.4997 17.804C20.4997 19.511 19.1037 20.9 17.3877 20.9Z" fill="white"/>
                </svg>
            </div>
            <svg className="hover" id={styles["like-icon"]} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF529A">
                <mask id="mask0_1_1877" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="21">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 2.99988H22.4725V22.5009H2V2.99988Z" fill="#FF529A"/>
                </mask>
                <g mask="url(#mask0_1_1877)">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.82371 12.123C5.22571 16.485 10.7647 20.012 12.2367 20.885C13.7137 20.003 19.2927 16.437 20.6497 12.127C21.5407 9.341 20.7137 5.812 17.4277 4.753C15.8357 4.242 13.9787 4.553 12.6967 5.545C12.4287 5.751 12.0567 5.755 11.7867 5.551C10.4287 4.53 8.65471 4.231 7.03771 4.753C3.75671 5.811 2.93271 9.34 3.82371 12.123ZM12.2377 22.501C12.1137 22.501 11.9907 22.471 11.8787 22.41C11.5657 22.239 4.19271 18.175 2.39571 12.581C2.39471 12.581 2.39471 12.58 2.39471 12.58C1.26671 9.058 2.52271 4.632 6.57771 3.325C8.48171 2.709 10.5567 2.98 12.2347 4.039C13.8607 3.011 16.0207 2.727 17.8867 3.325C21.9457 4.634 23.2057 9.059 22.0787 12.58C20.3397 18.11 12.9127 22.235 12.5977 22.408C12.4857 22.47 12.3617 22.501 12.2377 22.501Z" fill="#FF529A"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.1537 10.6249C17.7667 10.6249 17.4387 10.3279 17.4067 9.9359C17.3407 9.1139 16.7907 8.4199 16.0077 8.1669C15.6127 8.0389 15.3967 7.6159 15.5237 7.2229C15.6527 6.8289 16.0717 6.6149 16.4677 6.7389C17.8307 7.1799 18.7857 8.3869 18.9027 9.8139C18.9357 10.2269 18.6287 10.5889 18.2157 10.6219C18.1947 10.6239 18.1747 10.6249 18.1537 10.6249Z" fill="#FF529A"/>
            </svg>
        </div>  
    );
}

export default SearchBar