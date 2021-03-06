import { createAsyncThunk } from "@reduxjs/toolkit";
//非同期用アクション
const sleep = (microSecond: number) =>
  new Promise((resolbe) => setTimeout(resolbe, microSecond));

export const asyncIncrementCounter = createAsyncThunk<number, number>(
  "redux/asyncIncrementCounter",
  async (arg: number): Promise<number> => {
    await sleep(1000);

    const randNum = Math.floor(Math.random() * Math.floor(10));
    if (randNum === 0 || randNum === 5 || randNum === 1) {
      return Promise.reject(new Error("asyncIncrementCounter error"));
    }

    return arg;
  }
);
