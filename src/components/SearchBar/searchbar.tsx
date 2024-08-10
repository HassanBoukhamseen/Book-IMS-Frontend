import React, { useState } from "react";
import styles from "./styles.module.css";

interface SearchBarProps {
    filtersDisplay: string;
    setFiltersDisplay: React.Dispatch<React.SetStateAction<string>>;
    setDisplayType: React.Dispatch<React.SetStateAction<string>>;
    setDisplayContent: React.Dispatch<React.SetStateAction<any[]>>;
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    loggedIn: boolean;
    displayType: string;
  }

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [pressedLikeButton, setPressedLikeButton] = useState(false);

    const displayLikedBooks = async () => {
        if (pressedLikeButton) {
            props.setDisplayType("all");
        } else {
            props.setDisplayType("liked");
            props.setCurrentPage(1);
        }
        setPressedLikeButton(!pressedLikeButton);
    };

    if (!(props.displayType === "liked") && pressedLikeButton && props.loggedIn) {
        setPressedLikeButton(false);
    }

    const showFilters = () => {
        if (props.filtersDisplay === "none") {
            props.setFiltersDisplay("block");
        } else {
            props.setFiltersDisplay("none");
        }
    };

    const displayResults = () => {
        props.setDisplayType("search");
        props.setCurrentPage(1);
    };
    
    return (
        <div id={styles["search-bar"]}>
            <div id={styles["search-field"]}>
                <svg id={styles["search-icon"]} onClick={() => displayResults()}xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="hover">
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
                    onChange={(e) => {props.setSearchInput(e.target.value); displayResults()} }
                    className="hover" 
                    id={styles["search-input"]} 
                    placeholder="Type book title/genre/name of author"
                ></input>

                <svg onClick={() => showFilters()} className="hover" id={styles["filters-icon"]} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
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
            {
                (props.displayType === "liked") && pressedLikeButton && props.loggedIn ? (
                    <svg onClick={displayLikedBooks} className="hover" id={styles["like-icon"]} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_18_9764"  style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="2" y="3" width="21" height="20">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 2.99991H22.4725V22.5009H2V2.99991Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_18_9764)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.82347 12.123C5.22547 16.485 10.7645 20.012 12.2365 20.885C13.7135 20.003 19.2925 16.437 20.6495 12.127C21.5405 9.341 20.7135 5.812 17.4275 4.753C15.8355 4.242 13.9785 4.553 12.6965 5.545C12.4285 5.751 12.0565 5.755 11.7865 5.551C10.4285 4.53 8.65447 4.231 7.03747 4.753C3.75647 5.811 2.93247 9.34 3.82347 12.123ZM12.2375 22.501C12.1135 22.501 11.9905 22.471 11.8785 22.41C11.5655 22.239 4.19247 18.175 2.39547 12.581C2.39447 12.581 2.39447 12.58 2.39447 12.58C1.26647 9.058 2.52247 4.632 6.57747 3.325C8.48147 2.709 10.5565 2.98 12.2345 4.039C13.8605 3.011 16.0205 2.727 17.8865 3.325C21.9455 4.634 23.2055 9.059 22.0785 12.58C20.3395 18.11 12.9125 22.235 12.5975 22.408C12.4855 22.47 12.3615 22.501 12.2375 22.501Z" fill="#FF529A"/>
                        </g>
                        <path d="M11.9792 8.83148C11.9792 7.97133 12.2344 6.53259 11.6091 5.87043C11.2965 5.53946 10.7543 5.48649 10.3177 5.42627C9.62581 5.33084 8.98378 5.27822 8.28198 5.27822C7.91706 5.27822 7.38755 5.18163 7.03587 5.29467C6.51779 5.46119 5.86485 6.00178 5.58824 6.45441C5.30123 6.92408 4.90232 7.3724 4.66703 7.86914C4.32226 8.59698 4.35447 9.50919 4.35447 10.2956C4.35447 10.9638 4.27379 11.7816 4.47374 12.4259C4.74374 13.2959 5.37239 14.1227 5.9995 14.77C6.99839 15.8011 7.87836 16.8967 8.98112 17.8298C9.89679 18.6046 11.5026 20.2235 12.7688 19.4131C13.6355 18.8584 14.3244 18.1742 15.0472 17.4514C15.561 16.9376 16.0817 16.3617 16.5112 15.7735C16.9881 15.1204 17.6031 14.5634 18.0329 13.8817C18.4825 13.1685 19.0599 12.4421 19.3448 11.6445C19.4275 11.4128 19.6039 10.7076 19.6039 10.9536C19.6039 11.2091 19.46 11.4509 19.3818 11.6897C19.2289 12.1571 19.1216 12.6643 18.8636 13.088C18.6633 13.4171 18.449 13.7653 18.3084 14.1244C18.1627 14.4968 17.8698 14.8366 17.6792 15.1977C17.5708 15.4031 17.406 15.5779 17.2803 15.7735C16.9839 16.2346 17.564 14.7129 17.7532 14.1984C18.1735 13.0559 18.6014 11.9657 19.2091 10.9124C19.4341 10.5225 19.9 9.98541 19.9 9.51417C19.9 9.03879 19.9224 8.54907 19.7931 8.0871C19.685 7.70114 19.3645 7.42229 19.1227 7.12476C18.541 6.40879 17.3054 6.00111 16.4208 5.77995C15.4476 5.53666 14.5389 5.61001 13.6242 6.00203C12.8024 6.35422 11.9451 6.75874 11.0374 6.75874C10.1774 6.75874 9.32883 6.83277 8.47116 6.83277C7.74782 6.83277 7.32371 7.43562 7.13046 8.05832C6.70008 9.44508 6.71302 11.2816 7.22505 12.6315C7.75903 14.0393 8.89188 15.5157 9.94757 16.5713C10.5462 17.17 11.278 17.5549 12.0779 17.8216C12.2482 17.8783 12.4873 17.9964 12.6701 17.912C13.0932 17.7167 13.4544 17.2457 13.764 16.9209C14.2167 16.4461 14.6839 15.9662 15.0677 15.4322C15.7114 14.5367 16.2744 13.4853 16.8073 12.5163C17.5128 11.2336 18.0532 9.64448 17.9753 8.16524C17.9565 7.80754 16.5115 7.78224 16.3056 7.75399C14.5118 7.50778 12.6883 7.73526 10.8852 7.61005C10.3854 7.57534 9.88899 7.57303 9.38826 7.57303C9.06345 7.57303 8.65449 7.50008 8.35189 7.64706C8.25524 7.694 8.08819 7.77316 8.13804 7.91026C8.19387 8.0638 8.41387 8.20128 8.52462 8.30096C8.90376 8.64218 9.25986 9.01016 9.65147 9.33733C10.901 10.3813 12.4105 10.4535 13.9614 10.5917C14.5447 10.6436 15.1193 10.6821 15.7052 10.6821C15.8827 10.6821 16.1287 10.7384 16.2727 10.6081C16.4351 10.4612 16.6119 10.3322 16.7868 10.201C17.0111 10.0328 15.9232 9.71044 15.8409 9.67867C14.54 9.17636 13.5489 9.04824 12.2259 9.54707C11.2565 9.91258 10.1902 10.2693 9.32657 10.8631C8.91112 11.1487 9.48586 11.7903 9.64735 12.0475C10.1129 12.7889 11.1509 13.9611 12.1684 13.6103C12.5953 13.4631 12.9961 13.0946 13.3857 12.8659C13.5249 12.7842 14.0803 12.5262 14.1218 12.3395C14.2085 11.9494 13.7581 11.574 13.5091 11.3648C13.0075 10.9434 12.2515 10.4101 11.5515 10.4601C11.3513 10.4744 11.1672 12.8163 11.1649 12.9934C11.1574 13.5607 11.1649 14.1286 11.1649 14.696C11.1649 14.9225 11.2841 14.947 11.424 15.1237C11.6622 15.4246 12.0693 15.83 12.4974 15.7077C12.7038 15.6487 12.9503 15.1204 13.0896 14.9592C13.3637 14.6421 13.6309 14.3194 13.8134 13.9393C14.0593 13.427 14.3186 12.9313 14.5948 12.4341C14.7975 12.0692 14.7752 11.924 14.7182 11.4964" stroke="#FF529A" strokeWidth="3" strokeLinecap="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.6664 9.92116C18.2794 9.92116 17.9514 9.62416 17.9194 9.23216C17.8534 8.41016 17.3034 7.71616 16.5204 7.46316C16.1254 7.33516 15.9094 6.91216 16.0364 6.51916C16.1654 6.12516 16.5844 5.91116 16.9804 6.03516C18.3434 6.47616 19.2984 7.68316 19.4154 9.11016C19.4484 9.52316 19.1414 9.88516 18.7284 9.91816C18.7074 9.92016 18.6874 9.92116 18.6664 9.92116Z" fill="white"/>
                    </svg>

                ) : ( 
                    <svg onClick={displayLikedBooks} className="hover" id={styles["like-icon"]} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF529A">
                        <mask id="mask0_1_1877" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="21">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 2.99988H22.4725V22.5009H2V2.99988Z" fill="#FF529A"/>
                        </mask>
                        <g mask="url(#mask0_1_1877)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.82371 12.123C5.22571 16.485 10.7647 20.012 12.2367 20.885C13.7137 20.003 19.2927 16.437 20.6497 12.127C21.5407 9.341 20.7137 5.812 17.4277 4.753C15.8357 4.242 13.9787 4.553 12.6967 5.545C12.4287 5.751 12.0567 5.755 11.7867 5.551C10.4287 4.53 8.65471 4.231 7.03771 4.753C3.75671 5.811 2.93271 9.34 3.82371 12.123ZM12.2377 22.501C12.1137 22.501 11.9907 22.471 11.8787 22.41C11.5657 22.239 4.19271 18.175 2.39571 12.581C2.39471 12.581 2.39471 12.58 2.39471 12.58C1.26671 9.058 2.52271 4.632 6.57771 3.325C8.48171 2.709 10.5567 2.98 12.2347 4.039C13.8607 3.011 16.0207 2.727 17.8867 3.325C21.9457 4.634 23.2057 9.059 22.0787 12.58C20.3397 18.11 12.9127 22.235 12.5977 22.408C12.4857 22.47 12.3617 22.501 12.2377 22.501Z" fill="#FF529A"/>
                        </g>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.1537 10.6249C17.7667 10.6249 17.4387 10.3279 17.4067 9.9359C17.3407 9.1139 16.7907 8.4199 16.0077 8.1669C15.6127 8.0389 15.3967 7.6159 15.5237 7.2229C15.6527 6.8289 16.0717 6.6149 16.4677 6.7389C17.8307 7.1799 18.7857 8.3869 18.9027 9.8139C18.9357 10.2269 18.6287 10.5889 18.2157 10.6219C18.1947 10.6239 18.1747 10.6249 18.1537 10.6249Z" fill="#FF529A"/>
                    </svg>
                   
                )
            }
        </div>  
    );
}

export default SearchBar