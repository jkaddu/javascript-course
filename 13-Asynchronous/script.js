"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderConutry = function (data, className = "") {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);

  const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)}mil people</p>
                    <p class="country__row"><span>🗣️</span>${languages}</p>
                    <p class="country__row"><span>💰</span>${
                      currencies[0].name
                    }</p>
                </div>
            </article>
      `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opcacity = 1;
};

///////////////////////////////////////

/* Old way of making AJAX calls */
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);

    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}mil people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
        </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("portugal");
getCountryData("uganda");

const getCountryAndNeighbor = function (country) {
  // AJAX call conuntry 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderConutry(data);

    // Get nneighbor country (2)
    const neighbor = data.borders?.[0];

    if (!neighbor) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderConutry(data2, "neighbor");
    });
  });
};

getCountryAndNeighbor("usa");
*/

////////////////////////////////////////

/* Promises and the FETCH API */
/*
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg}: (${response.status})`);
    }
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderConutry(data[0]);
//       const neighbor = data[0].borders?.[0];

//       if (!neighbor) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderConutry(data[0], "neighbor"))
//     .catch((err) => {
//       renderError(`Something went wrong: ${err.message}`);
//       conaole.log(err);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderConutry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) throw new Error("No neighbor found");
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        "Country not found"
      );
    })
    .then((data) => renderConutry(data[0], "neighbor"))
    .catch((err) => {
      renderError(`Something went wrong: ${err.message}`);
      console.log(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});
// getCountryData("australia");
*/
/////////////////////////////////////////
/* Building a promise */
/*

const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Lottery draw is happening 🔮");
    if (Math.random() >= 0.5) {
      resolve("You WIN 💰");
    } else {
      reject(new Error("You lost, better luck next time 😔"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 second"));

Promise.resolve("abc").then((res) => console.log(res));
Promise.reject(new Error("Problem")).catch((err) => console.error(err));
*/

//////////////////////////////////////////

/* Making a promsie from the geolocation API */
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     resolve(position);
    //   },
    //   (err) => reject(err)
    // );
    // Condensed version of function above
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((res) => console.log(res));

const whereAmI = function (lat, lng) {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=892185385790358846936x67980`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found: ${res.status}`);

      return res.json();
    })
    .then((data) => renderConutry(data[0]))
    .catch((err) => console.log(`${err.message}`));
};

btn.addEventListener("click", whereAmI);
*/

/////////////////////////////////////////

/* Code Challenge */
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage("img/img-1.jpeg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";

    return createImage("img/img-3.jpeg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.log(err));
*/

///////////////////////////////////////

/* Promises using Async/Await */
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding (looking up a place using lat/lng)
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=892185385790358846936x67980`
    );
    if (!resGeo.ok) throw new Error("Problem getting country data");
    const dataGeo = resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error("Problem getting country data");
    const data = await res.json();
    renderConutry(data[0]);
    console.log(data);
    return console.log(`The capital of this country is ${data[0].capital}`);
  } catch (err) {
    console.log(err.message);
  }
};

whereAmI("usa");
*/
///////////////////////////////////////
/* Runnnint promises at the same time */
/*
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg}: (${response.status})`);
    }
    return response.json();
  });
};

const getCapitals = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Same result as code above, saves times and has request done altogether
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

getCapitals("usa", "uganda", "portugal");
*/
/* Promise Methods */
// Promise.race
/*
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg}: (${response.status})`);
    }
    return response.json();
  });
};

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON("https://restcountries.com/v3.1/name/egypt"),
    getJSON(`https://restcountries.com/v3.1/name/greece`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/greece`),
  timeout(0.005),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.log(err));

// Promise.allSettled 
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Winner"),
]).then((res) => console.log(res));

// "all" returns one promise compared to all for "allSettled"
Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Winner"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.any 

// "all" returns the first fulfilled promise
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Winner"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
*/
//////////////////////////////////
/* Code Challenge */

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

// let currentImg;
// createImage("img/img-1.jpeg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";

//     return createImage("img/img-3.jpeg");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.log(err));

const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage("img/img-1.jpeg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    // Load image 2
    img = await createImage("img/img-2.jpeg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";

    // Load image 2
    img = await createImage("img/img-3.jpeg");
    console.log("Image 3 loaded");
    await wait(2);
    img.style.display = "none";
  } catch {
    console.log(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch {}
};

loadAll(["img/img-1.jpeg", "img/img-2.jpeg", "img/img-3.jpeg"]);
