

import { showFilter } from './form/filterHotel.js';
import { searchBtn, searchHotels } from './form/searchHotel.js';

document.addEventListener('click', showFilter);
searchBtn.addEventListener('click', searchHotels);
