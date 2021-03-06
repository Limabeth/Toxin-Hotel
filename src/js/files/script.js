// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// Connect services
import "./services/preventSubmit.js";

// Connect custom scripts
import './pie-chart.js';

// Connect API, such as sliders, range sliders, scroll...
import './sliders.js';
import './datepicker.js';

// Connect script files for pages
import './pages/rooms.js';

// Connect script files for common sections
import '../../modules/common/header/header.js';
import '../../modules/common/footer/footer.js';

// Connect script files for form modules
import '../../modules/forms/dropdown/dropdown.js';
import '../../modules/forms/range-slider/range-slider.js';
import '../../modules/forms/checkbox-list/checkbox-list.js';

// Connect script files for UI modules
import '../../modules/ui/like-btn/like-btn.js';
