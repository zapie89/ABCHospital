document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;

  // Simulasikan login sukses dan redirect ke dashboard
  localStorage.setItem("user", JSON.stringify({ username, role }));
  window.location.href = `dashboard.html`;
});
