// Centralized form submission — wired to the KZC Formspree endpoint.
// To change the endpoint or add Calendly, edit the constants below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnnekejq';

// Set your Calendly scheduling URL (e.g. 'https://calendly.com/kzc-logistics/consultation')
// to enable the inline scheduler on the Contact page.
export const CALENDLY_URL = '';

/**
 * Submits form data to Formspree as JSON.
 * @param {Record<string, any>} data
 * @returns {Promise<object>} Formspree response
 */
export async function submitForm(data) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Submission failed');
  return res.json();
}