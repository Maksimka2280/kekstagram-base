import{loadPublications} from "./publication-load.js";
import{ openFullScreen} from "./fullscreen.js";
import { startfilter } from "./filter.js";
import { startUpLoad } from "./upload-publications.js";
import { startScalePublication } from "./publication-scale.js";
import { startPublicationFilters } from "./publications-filter.js";
startfilter();
loadPublications();
openFullScreen();
startUpLoad()
startScalePublication()
startPublicationFilters()
