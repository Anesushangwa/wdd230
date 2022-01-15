// const options = {weekday:'long' , day: 'numeric', month: 'long', year: 'numeric' };

const lastmodify = "Last modify:";

let oLastModif = new Date(document.lastModified);

const text = `${ lastmodify} ${oLastModif }`;

document.getElementById("updatetime").innerHTML = text;
