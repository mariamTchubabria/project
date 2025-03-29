// --- Alphabets ---
const LATIN_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const GEORGIAN_ALPHABET = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";

// --- GAME DATA STRUCTURE (JS Version) ---
const gameModes = {
  Classic: {
    title: "კლასიკური თამაში (ქართული)",
    categories: [
      { name: "ქვეყანა", dataKey: "countries" },
      { name: "ქალაქი", dataKey: "cities" },
      { name: "მდინარე", dataKey: "rivers" },
      { name: "ცხოველი", dataKey: "animals" },
      { name: "მცენარე", dataKey: "plants" },
      { name: "სახელი", dataKey: "names" },
    ],
    alphabet: GEORGIAN_ALPHABET,
    data: {
      countries: [
        "საქართველო",
        "ამერიკა",
        "საფრანგეთი",
        "გერმანია",
        "იტალია",
        "ესპანეთი",
        "იაპონია",
        "ჩინეთი",
        "ინდოეთი",
        "ბრაზილია",
        "კანადა",
        "ავსტრალია",
        "თურქეთი",
        "ეგვიპტე",
        "უკრაინა",
        "საბერძნეთი",
        "პოლონეთი",
        "ნორვეგია",
        "შვედეთი",
        "ფინეთი",
        "არგენტინა",
        "მექსიკა",
        "ავსტრია",
        "შვეიცარია",
      ],
      cities: [
        "თბილისი",
        "ქუთაისი",
        "ბათუმი",
        "რუსთავი",
        "გორი",
        "ზუგდიდი",
        "ფოთი",
        "სიღნაღი",
        "მცხეთა",
        "ზესტაფონი",
        "სამტრედია",
        "სენაკი",
        "ბორჯომი",
        "ახალციხე",
        "კასპი",
        "ხაშური",
        "ოზურგეთი",
        "თელავი",
        "წყალტუბო",
        "ქობულეთი",
        "გარდაბანი",
        "მარნეული",
      ],
      rivers: [
        "მტკვარი",
        "რიონი",
        "არაგვი",
        "ენგური",
        "ჭოროხი",
        "ალაზანი",
        "იორი",
        "ხრამი",
        "თერგი",
        "ლიახვი",
        "ყვირილა",
        "ცხენისწყალი",
        "ტეხური",
        "ხობისწყალი",
        "ფარავანი",
        "სუფსა",
        "ძირულა",
        "მაშავერა",
        "დებედა",
      ],
      animals: [
        "ძაღლი",
        "კატა",
        "ცხენი",
        "ძროხა",
        "ღორი",
        "ცხვარი",
        "თხა",
        "მგელი",
        "დათვი",
        "მელა",
        "კურდღელი",
        "ვეფხვი",
        "ლომი",
        "ირემი",
        "არწივი",
        "ტურა",
        "ციყვი",
        "ზღარბი",
        "თაგვი",
        "გველი",
        "ბუ",
        "ყვავი",
      ],
      plants: [
        "ვაშლი",
        "მსხალი",
        "ატამი",
        "ალუბალი",
        "ბალი",
        "ლეღვი",
        "ყურძენი",
        "ვარდი",
        "გვირილა",
        "ტიტა",
        "ნაძვი",
        "ფიჭვი",
        "მუხა",
        "ცაცხვი",
        "იასამანი",
        "კომში",
        "ბროწეული",
        "კაკალი",
        "თხილი",
        "კარტოფილი",
        "პომიდორი",
        "კიტრი",
      ],
      names: [
        "გიორგი",
        "ნინო",
        "დავითი",
        "მარიამი",
        "ლუკა",
        "ანასტასია",
        "საბა",
        "ბარბარე",
        "ალექსანდრე",
        "თამარი",
        "ირაკლი",
        "ანა",
        "ნიკოლოზი",
        "ელენე",
        "ლევანი",
        "სოფია",
        "დემეტრე",
        "ანდრია",
        "ლიზი",
        "გაბრიელი",
        "ქეთევანი",
        "ვახტანგი",
      ],
    },
  },
  Math: {
    title: "Math Genius Game",
    categories: [
      { name: "Mathematician", dataKey: "mathematicians" },
      { name: "Formula", dataKey: "formulas" },
      { name: "Theorem/Invention", dataKey: "theorems" },
    ],
    alphabet: LATIN_ALPHABET,
    data: {
      mathematicians: [
        "andrew wiles",
        "archimedes",
        "aristotle",
        "ada lovelace",
        "alan turing",
        "bernoulli family",
        "blaise pascal",
        "brahmagupta",
        "brook taylor",
        "carl gauss",
        "carl jacobi",
        "charles babbage",
        "claude shannon",
        "daniel bernoulli",
        "david hilbert",
        "diophantus",
        "donald knuth",
        "euclid",
        "leonhard euler",
        "emmy noether",
        "paul erdős",
        "fibonacci",
        "pierre de fermat",
        "joseph fourier",
        "georg fechner",
        "galileo galilei",
        "carl friedrich gauss",
        "kurt gödel",
        "sophie germain",
        "hypatia",
        "hermann grassmann",
        "jacques hadamard",
        "isaac newton",
        "ibn al-haytham",
        "ivar ekeland",
        "itō kiyoshi",
        "johannes kepler",
        "joseph-louis lagrange",
        "julia robinson",
        "jean-pierre serre",
        "katherine johnson",
        "andrey kolmogorov",
        "leopold kronecker",
        "kiyosi itô",
        "gottfried leibniz",
        "sophus lie",
        "john von neumann",
        "benoit mandelbrot",
        "andrey markov",
        "john napier",
        "niels abel",
        "omar khayyám",
        "olga oleinik",
        "oskar perron",
        "mikhail ostrogradsky",
        "pythagoras",
        "henri poincaré",
        "qin jiushao",
        "daniel quillen",
        "qiudong wang",
        "qu wenjun",
        "bernhard riemann",
        "srinivasa ramanujan",
        "frank ramsey",
        "simon stevin",
        "mary somerville",
        "thales",
        "niccolò fontana tartaglia",
        "teiji takagi",
        "stanislaw ulam",
        "pavel urysohn",
        "ushijima",
        "ueno chikako",
        "françois viète",
        "john venn",
        "varahamihira",
        "ivan vinogradov",
        "john wallis",
        "karl weierstrass",
        "xenocrates",
        "xiahou yang",
        "xu guangqi",
        "xue xin",
        "yang hui",
        "yutaka taniyama",
        "shing-tung yau",
        "yoshida koyu",
        "zeno of elea",
        "ernst zermelo",
        "zhang heng",
        "max zorn",
      ],
      formulas: [
        "area of a circle",
        "arc length formula",
        "arithmetic series sum",
        "binomial theorem",
        "bayes' theorem",
        "bernoulli's equation",
        "cosine rule",
        "chain rule",
        "coulomb's law",
        "distance formula",
        "derivative definition",
        "divergence theorem",
        "euler's formula",
        "energy-mass equivalence",
        "exponential growth",
        "fourier transform",
        "fermat's principle",
        "fundamental theorem of calculus",
        "gravitational potential energy",
        "gauss's law",
        "geometric series sum",
        "heron's formula",
        "hooke's law",
        "hubble's law",
        "ideal gas law",
        "impulse-momentum",
        "induced emf",
        "jacobi identity",
        "joule's law",
        "jensen's inequality",
        "kepler's third law",
        "kinetic energy",
        "kutta-joukowski theorem",
        "law of cosines",
        "lorentz force",
        "logistic growth",
        "maxwell's equations",
        "mass-energy equivalence",
        "möbius inversion",
        "newton's second law",
        "navier-stokes equations",
        "normal distribution",
        "ohm's law",
        "optical path length",
        "orbital velocity",
        "pythagorean theorem",
        "planck's law",
        "poisson's equation",
        "quadratic formula",
        "quantum harmonic oscillator",
        "quotient rule",
        "relativistic energy",
        "rolle's theorem",
        "rayleigh criterion",
        "schrödinger equation",
        "stokes' theorem",
        "snell's law",
        "taylor series",
        "torricelli's law",
        "time dilation",
        "uncertainty principle",
        "universal gravitation",
        "unit circle definition",
        "volume of sphere",
        "vector magnitude",
        "van der waals equation",
        "work-energy theorem",
        "wien's displacement law",
        "wave equation",
        "x-ray diffraction",
        "x-coordinate rotation",
        "xor operation",
        "young's modulus",
        "yield strength",
        "yukawa potential",
        "z-transform",
        "z-score",
        "zero product property",
      ],
      theorems: [
        "fundamental theorem of calculus",
        "gödel's incompleteness theorems",
        "pythagorean theorem",
        "fermat's last theorem",
        "euclid's elements",
        "bayes' theorem",
        "binomial theorem",
        "central limit theorem",
        "chinese remainder theorem",
        "four color theorem",
        "mean value theorem",
        "noether's theorem",
        "prime number theorem",
        "ramanujan's master theorem",
        "riemann hypothesis",
        "russell's paradox",
        "taylor's theorem",
        "zermelo-fraenkel set theory",
        "zorn's lemma",
      ],
    },
  },
  History: {
    title: "History Buff Game",
    categories: [
      { name: "Historical Figure", dataKey: "figures" },
      { name: "Civilization/Empire", dataKey: "civilizations" },
      { name: "City / Country", dataKey: "places" },
    ],
    alphabet: LATIN_ALPHABET,
    data: {
      figures: [
        "alexander the great",
        "aristotle",
        "cleopatra",
        "confucius",
        "charlemagne",
        "christopher columbus",
        "genghis khan",
        "galileo galilei",
        "hammurabi",
        "henry viii",
        "isaac newton",
        "joan of arc",
        "julius caesar",
        "leonardo da vinci",
        "napoleon bonaparte",
        "nefertiti",
        "plato",
        "queen elizabeth i",
        "socrates",
        "tutankhamun",
        "william shakespeare",
        "zheng he",
      ],
      civilizations: [
        "ancient egypt",
        "egypt",
        "ancient greece",
        "greece",
        "aztec empire",
        "aztec",
        "byzantine empire",
        "carthaginian empire",
        "han dynasty",
        "inca empire",
        "inca",
        "mauryan empire",
        "maya civilization",
        "maya",
        "mongol empire",
        "ottoman empire",
        "persian empire",
        "qin dynasty",
        "roman republic",
        "roman empire",
        "roman",
        "sumerians",
        "viking age",
        "vikings",
      ],
      places: [
        "alexandria",
        "athens",
        "babylon",
        "beijing",
        "cairo",
        "constantinople",
        "jerusalem",
        "kyoto",
        "london",
        "paris",
        "rome",
        "sparta",
        "tenochtitlan",
        "thebes",
        "timbuktu",
        "china",
        "egypt",
        "england",
        "france",
        "greece",
        "india",
        "italy",
        "japan",
        "mexico",
        "persia",
        "spain",
      ],
    },
  },
  Chemistry: {
    title: "Chemistry Whiz Game",
    categories: [],
    data: {},
    alphabet: LATIN_ALPHABET,
  },
  Biology: {
    title: "Biology Expert Game",
    categories: [],
    data: {},
    alphabet: LATIN_ALPHABET,
  },
  Geography: {
    title: "Geography Explorer Game",
    categories: [],
    data: {},
    alphabet: LATIN_ALPHABET,
  },
};

