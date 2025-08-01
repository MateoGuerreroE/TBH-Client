export const formatPrice = (price: number | string | undefined) => {
  if (price === undefined || price === null) {
    return "$0";
  }

  if (typeof price === "string") {
    price = parseFloat(price);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const cleanEmptyObjects = (baseObject: Record<string, unknown>) => {
  const cleanedObject: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(baseObject)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nestedObject = cleanEmptyObjects(value as Record<string, unknown>);
      if (Object.keys(nestedObject).length > 0) {
        cleanedObject[key] = nestedObject;
      }
    } else if (value !== undefined && value !== null) {
      cleanedObject[key] = value;
    }
  }

  return cleanedObject;
};

export function formatCapsString(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
