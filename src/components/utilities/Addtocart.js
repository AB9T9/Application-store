const getApps = () => {
  const apps = localStorage.getItem("installed");
  if (apps) {
    const appsParse = JSON.parse(apps);
    return appsParse;
  } else {
    return [];
  }
};
const setApps = (id) => {
  const data = getApps();
  if (data.includes(id)) {
    alert("item already exits");
  } else {
    const newCart = [...data, id];
    const dataStringfied = JSON.stringify(newCart);
    localStorage.setItem("installed", dataStringfied);
  }
};
const removeItem = (id) => {
  const ids = getApps();
  const remain = ids.filter((e) => e !== id);
  const dataStringfied = JSON.stringify(remain);
  localStorage.setItem("installed", dataStringfied);
};

export { getApps, setApps, removeItem };
