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


/* =========================
   THEME SYSTEM
========================= */

function setTheme(color){

  const root =
    document.documentElement;

  const themes = {

    green:[
      '#00a36c',
      '#34d399'
    ],

    orange:[
      '#ff7b00',
      '#fb923c'
    ],

    red:[
      '#ef4444',
      '#f87171'
    ],

    yellow:[
      '#eab308',
      '#facc15'
    ],

    blue:[
      '#2563eb',
      '#60a5fa'
    ],

    cyan:[
      '#06b6d4',
      '#67e8f9'
    ],

    pink:[
      '#ec4899',
      '#f472b6'
    ]
  };

  root.style.setProperty(
    '--green',
    themes[color][0]
  );

  root.style.setProperty(
    '--green2',
    themes[color][1]
  );

  root.style.setProperty(
    '--grad',

    `linear-gradient(
      135deg,
      ${themes[color][0]},
      ${themes[color][1]}
    )`
  );
}

function setTheme(color){

  const root =
    document.documentElement;

  const themes = {

    green:[
      '#00a36c',
      '#34d399'
    ],

    orange:[
      '#ff7b00',
      '#fb923c'
    ],

    red:[
      '#ef4444',
      '#f87171'
    ],

    yellow:[
      '#eab308',
      '#facc15'
    ],

    blue:[
      '#2563eb',
      '#60a5fa'
    ],

    cyan:[
      '#06b6d4',
      '#67e8f9'
    ],

    pink:[
      '#ec4899',
      '#f472b6'
    ]
  };

  root.style.setProperty(
    '--green',
    themes[color][0]
  );

  root.style.setProperty(
    '--green2',
    themes[color][1]
  );

  root.style.setProperty(
    '--grad',

    `linear-gradient(
      135deg,
      ${themes[color][0]},
      ${themes[color][1]}
    )`
  );
}
