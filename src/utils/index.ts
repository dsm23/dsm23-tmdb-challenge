export const classNames = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
