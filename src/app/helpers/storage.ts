const ACCESS_TOKEN_KEY = 'accessToken';

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function clearAuthToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function updateAuthToken(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}
