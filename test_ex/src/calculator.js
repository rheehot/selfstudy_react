import axios from "axios";

export const add = (a, b) => {
  return a + b;
};

export const getNumbers = async () => {
  return fetch("http://localhost:5001/numbers");
};

export const addArrayNumbers = (arr) => {
  let sum = 0;

  arr.map((a) => {
    sum = sum + a;
  });

  return sum;
};
