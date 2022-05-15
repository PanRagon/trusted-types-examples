import DOMPurify from 'dompurify';
import { trustedTypes } from 'trusted-types';

export const trustedTypePolicy = trustedTypes.createPolicy(
  'dompurify',
  {
    createHTML: (html) =>
      DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }),
  },
  false
);

export const defaultTrustedTypePolicy = trustedTypes.createPolicy(
  'default',
  {
    createHTML: (html) =>
      DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }),
  },
  false
);
