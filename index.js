function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation <= 42) {
    return 42 - pickupLocation;
  } else {
    return pickupLocation - 42;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  const feetInABlock = 264;
  if (pickupLocation <= 42) {
    return 42 * feetInABlock - pickupLocation * feetInABlock;
  } else {
    return pickupLocation * feetInABlock - 42 * feetInABlock;
  }
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
  if (pickupLocation >= dropoffLocation) {
    return (pickupLocation - dropoffLocation) * 264;
  } else {
    return (dropoffLocation - pickupLocation) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let tripDistance = distanceTravelledInFeet(start, destination);
  if (tripDistance <= 400) {
    return 0;
  } else if (tripDistance > 400 && tripDistance <= 2000) {
    return (tripDistance - 400) * 0.02;
  } else if (tripDistance > 2000 && tripDistance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