function preprocessData(modes) {
  for (const modeKey in modes) {
    const mode = modes[modeKey];
    if (mode.data) {
      for (const dataKey in mode.data) {
        if (Array.isArray(mode.data[dataKey])) {
          mode.data[dataKey] = mode.data[dataKey].map((item) =>
            typeof item === "string" ? item.toLowerCase() : item
          );
        }
      }
    }
  }
}
preprocessData(gameModes);

// --- DOM Elements ---
const modeSelectionContainer = document.getElementById("mode-selection");
const gameContainer = document.getElementById("game-container");
const gameTitleEl = document.getElementById("game-title");
const currentLetterEl = document.getElementById("current-letter");
const roundNumberEl = document.getElementById("round-number");
const maxRoundsEl = document.getElementById("max-rounds");
const scoreEl = document.getElementById("score");
const submitBtn = document.getElementById("submit-btn");
const nextRoundBtn = document.getElementById("next-round-btn");
const changeModeBtn = document.getElementById("change-mode-btn");
const answersListEl = document.getElementById("answers-list");
const inputSection = document.getElementById("input-section");
// Removed resultsContainer as scroll isn't needed in this version

const inputElements = [];
const labelElements = [];
const groupElements = [];
for (let i = 1; i <= 6; i++) {
  inputElements.push(document.getElementById(`input-cat-${i}`));
  labelElements.push(document.getElementById(`label-cat-${i}`));
  groupElements.push(document.getElementById(`group-cat-${i}`));
}

