const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.filter(function (item) {
    return item === true;
  }).length;

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);


// return arrayOfSheeps.filter(Boolean).length;