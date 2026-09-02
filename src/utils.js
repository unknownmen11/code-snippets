// Simple utility functions used across projects

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-CA', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  }).format(date);
}

export function truncate(str, max = 40) {
  if (!str || str.length <= max) return str;
  return str.slice(0, max - 3) + '...';
}

export function parseJSONSafe(json, fallback = null) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}
