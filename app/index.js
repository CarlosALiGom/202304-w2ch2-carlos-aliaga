import { strictEquals } from "./functions/function.js";

console.log(`When valueA is = 1       and valueB = 1      result = ${strictEquals(1, 1)}`);
console.log(`When valuaA is = NaN     and valueB = NaN    result = ${strictEquals(NaN, NaN)}`);
console.log(`When valuaA is = 0       and valueB = -0     result = ${strictEquals(0, -0)}`);
console.log(`When valueA is = -0      and valueB = 0      result = ${strictEquals(-0, 0)}`);
console.log(`When valueA is = 1       and valueB = "1"    result = ${strictEquals(1, "1")}`);
console.log(`When valueA is = true    and valueB = false  result = ${strictEquals(true, false)}`);
console.log(`When valueA is = false   and valueB = false  result = ${strictEquals(false, false)}`);
console.log(`When valueA is = "water" and valueB = "oil"  result = ${strictEquals("water", "oil")}`);
console.log(`When valueA is = 1       and valueB = -1     result = ${strictEquals(1, -1)}`);
console.log(`When valueA is = null    and valueB = null   result = ${strictEquals(null,null)}`);
console.log(`When valueA is = 8       and valueB = 8      result = ${strictEquals(8,8)}`);
console.log(`When valueA is = 10      and valueB = 100    result = ${strictEquals(10, 100)}`);
console.log(`When valueA is = "TNR"   and valueB = "TNR"  result = ${strictEquals("TNR", "TNR")}`);
