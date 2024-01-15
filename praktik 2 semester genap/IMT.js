const beratmadan = 60;
const tinggimadan = 1.06;

const beratjoan = 64;
const tinggijoan = 1.65;

const imtMadan = beratmadan / tinggimadan ** 2;
const imtJoan = beratjoan / tinggijoan ** 2;

const madanHigherIMT = imtMadan > imtJoan;

console.log("imtMadan: " + imtMadan);
console.log("imtJoan: " + imtJoan);
console.log(
  "apakah IMT madan lebih besar dari IMT joan: 😊😊 " + madanHigherIMT
);
