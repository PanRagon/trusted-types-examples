import DOMPurify from 'dompurify';

export const dompurifyTrustedType = (html) => {
  return DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true });
};
