export const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
) => {
  const finalobj: Partial<T> = {}
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalobj[key] = obj[key]
    }
  }
  return finalobj
}
