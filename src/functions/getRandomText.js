import { data } from "../data/data.js";

export const getRandomText = () => {
  const texts = data[0].text;

  const text = texts[Math.floor(Math.random() * texts.length)];

  return text;
};