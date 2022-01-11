export function getObByHash(hash, array) {
  const newArray = array.filter(value => {
    return value.hash === hash;
  });
  if (newArray.length > 0) {
    return newArray[0];
  } else {
    return null;
  }
}
