const PALETTES = [
  { bg: "d9cfc0", fg: "3a332b" },
  { bg: "c9b8a0", fg: "2f2a24" },
  { bg: "ada393", fg: "211d18" },
  { bg: "e4ddd1", fg: "55504a" },
];

/** Builds a placehold.co URL so every stand-in image is labeled and on-brand until real photos arrive. */
export function ph(width: number, height: number, label: string, variant = 0) {
  const { bg, fg } = PALETTES[variant % PALETTES.length];
  const text = encodeURIComponent(label);
  return `https://placehold.co/${width}x${height}/${bg}/${fg}.png?text=${text}&font=roboto`;
}
