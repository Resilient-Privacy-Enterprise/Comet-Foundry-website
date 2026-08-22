export type SecurityEvent =
  | 'RATE_LIMIT'
  | 'BOT_DETECTED'
  | 'INVALID_INPUT'
  | 'CORS_VIOLATION'
  | 'XSS_ATTEMPT'
  | 'FAST_SUBMIT'
  | 'BODY_TOO_LARGE';

export function logSecurityEvent(event: SecurityEvent, details: Record<string, unknown> = {}) {
  try {
    console.error(
      JSON.stringify({
        level: 'security',
        timestamp: new Date().toISOString(),
        event,
        ...details,
      })
    );
  } catch {
    console.error('security-log', event);
  }
}
