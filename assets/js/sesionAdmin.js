window.onload = function () {
    if (localStorage.getItem("logueado") !== "true") {
        window.location.href = "index.html?modal=login";
    }

    // Bloquear botón atrás
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    localStorage.removeItem("logueado");
    window.location.href = "index.html?modal=login";
  };

};



