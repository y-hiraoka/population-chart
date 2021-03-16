export const randomColor = () => {
  return (
    "#" +
    [0, 1, 2, 3, 4, 5]
      .map(_ => Math.floor(Math.random() * 0x10).toString(16))
      .join("")
  );
};
