let showCourses = false;

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
  // console.log("Navigate to :", dataAttrPageName)
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
  const courseList = document.getElementsByClassName("course-list")[0];
  const courseBtn = document.getElementsByClassName("course-btn")[0];
  if (!showCourses) {
    courseList.style["max-height"] = "500px";
    courseBtn.innerText = "Close Course List";
  } else {
    courseList.style["max-height"] = "0px";
    courseBtn.innerText = "Show Course List";
  }
  showCourses = !showCourses
}

const onLoad = () => {
  console.log("Loaded")
  const box = document.getElementsByClassName("box")[0];
  // navigate("intro");
  setTimeout(() => navigate("intro"), 100);
  setTimeout(() => {
    if (box.getAttribute("data-focus") === "intro")
      navigate("landing")
  }, 2000);
}