// --- Game State Variables ---
let currentRound = 1;
let maxRounds = 3;
let score = 0;
let currentLetter = "";
let availableLetters = [];
let selectedMode = null;
let currentGameData = {};
let currentModeActualData = {};

// --- Fuse.js Options ---
const fuseOptions = {
  includeScore: true,
  threshold: 0.4,
  minMatchCharLength: 2,
};

// --- Functions ---

function _displayModeSelectionView() {
  gameContainer.style.display = "none";
  modeSelectionContainer.style.display = "block";
  document.title = "Choose Game Mode";
}

function _displayGameView() {
  modeSelectionContainer.style.display = "none";
  gameContainer.style.display = "block";
  if (currentGameData && currentGameData.title) {
    gameTitleEl.textContent = currentGameData.title;
    document.title = currentGameData.title;
  }
  const isClassic = selectedMode === "Classic";
  const numCategoriesToShow = isClassic ? 6 : 3;
  groupElements.forEach((group, index) => {
    if (group) {
      group.style.display = index < numCategoriesToShow ? "block" : "none";
    }
  });
  if (isClassic) {
    gameContainer.classList.add("classic-mode");
  } else {
    gameContainer.classList.remove("classic-mode");
  }
}

function selectMode(modeKey) {
  if (!gameModes[modeKey] || !gameModes[modeKey].categories) {
    console.error("Selected mode is not implemented or invalid:", modeKey);
    return false;
  }

  if (selectedMode !== modeKey) {
    console.log(`Selecting mode: ${modeKey}`);
    selectedMode = modeKey;
    currentGameData = gameModes[selectedMode];
    currentModeActualData = currentGameData.data || {};
    maxRounds = 3;
    resetGame();
    startRound();
  }

  // Set background attribute
  document.body.dataset.modeBg = modeKey.toLowerCase();

  const expectedHash = `#game-${modeKey.toLowerCase()}`;
  if (window.location.hash !== expectedHash) {
    window.location.hash = expectedHash;
  } else {
    _displayGameView();
  }

  if (inputElements[0]) {
    inputElements[0].focus();
  }
  return true;
}

