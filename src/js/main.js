import { data } from './homesSection.js';
import { createCard, displayContent } from './homesSection.js';

import { filterEl, formEl, showFilter} from './filterHotel.js';

document.addEventListener('click', showFilter);
// filterEl.addEventListener('click', counterAdults);
// filterEl.addEventListener('click', counterChildren);
// filterEl.addEventListener('click', counterRoom);

displayContent(data);
