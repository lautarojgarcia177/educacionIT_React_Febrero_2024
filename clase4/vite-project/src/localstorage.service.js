export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function readLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}