function resetGame() {
  currentRound = 1;
  score = 0;
  const alphabetSource = currentGameData.alphabet || LATIN_ALPHABET;
  availableLetters = alphabetSource.split("");
  if (!currentGameData.alphabet)
    console.warn("Mode missing alphabet, defaulting to Latin.");
  scoreEl.textContent = score;
  roundNumberEl.textContent = currentRound;
  answersListEl.innerHTML = "";
  nextRoundBtn.textContent = "Next Round";
  nextRoundBtn.disabled = true;
  submitBtn.disabled = false;
}

function showModeSelection() {
  selectedMode = null;
  currentGameData = {};
  currentModeActualData = {};
  answersListEl.innerHTML = "";

  // Remove background attribute
  delete document.body.dataset.modeBg;

  if (window.location.hash) {
    window.location.hash = "";
  } else {
    _displayModeSelectionView();
  }
}

function getRandomLetter() {
  const alphabetSource = (currentGameData.alphabet || LATIN_ALPHABET).split("");
  if (availableLetters.length === 0) {
    availableLetters = [...alphabetSource];
    console.warn("Recycling alphabet for current mode.");
  }
  if (availableLetters.length === 0) return "?";
  const randomIndex = Math.floor(Math.random() * availableLetters.length);
  const letter = availableLetters[randomIndex];
  availableLetters.splice(randomIndex, 1);
  return letter;
}

