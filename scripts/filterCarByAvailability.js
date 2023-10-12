function filterCarByAvailability(cars) {
  const result = [];

  cars.forEach((car) => {
    if (car.available === true){
      result.push(car);
    }
  });
  return result;
}
