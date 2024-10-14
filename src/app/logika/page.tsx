import { useState } from "react";

export default function App(){

  let array1 = [1, 5, 3, 7, 2];
  let array2 = [3, 1, 5, 2, 4];

  function getMaxInArray(array:number[]){
    let maxNum = 0;
    for (const el of array) {
      if(el > maxNum){
        maxNum = el;
      }
    }
    return maxNum;
  }

  function getValueFromArrSorting(array:number[]) {
    let sortedNumbers = [...array];
    for (let i = 0; i < sortedNumbers.length; i++) {
      for (let j = 0; j < sortedNumbers.length - 1; j++) {
        if (sortedNumbers[j] > sortedNumbers[j + 1]) {
          const temp = sortedNumbers[j];
          sortedNumbers[j] = sortedNumbers[j + 1];
          sortedNumbers[j + 1] = temp;
        }
      }
    }
    return sortedNumbers;
  };


  return (
    <div className="w-full flex flex-col p-6">
      <ul>
        <li>
          <p>1. Buatlah sebuah fungsi yang dapat menemukan angka terbesar dari sebuah array. Contoh: Jika array yang diberikan adalah `[1, 5, 3, 7, 2],` maka hasilnya adalah `7` ***dalam bahasa PHP atau Next.js.***</p>
        </li>
        <li>
          <p>2. Buatlah sebuah fungsi untuk mengurutkan angka dalam sebuah array dari yang terkecil ke yang terbesar. Contoh: Jika array yang diberikan adalah `[3, 1, 5, 2, 4],` maka hasilnya adalah  `[1, 2, 3, 4, 5]` ***dalam bahasa PHP atau Next.js***.</p>
        </li>
      </ul>
      <br /><hr /><br />
      <table className="w-100 table-auto border-collapse border border-gray-300 shadow-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">Array</th>
            <th className="border border-gray-300 px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 text-center">1</td>
            <td className="border border-gray-300 px-4 py-2">{array1.toString()}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{getMaxInArray(array1)}</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 text-center">2</td>
            <td className="border border-gray-300 px-4 py-2">{array2.toString()}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{getValueFromArrSorting(array2).toString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}