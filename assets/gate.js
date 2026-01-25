document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("access") === "true") {
    document.getElementById("content").style.display = "block";
  }
});

function check() {
  const input = document.getElementById("pw").value;
  const hash = btoa(input);
  const correct = "Ym95b3Vzb2hhbmRzb21l"; // base64("boyousohandsome")

  if (hash === correct) {
    localStorage.setItem("access", "true");
    document.getElementById("content").style.display = "block";
    document.getElementById("error").innerText = "";
  } else {
    document.getElementById("error").innerText = "Incorrect password";
  }
}