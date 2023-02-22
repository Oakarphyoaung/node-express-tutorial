
const fetchData = async () => {
  const testDataObj = {
    name: "Aung Myanmar",
    email: "aung@gmail.com",
    age: 29,
  };
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testDataObj),
  });
  const data = await response.json();
  console.log(data);
};



