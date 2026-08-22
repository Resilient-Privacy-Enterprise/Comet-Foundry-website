export type ValidationResult =
  | { valid: true; value: string }
  | { valid: false; error: string };

const stripDangerous = (s: string) =>
  s
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:text\/html/gi, '');

export const validators = {
  name(value: unknown): ValidationResult {
    if (typeof value !== 'string' || !value.trim()) return { valid: false, error: 'Name is required' };
    if (value.length > 100) return { valid: false, error: 'Name too long' };
    const clean = stripDangerous(value).replace(/["'\\/]/g, '').trim();
    if (!clean) return { valid: false, error: 'Invalid name' };
    return { valid: true, value: clean };
  },

  email(value: unknown): ValidationResult {
    if (typeof value !== 'string') return { valid: false, error: 'Invalid email' };
    const v = value.trim();
    if (v.length > 254) return { valid: false, error: 'Email too long' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return { valid: false, error: 'Invalid email' };
    return { valid: true, value: v.toLowerCase() };
  },

  message(value: unknown, max = 4000): ValidationResult {
    if (typeof value !== 'string') return { valid: false, error: 'Message is required' };
    if (value.length > max) return { valid: false, error: 'Message too long' };
    return { valid: true, value: stripDangerous(value).trim() };
  },

  subject(value: unknown, max = 200): ValidationResult {
    if (typeof value !== 'string') return { valid: false, error: 'Invalid subject' };
    if (value.length > max) return { valid: false, error: 'Subject too long' };
    return { valid: true, value: stripDangerous(value).trim() };
  },
};

export const ALLOWED_ORIGINS = [
  'https://www.cometfoundry.com',
  'https://cometfoundry.com',
];
