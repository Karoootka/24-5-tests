const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let points = 60;

  if (hillSize === "normal") {
    points = points + ((distance - kPoint) * 2);
    return points;
  }

  if(hillSize === "big") {
    points = points + ((distance - kPoint) * 1.8);
    return points;
  }

  if(hillSize === "mamooth") {
    points = 2*points + ((distance - kPoint) * 1.2);
    return points;
  }

  return 'Wrong hill size name';
}


module.exports = calculateDistancePoints;
