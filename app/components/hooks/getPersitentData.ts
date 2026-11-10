export function getPersistenceKey(key: string): string | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  const userStorage = localStorage.getItem("user-storage");
  if (!userStorage) {
    return undefined;
  }

  const parsedStorage = JSON.parse(userStorage);
  return parsedStorage?.state?.[key];
}
