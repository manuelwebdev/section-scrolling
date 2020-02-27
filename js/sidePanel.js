// Side Panel data
const data = {
    proj1: {
        name: "Project 1",
        another: "Volleyball"
    },
    proj2: {
        name: "Project 2",
        another: "Potato chips"
    }
};

const updatePage = (data) => Object.entries(data).forEach(([key, val]) => document.querySelector(`#${key}`).textContent = val)

const init = () => {
    // updatePage(data.defaultData);
    document.querySelector("#one").addEventListener('click', () => updatePage(data.proj1));
    // document.querySelector("#two").addEventListener('click', () => updatePage(data.data2));
}
document.addEventListener('DOMContentLoaded', init);


//Side Panel Controller
const openSide = () => {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("mySidenav").style.boxSizing = "border-box";
    document.getElementById("main").style.marginRight = "75%";
    document.getElementById("main").style.width = "25%";
    document.getElementById("main").style.transition = "0.5s";
    document.getElementById("main").style.boxSizing = "border-box";
    document.getElementById("mySidenav").style.padding = "60px 1em 1em 3em";
    // document.querySelector('name1').textContent = data.proj1.name;
}
const closeSide = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.padding = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("main").style.width = "100%";
}