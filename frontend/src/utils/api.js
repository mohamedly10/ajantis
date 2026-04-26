const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api').replace(/\/$/, '');

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
    mode: 'cors',
  });

  const isJson = response.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    const message = data?.message || `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}

export async function fetchProducts() {
  const products = await apiFetch('/products');
  if (!Array.isArray(products)) return [];

  return products.map((product) => ({
    ...product,
    price: Number(product.price) || 0,
  }));
}

export async function createOrder(payload) {
  return apiFetch('/orders', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function fetchWebsiteContent() {
  return apiFetch('/content');
}

export async function trackVisit() {
  try {
    await apiFetch('/visit', { method: 'POST' });
  } catch (error) {
    // Non-blocking: just log to console so UX isn't interrupted
    console.debug('Visit tracking failed', error.message);
  }
}

export async function fetchHeroSlides() {
  return apiFetch('/hero-slides');
}
