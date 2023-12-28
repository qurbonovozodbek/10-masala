// 1 - masala

// let text = "hello";
// function reverse(text) {
//   return text.split("").reverse().join("");
// }
// console.log(reverseText(text));


// 2 - masala 
// bu masalaga tushinmadm!


// 3 - masala 

// let string = "Mashina";

// function polidromMi(string) {
//   string = string.toLowerCase();

//   let reverse = string.split("").reverse().join("").toLowerCase();

//   if (string == reverse) {
//     return "Bu so'z polidrom";
//   } else {
//     return "Bu so'z polidromas";
//   }
// }
// console.log(polidromMi(string));


// 4 - masala 

// const sozlar = "this car , bu mashina";

// function words(sozlar) {
//   const gap = sozlar.split(" ");
//   let words = "";

//   for (const gap of words) {
//     if (gap.length > words.length) {
//       words = gap;
//     }
//   }

//   return words;
// }

// console.log(words(sozlar));


// 5 - masala 

// let soz = "salom ozodbek qalesiz";
// let yangisoz = "";

// function upperCase(soz) {
//   soz = soz.split(" ");
//   for (const i of soz) {
//     const firstUpper = i.charAt(0).toUpperCase() + i.slice(1);
//     yangisoz = yangisoz + firstUpper + " ";
//   }
//   return yangisoz.trim();
// }

// console.log(upperCase(soz));


// 6 - masala

// let harf = "oooozzzzooooddddbbbbeeeekkkk";
// let counter = 1;
// let max = "";

// function sanagich(harf) {
//   for (let i = 0; i < harf.length; i++) {
//     if (harf[i] == harf[i + 1]) {
//       counter++;
//     } else {
//       max += harf[i] + counter;
//       counter = 1;
//     }
//   }
//   return max;
// }
// console.log(sanagich(harf));