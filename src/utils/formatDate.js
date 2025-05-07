module.exports = async function formatDate(string) {
  const now = new Date();
  const date = string.split('/');
  const newDate = new Date(
    date[2],
    Number(date[1]) - 1,
    date[0],
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds(),
  );

  return new Date(newDate);
};
