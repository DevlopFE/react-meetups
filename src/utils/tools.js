export const createId = (arrList) => {
  if (arrList.length === 0) return "m1";
  const idList = arrList.map((item) => {
    const lastId = item.id
    return lastId.slice(1)   
  });
  const maxId = Math.max(...idList);
  return `m${maxId + 1}`;
}