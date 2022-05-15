import DOMPurify from 'dompurify';

export const dompurifyTrustedType = (s) => {
  return DOMPurify.sanitize(s, { RETURN_TRUSTED_TYPE: true });
  return s + 'hello';
  //return DOMPurify.sanitize(s, { RETURN_TRUSTED_TYPE: true });
};
