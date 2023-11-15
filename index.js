// Add your code here

function submitData(name, email) {
  const objectConfig = {
    method: "POST",
    headers: { "Content-type": "application/json", Accept: "application/json" },
    // Pass the arguments instead of the strings
    body: JSON.stringify({ name: name, email: email }),
  };

  return (
    fetch("http://localhost:3000/users", objectConfig)
      .then((res) => res.json())
      .then((res) => renderData(res))
      // prints out in red console.error same as console.log
      .catch((error) => {
        console.error(error);
        const p = document.createElement("p");
        p.innerHTML = error;
        document.body.append(p);
      })
  );
}

function renderData(data) {
  const h1 = document.createElement("h1");
  console.log(data);
  h1.innerHTML = `Hi! My name is ${data.name}, my id is ${data.id}, and my email is ${data.email}`;
  document.body.append(h1);
}

submitData("Hairo", "hairo.barnard@gmail");
