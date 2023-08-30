export default function sortDescending(arr) {
  const sortedInformation = arr.sort((a,b) => (b.health-a.health));

  return sortedInformation;
}