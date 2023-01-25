
const test = () => {
  hideLanding();
  console.log("Hello world")
}

const hideLanding = () => {
  const landingBox = document.getElementsByClassName("box")[0];
  console.log(landingBox);
  landingBox.setAttribute("data-focus", "hey there")
}

const navigate = (dataAttrPageName) => {
  const box = document.getElementsByClassName("box")[0];
  if (dataAttrPageName === "landing") {
    box.setAttribute("data-focus", dataAttrPageName);
    return
  }
  
  box.setAttribute("data-focus", "")
  setTimeout(() => {
    box.setAttribute("data-focus", dataAttrPageName)
  }, 200);
}

const educationToggleCourses = () => {
  const classesBox = document.getElementsByClassName("classes")[0];
  classesBox.setAttribute("data-classes-expand", classesBox.getAttribute("data-classes-expand") === "true" ? "false" : "true")
}

const onLoad = () => {
  console.log("Loaded")
  const box = document.getElementsByClassName("box")[0];
  setTimeout(() => navigate("intro"), 100);
  setTimeout(() => {
    if (box.getAttribute("data-focus") === "intro")
      navigate("landing")
  }, 3000);
}