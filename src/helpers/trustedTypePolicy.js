import DOMPurify from 'dompurify';
import { trustedTypes } from 'trusted-types';

export const trustedTypePolicy = trustedTypes.createPolicy(
  'trusted-type-policy',
  {
    createHTML: (html) => DOMPurify.sanitize(html),
  }
);
