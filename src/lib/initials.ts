export function getInitials(name: string) {
  const cleaned = name.replace(/^(Dr\.|Prof\.|Chairman,?)\s*/i, "");
  const words = cleaned.split(/[\s,]+/).filter(Boolean);
  return (
    words
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || "?"
  ).toUpperCase();
}