function startRound() {
  currentLetter = getRandomLetter();
  currentLetterEl.textContent = currentLetter;
  roundNumberEl.textContent = currentRound;
  scoreEl.textContent = score;
  const numCategories = currentGameData.categories
    ? currentGameData.categories.length
    : 0;
  for (let i = 0; i < 6; i++) {
    if (labelElements[i] && inputElements[i]) {
      if (i < numCategories) {
        const category = currentGameData.categories[i];
        labelElements[i].textContent = `${category.name}:`;
        inputElements[i].placeholder = `Enter ${category.name.toLowerCase()}`;
        inputElements[i].value = "";
      } else {
        inputElements[i].value = "";
      }
    }
  }
  submitBtn.disabled = false;
  nextRoundBtn.disabled = true;
  answersListEl.innerHTML = "";
  if (inputElements[0]) {
    inputElements[0].focus();
  }
}

function checkAnswer(inputValue, categoryName) {
  const categoryInfo = currentGameData.categories.find(
    (cat) => cat.name === categoryName
  );
  if (!categoryInfo) {
    console.error(
      `Internal Error: Category info not found for "${categoryName}"`
    );
    return {
      text: inputValue,
      category: categoryName,
      correct: false,
      message: "Internal error: Category mismatch.",
      points: 0,
      statusClass: "incorrect",
    };
  }
  const dataKey = categoryInfo.dataKey;
  const possibleAnswers = currentModeActualData[dataKey] || [];
  const cleanedInput = inputValue.trim().toLowerCase();
  const lowerCaseLetter = currentLetter.toLowerCase();
  const result = {
    text: inputValue,
    category: categoryName,
    correct: false,
    message: "",
    points: 0,
    statusClass: "incorrect",
  };

  if (!cleanedInput) {
    result.message = "Input was empty. (0 points)";
    result.statusClass = "empty";
    return result;
  }
  if (!cleanedInput.startsWith(lowerCaseLetter)) {
    result.message = `Does not start with the letter '${currentLetter}'.`;
    result.statusClass = "incorrect";
    return result;
  }
  if (possibleAnswers.length === 0) {
    console.warn(
      `No data list found for dataKey: ${dataKey} in category ${categoryName}`
    );
    result.message = `No data configured for '${categoryName}'. Cannot check.`;
    result.statusClass = "incorrect";
    return result;
  }
  const choicesStartingWithLetter = possibleAnswers.filter(
    (ans) => typeof ans === "string" && ans.startsWith(lowerCaseLetter)
  );
  if (choicesStartingWithLetter.length === 0) {
    result.message = `Starts with '${currentLetter}', but nothing matches in '${categoryName}'. (0 points)`;
    result.statusClass = "not-found";
    return result;
  }

  const fuse = new Fuse(choicesStartingWithLetter, fuseOptions);
  const searchResults = fuse.search(cleanedInput);
  console.log(
    `Fuse search for "${cleanedInput}" (Letter: ${currentLetter}) in ${dataKey}:`,
    searchResults
  );

  if (searchResults.length > 0) {
    const bestMatch = searchResults[0];
    result.correct = true;
    result.points = 1;
    result.statusClass = "correct";
    if (bestMatch.item !== cleanedInput && bestMatch.score > 0.001) {
      const percentageScore = Math.round((1 - bestMatch.score) * 100);
      result.message = `Correct! (Matched: ${bestMatch.item}, ${percentageScore}%)`;
    } else {
      result.message = "Correct!";
    }
  } else {
    result.message = `Starts with '${currentLetter}', but not recognized. (0 points)`;
    result.statusClass = "not-found";
  }
  return result;
}

