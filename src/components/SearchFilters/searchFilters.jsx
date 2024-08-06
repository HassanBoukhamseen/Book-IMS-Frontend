import styles from "./styles.module.css"

const SearchFilters = (props) => {
    return (
        <div id={styles["filters"]} style={{"display": props.filtersDisplay}}>
            <ul id={styles["filters-list"]}>
                <li onClick={() => {props.setDisplayType("all"); props.setOrderBy(null)}} className={styles["filters-element"]}>All Books</li>
                <li onClick={() => {props.setDisplayType("all"); props.setOrderBy("trending")}} className={styles["filters-element"]}>Most Trending</li>
                <li className={styles["filters-element"]}>Recently Added</li>
                <li className={styles["filters-element"]}>Recommended</li>
                <li onClick={() => {props.setDisplayType("all"); props.setOrderBy("publish_year_desc")}} className={styles["filters-element"]}>Most Recent Publish Year</li>
                <li onClick={() => {props.setDisplayType("all"); props.setOrderBy("publish_year_asc")}} className={styles["filters-element"]}>Earliest Publish Year</li>
                <li onClick={() => {props.setDisplayType("all"); props.setOrderBy("average_rating_desc")}} className={styles["filters-element"]}>Top Rated</li>
                <li onClick={() => {props.setDisplayType("all"); props.setOrderBy("average_rating_asc")}} className={styles["filters-element"]}>Least Rated</li>
            </ul>
        </div>
    )
}

export default SearchFilters;