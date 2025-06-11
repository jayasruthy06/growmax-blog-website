import createDOMPurify from 'dompurify';

let DOMPurifyBackend = null;

// Only initialize jsdom for backend environments
if (typeof window === 'undefined') {
  const { JSDOM } = require('jsdom');
  const window = new JSDOM('').window;
  DOMPurifyBackend = createDOMPurify(window);
}

// Frontend DOMPurify will use the browser's window
let DOMPurifyFrontend = null;
if (typeof window !== 'undefined') {
  DOMPurifyFrontend = createDOMPurify(window);
}

// ----------------------
// Backend HTML Sanitizer
// ----------------------
export function sanitizeHTMLBackend(html) {
  try {
    if (!DOMPurifyBackend) {
      throw new Error('DOMPurifyBackend not initialized');
    }

    if (!html || typeof html !== 'string') {
      console.warn('sanitizeHTMLBackend: Input is empty or not a string');
      return '';
    }

    const clean = DOMPurifyBackend.sanitize(html, {
      USE_PROFILES: { html: true },
      ALLOWED_TAGS: [
        'b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br',
        'h1', 'h2', 'h3', 'h4', 'img', 'blockquote', 'code', 'pre',
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'target'],
    });

    console.log('sanitizeHTMLBackend: input =', html);
    console.log('sanitizeHTMLBackend: output =', clean);

    return clean;
  } catch (error) {
    console.error('sanitizeHTMLBackend: Failed to sanitize HTML', error);
    return '';
  }
}

// ----------------------
// Frontend HTML Sanitizer
// ----------------------
export function sanitizeHTMLFrontend(html) {
  try {
    if (!DOMPurifyFrontend) {
      throw new Error('DOMPurifyFrontend not initialized');
    }

    if (!html || typeof html !== 'string') {
      console.warn('sanitizeHTMLFrontend: Input is empty or not a string');
      return '';
    }

    const clean = DOMPurifyFrontend.sanitize(html, {
      USE_PROFILES: { html: true },
      ALLOWED_TAGS: [
        'b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br',
        'h1', 'h2', 'h3', 'h4', 'img', 'blockquote', 'code', 'pre',
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'target'],
    });

    return clean;
  } catch (error) {
    console.error('sanitizeHTMLFrontend: Failed to sanitize HTML', error);
    return '';
  }
}

// ----------------------
// Text Sanitizer
// ----------------------
export function sanitizeText(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/[<>\"']/g, '').trim().slice(0, 255);
}

// ----------------------
// Slug Sanitizer
// ----------------------
export function sanitizeSlug(slug) {
  if (typeof slug !== 'string') return '';

  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\/-]+/g, '')   
    .replace(/\/{2,}/g, '/')         
    .replace(/^-+|-+$/g, '')        
    .replace(/^\/+|\/+$/g, '');      
}
