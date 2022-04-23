export const createId = (arrList) => {
  const idList = arrList.map((item) => {
    const lastId = item.id
    return lastId.slice(1)   
  });
  const maxId = Math.max(...idList);
  return `m${maxId + 1}`;
}