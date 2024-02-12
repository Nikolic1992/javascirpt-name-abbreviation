function abbrevName(name) {
  const names = name.split(" "); // Splitting the string at the space
  const firstInitial = names[0].charAt(0).toUpperCase(); // Taking the first character of the first part of the string
  const secondInitial = names[1].charAt(0).toUpperCase(); // Taking the first character of the second part of the string
  return `${firstInitial}.${secondInitial}`;
}

console.log(abbrevName("Stevan Nikolic")); // Output: S.N
console.log(abbrevName("patrick feeney")); // Output: P.F
