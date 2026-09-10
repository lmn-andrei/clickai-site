export function isMigrationFile(name) {
  return typeof name === "string" && name.endsWith(".sql");
}
