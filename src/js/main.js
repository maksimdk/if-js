import { data } from './homesSection.js';
import { createCard, displayContent } from './homesSection.js';

import {formEl, showFilter} from './filterHotel.js';

document.addEventListener('click', showFilter);
displayContent(data);
