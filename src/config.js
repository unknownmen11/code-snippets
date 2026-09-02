// Shared config template

export const CONFIG = {
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000,
  },
  features: {
    enableLogging: true,
    enableCache: false,
  },
};

export function getEnv(key, fallback) {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] ?? fallback;
  }
  return fallback;
}