function submitAnswers() {
  submitBtn.disabled = true;
  let roundScore = 0;
  answersListEl.innerHTML = "";
  const numCategories = currentGameData.categories
    ? currentGameData.categories.length
    : 0;
  for (let i = 0; i < numCategories; i++) {
    const category = currentGameData.categories[i];
    if (inputElements[i] && category) {
      const inputValue = inputElements[i].value;
      const categoryName = category.name;
      const result = checkAnswer(inputValue, categoryName);
      displayResult(result);
      roundScore += result.points;
    } else {
      console.warn(`Missing input element or category data for index ${i}`);
    }
  }
  score += roundScore;
  scoreEl.textContent = score;
  if (currentRound < maxRounds) {
    nextRoundBtn.disabled = false;
  } else {
    nextRoundBtn.disabled = true;
    nextRoundBtn.textContent = "Game Over!";
    displayFinalScore();
  }
  // NOTE: scrollIntoView logic removed from this version
}

function displayResult(result) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("answer-item");
  itemDiv.classList.add(result.statusClass || "incorrect");
  itemDiv.innerHTML = `<h3>${result.category}</h3><p>Your Answer: ${
    result.text || "<i>(empty)</i>"
  }</p><p>Result: ${result.message}</p>`;
  answersListEl.appendChild(itemDiv);
}

function displayFinalScore() {
  const numCategories = currentGameData.categories
    ? currentGameData.categories.length
    : 3;
  const maxPossibleScore = maxRounds * numCategories;
  const finalMsg = document.createElement("h3");
  finalMsg.textContent = `Game finished! Final Score: ${score} / ${maxPossibleScore}`;
  finalMsg.style.textAlign = "center";
  finalMsg.style.marginTop = "20px";
  finalMsg.style.color = "var(--primary-color)";
  answersListEl.appendChild(finalMsg);
}

function nextRound() {
  currentRound++;
  if (currentRound <= maxRounds) {
    startRound();
  }
}

function handleNavigation() {
  const hash = window.location.hash;
  console.log(`Navigation detected, Hash: "${hash}"`);
  if (hash.startsWith("#game-")) {
    const modeKeyHash = hash.substring("#game-".length);
    const modeKey = Object.keys(gameModes).find(
      (k) => k.toLowerCase() === modeKeyHash
    );
    if (modeKey) {
      console.log(`Hash corresponds to mode: ${modeKey}`);
      if (selectedMode !== modeKey) {
        selectMode(modeKey); // Sets background
      } else {
        _displayGameView();
        document.body.dataset.modeBg = modeKey.toLowerCase(); // Ensure background if state already correct
      }
    } else {
      console.warn(`Hash "${hash}" looks like game mode but key not found.`);
      showModeSelection(); // Removes background
    }
  } else {
    console.log("Hash is empty or invalid, showing mode selection.");
    if (selectedMode !== null) {
      selectedMode = null;
      currentGameData = {};
      currentModeActualData = {};
    }
    _displayModeSelectionView();
    delete document.body.dataset.modeBg; // Remove background
  }
}

// --- Event Listeners ---
document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!event.target.disabled) {
      selectMode(event.target.getAttribute("data-mode"));
    }
  });
});
submitBtn.addEventListener("click", submitAnswers);
nextRoundBtn.addEventListener("click", nextRound);
changeModeBtn.addEventListener("click", showModeSelection);
window.addEventListener("hashchange", handleNavigation);

// --- Initialise ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded. Handling initial navigation...");
  handleNavigation();
  console.log(
    "Game ready (JS Fuzzy Mode + Hash Nav + Backgrounds). Initial state set based on URL hash."
  );
  if (typeof Fuse !== "undefined") {
    console.log("Fuse.js library loaded successfully.");
  } else {
    console.error("Fuse.js library FAILED TO LOAD.");
    alert("Error: Fuzzy matching library could not load.");
  }
});
