module.exports = async function formatDate(string) {
  const date = string.split('/');
  const newDate = new Date(`${date[1]}/${date[0]}/${date[2]}`);
  return new Date(newDate);
};
