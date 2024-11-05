//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';
import { cmsfilter } from '@finsweet/attributes-cmsfilter';

//Modal
import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { emailModal } from '$utils/email-modal';
import { createdBy } from '$utils/createdBy';

window.Webflow ||= [];
window.Webflow.push(() => {
  //nestedElement();
  linkblockedit();
  cmsfilter();
  modal();
  emailModal();
  //swipers();
  createdBy();
});
