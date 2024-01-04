// hi this is the first commit 
// const heading = React.createElement("h1",{},"hello world from React");
// const root = reactDOM.createRoot.(document.getElementById("root"));
// root.render(heading);

const heading = document.createElement("h1");
heading.innerHTML = "Hello world from javascript"
const root = document.getElementById("root");
root.appendChild(heading);