const div = document.querySelector(".result");
const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  filterData(e.target.value);
});
getData();
async function getData() {
  const resp = await fetch("https://randomuser.me/api?results=50");
  const data = await resp.json();
  console.log(data);

  data.results.forEach((result) => {
    const list = document.createElement("li");
    list.innerHTML = `
    <img src="${result.picture.large}">
    
    <div className="user-info">
    <h3>${result.name.first}</h3>
    <p>${result.location.city}, ${result.location.country}</p>
    </div>`;

    div.append(list);
  });
}
function filterData(searchTerm) {
  const list = document.querySelectorAll("li");
  list.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
