// The entry file of your WebAssembly module.

import "wasi";
import { Console } from "as-wasi/assembly/index";

export function add(a: i32, b: i32): i32 {
  return a + b;
}

Console.log("hello world");
