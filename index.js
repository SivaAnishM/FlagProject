async function fetchdata() {
  let response = await fetch("http://192.168.0.104:5500/data.json");
  let info = await response.json();
  return info;
}
async function addData() {
  let data = await fetchdata();
}
addData();
