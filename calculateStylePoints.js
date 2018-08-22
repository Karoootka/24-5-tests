const calculateStylePoints = (styleNotes) => {
  let points;

  if (styleNotes.length === 5) {
    const min = Math.min(...styleNotes);
    const max = Math.max(...styleNotes);

    points = (styleNotes.reduce((acc, curr) => acc + curr, 0)) - min - max;

    return points;
    
  } else {
    return `Wrong notes`;
  }
}


module.exports = calculateStylePoints;
