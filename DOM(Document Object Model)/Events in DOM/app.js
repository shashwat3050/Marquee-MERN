const box4 = document.getElementById("div4");
const box3 = document.getElementById("div3");
const box2 = document.getElementById("div2");
const box1 = document.getElementById("div1");

const logEvent = (phase, id) => {
    console.log(`${phase}: ${id}`);
};

// Capturing Phase
box4.addEventListener("click", () => logEvent("capture", "div4"), true);
box3.addEventListener("click", () => logEvent("capture", "div3"), true);
box2.addEventListener("click", () => logEvent("capture", "div2"), true);
box1.addEventListener("click", () => logEvent("capture", "div1"), true);

// Bubbling Phase
box4.addEventListener("click", () => logEvent("bubble", "div4"));
box3.addEventListener("click", () => logEvent("bubble", "div3"));
box2.addEventListener("click", () => logEvent("bubble", "div2"));
box1.addEventListener("click", () => logEvent("bubble", "div1"));