/* =========================
   CLOCK SYSTEM
========================= */

function updateClock(){

  const now = new Date();

  /* DATE */

  const year =
    now.getFullYear();

  const month =
    String(now.getMonth() + 1)
    .padStart(2,'0');

  const day =
    String(now.getDate())
    .padStart(2,'0');

  /* TIME */

  const hour =
    String(now.getHours())
    .padStart(2,'0');

  const minute =
    String(now.getMinutes())
    .padStart(2,'0');

  const second =
    String(now.getSeconds())
    .padStart(2,'0');

  /* DISPLAY */

  document.getElementById(
    'clock-date'
  ).textContent =
    `${year}/${month}/${day}`;

  document.getElementById(
    'clock-time'
  ).textContent =
    `${hour}:${minute}:${second}`;
}

/* START */

updateClock();

setInterval(
  updateClock,
  1000
);