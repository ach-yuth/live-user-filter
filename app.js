const div = document.querySelector(".result");
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
