import { API_BASE } from "../constants/ApiConstants";

export async function createApplication(payload) {
  const res = await fetch(`${API_BASE}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to save application: ${res.status} ${text}`);
  }
  return res.json();
}
