import type { DecodedToken } from "@shared/schema";

export function decodeJWT(token: string): DecodedToken | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to decode JWT:', error);
    return null;
  }
}

export function setAuthToken(token: string): void {
  localStorage.setItem('authToken', token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem('authToken');
}

export function clearAuthToken(): void {
  localStorage.removeItem('authToken');
}

export function isAuthenticated(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  
  const decoded = decodeJWT(token);
  if (!decoded) return false;
  
  if (decoded.exp * 1000 < Date.now()) {
    clearAuthToken();
    return false;
  }
  
  return true;
}

export function getUserRole(): string | null {
  const token = getAuthToken();
  if (!token) return null;
  
  const decoded = decodeJWT(token);
  return decoded?.roles || null;
}
