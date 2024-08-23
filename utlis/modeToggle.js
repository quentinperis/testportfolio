export const handleDarkMode = (modeName) => {
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");

  const htmlElm = document.body;
  const isDarkMode = localStorage?.getItem("isLightMode");

  if (modeName == "dark") {
    sun.style.display = "block";
    moon.style.display = "none";
    htmlElm.classList.remove("light");
    localStorage.setItem("isLightMode", false);
  } else if (modeName == "light") {
    sun.style.display = "none";
    moon.style.display = "block";
    htmlElm.classList.add("light");
    localStorage.setItem("isLightMode", true);
  } else {
    if (JSON.parse(isDarkMode)) {
      sun.style.display = "block";
      moon.style.display = "none";
      htmlElm.classList.remove("light");
      localStorage.setItem("isLightMode", false);
    } else {
      sun.style.display = "none";
      moon.style.display = "block";
      htmlElm.classList.add("light");
      localStorage.setItem("isLightMode", true);
    }
  }
};
export const getMode = () => {
  const htmlElm = document.body;
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");

  const isDarkMode = localStorage?.getItem("isLightMode");
  if (JSON.parse(isDarkMode)) {
    sun.style.display = "none";
    moon.style.display = "block";
    htmlElm.classList.add("light");
  } else {
    sun.style.display = "block";
    moon.style.display = "none";
    htmlElm.classList.remove("light");
  }
};
