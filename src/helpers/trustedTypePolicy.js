import DOMPurify from 'dompurify';
import { trustedTypes } from 'trusted-types';

export const trustedTypePolicy = trustedTypes.createPolicy('dompurify', {
  createHTML: (html) => DOMPurify.sanitize(html),
});
