const calculateStylePoints = (styleNotes) => {
  let sum;
  if (styleNotes.length === 5) {
    const min = Math.min(...styleNotes);
    const max = Math.max(...styleNotes);
    sum = (styleNotes.reduce((acc, curr) => acc + curr, 0)) - min - max;
    return sum;
  } else {
    return `Wrong notes`;
  }
}


module.exports = calculateStylePoints;
