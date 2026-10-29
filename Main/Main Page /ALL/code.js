const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

$("#year").textContent = new Date().getFullYear();

const LANG = {
  javascript: "JavaScript",
  python: "Python",
  luau: "Luau",
  html: "HTML/CSS"
};

const EDITOR =
  "https://www.programiz.com/python-programming/online-compiler/";

const examples = [
  // ---------- HTML & CSS ----------

  {
    lang: "html",
    level: "Project",
    title: "Skiing website",
    wide: true,
    desc: "A one-page website about skiing, built with HTML and CSS. Visit the live site or copy the code.",
    hint: "Save this as index.html and open it in your browser.",
    site: "https://skiingwebsite.netlify.app/",
    notes: [
      "The navbar uses flexbox to keep the Home link on the left and the search bar on the right.",
      "clamp() lets the main heading grow and shrink with the screen size.",
      "The image uses width: 100% and max-width: 1000px so it never gets wider than the screen.",
      "The media query at 480px adjusts the layout for phones."
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>About Skiing</title>

    <style>
        * {
            box-sizing: border-box;
        }

        /* Entire page */
        body {
            margin: 0;
            background-color: lightblue;
            font-family: Arial, Helvetica, sans-serif;
            color: midnightblue;
        }

        /* Navigation bar */
        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            background-color: white;
            padding: 1rem 5%;
        }

        /* Home link */
        .navbar h3 {
            margin: 0;
            font-size: 1.25rem;
        }

        a {
            color: black;
            text-decoration: none;
        }

        a:hover {
            color: royalblue;
        }

        /* Search bar */
        .searchbar {
            width: min(100%, 220px);
            padding: 0.65rem 0.8rem;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font: inherit;
        }

        .searchbar:focus {
            outline: 2px solid royalblue;
            outline-offset: 2px;
        }

        /* Main page content */
        main {
            padding: 1rem;
        }

        /* Main heading */
        h1 {
            margin: 2.5rem 0;
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            text-align: center;
            color: midnightblue;
        }

        /* Skiing image */
        .hero-image {
            display: block;
            width: 100%;
            max-width: 1000px;
            height: auto;
            margin: 0 auto;
            border-radius: 12px;
            object-fit: cover;
        }

        /* Description box */
        .content-box {
            width: min(90%, 800px);
            margin: 2rem auto;
            padding: clamp(1.25rem, 4vw, 2rem);
            background-color: white;
            border-radius: 12px;
            font-size: 1.3rem;
            line-height: 1.8;
            color: #263449;
        }

        /* Small-screen adjustments */
        @media (max-width: 480px) {
            .navbar {
                padding: 1rem;
            }

            .searchbar {
                width: min(55%, 180px);
            }

            h1 {
                margin: 2rem 0;
            }

            .content-box {
                width: 100%;
            }
        }
    </style>
</head>

<body>

    <!-- Navigation bar -->
    <nav class="navbar">
        <h3>
            <a href="#">Home</a>
        </h3>

        <input
            class="searchbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
        >
    </nav>

    <main>

        <!-- Page heading -->
        <h1>About Skiing</h1>

        <!-- Main skiing image -->
        <img
            class="hero-image"
            src="https://images.pexels.com/photos/15944473/pexels-photo-15944473.jpeg?cs=srgb&dl=pexels-zakhar-15944473.jpg&fm=jpg"
            alt="Snowy mountain skiing landscape"
        >

        <!-- Description -->
        <section class="content-box">
            Skiing is a popular winter sport that involves gliding down
            snow-covered slopes on skis. It is enjoyed by people of all
            ages and skill levels, with different styles including alpine
            skiing, cross-country skiing, and freestyle skiing.

            Skiing is a great way to stay active during winter while
            enjoying the beauty of snowy landscapes.
        </section>

    </main>

</body>
</html>`
  },

  // ---------- JAVASCRIPT ----------

  {
    lang: "javascript",
    level: "Beginner",
    title: "Variables",
    desc: "Change the name and run the example.",
    code: `const name = "Prijam";
console.log("Hello, " + name);`,
    run: {
      label: "Run example",
      input: { type: "text", value: "Prijam", label: "Name" },
      fn: v => "Hello, " + (v.trim() || "Prijam")
    }
  },

  {
    lang: "javascript",
    level: "Beginner",
    title: "Random number",
    desc: "Generate a random whole number from 1 to 100.",
    code: `const number =
  Math.floor(Math.random() * 100) + 1;

console.log(number);`,
    run: {
      label: "Generate number",
      fn: () => String(Math.floor(Math.random() * 100) + 1)
    }
  },

  {
    lang: "javascript",
    level: "Beginner",
    title: "Conditionals",
    desc: "Change the score to test an if/else statement.",
    code: `const score = 75;

if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Try again");
}`,
    run: {
      label: "Check score",
      input: { type: "number", value: "75", label: "Score" },
      fn: v => {
        if (v.trim() === "" || !Number.isFinite(Number(v))) {
          return "Enter a valid score.";
        }

        return Number(v) >= 50 ? "Passed" : "Try again";
      }
    }
  },

  // ---------- PYTHON ----------

  {
    lang: "python",
    level: "Beginner",
    title: "Print a message",
    desc: "Change the name and preview the expected Python output.",
    editor: true,
    code: `name = "Prijam"
print("Hello,", name)`,
    run: {
      label: "Run preview",
      input: { type: "text", value: "Prijam", label: "Name" },
      fn: v => "Hello, " + (v.trim() || "there")
    }
  },

  {
    lang: "python",
    level: "Beginner",
    title: "Simple calculation",
    desc: "Change the price and quantity to calculate a total.",
    editor: true,
    code: `price = 10
quantity = 3
total = price * quantity

print(total)`,
    run: {
      label: "Calculate total",
      input: { type: "number", value: "3", label: "Quantity" },
      fn: v => {
        const quantity = Number(v);

        if (
          v.trim() === "" ||
          !Number.isFinite(quantity) ||
          quantity < 0
        ) {
          return "Enter a valid quantity of 0 or more.";
        }

        return "Total: " + 10 * quantity;
      }
    }
  },

  {
    lang: "python",
    level: "Project",
    title: "Number guessing game",
    wide: true,
    play: true,
    desc: "Guess a number from 1 to 50 in five attempts. Play the browser version below.",
    notes: [
      "random.randint chooses the secret number in Python.",
      "The loop allows five attempts.",
      "The low and high values narrow the suggested range.",
      "You can use one hint per game."
    ],
    code: `import random

secret = random.randint(1, 50)
low = 1
high = 50
attempts = 5
hints = 1

print("Welcome to the Number Guessing Game!")
print("Guess a number from 1 to 50.")

for i in range(attempts):
    try:
        num = int(input("Guess the number: "))
    except ValueError:
        print("Enter a whole number.")
        continue

    if num < 1 or num > 50:
        print("Choose a number from 1 to 50.")
        continue

    if num == secret:
        print("Congratulations!")
        print(f"You guessed it in {i + 1} attempts.")
        break

    if num > secret:
        high = min(high, num - 1)
        print("Too high.")
    else:
        low = max(low, num + 1)
        print("Too low.")

    print(f"Suggested range: {low} to {high}")

    if hints and i < attempts - 1:
        answer = input("Use your hint? (yes/no): ").lower()

        if answer.startswith("y"):
            print(
                f"The number is between "
                f"{max(1, secret - 7)} and "
                f"{min(50, secret + 7)}"
            )
            hints = 0
else:
    print(f"Game over. The number was {secret}.")`
  },

  // ---------- LUAU ----------

  {
    lang: "luau",
    level: "Beginner",
    title: "Print a message",
    desc: "Print a message in Roblox Studio's Output window.",
    hint: "Put this code in a Script in Roblox Studio.",
    code: `local playerName = "Player"

print("Hello, " .. playerName)`
  },

  {
    lang: "luau",
    level: "Beginner",
    title: "Leaderstats",
    desc: "Create a Coins stat visible on the Roblox player list.",
    hint: "Put this Script in ServerScriptService.",
    code: `local Players = game:GetService("Players")

local function setupPlayer(player)
    if player:FindFirstChild("leaderstats") then
        return
    end

    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player

    local coins = Instance.new("IntValue")
    coins.Name = "Coins"
    coins.Value = 0
    coins.Parent = leaderstats
end

Players.PlayerAdded:Connect(setupPlayer)

for _, player in Players:GetPlayers() do
    setupPlayer(player)
end`
  },

  {
    lang: "luau",
    level: "Intermediate",
    title: "Coin pickup",
    desc: "Give a player coins when they touch a coin, then respawn it.",
    hint: "Put this Script inside a Part. It needs the Leaderstats script.",
    notes: [
      "Touched fires when a character part touches the coin.",
      "The collected flag prevents multiple rewards at once.",
      "The coin becomes visible again after five seconds."
    ],
    code: `local Players = game:GetService("Players")

local coin = script.Parent
local VALUE = 10
local RESPAWN_TIME = 5
local collected = false

coin.Touched:Connect(function(hit)
    if collected then
        return
    end

    local character = hit:FindFirstAncestorOfClass("Model")
    local player = character and Players:GetPlayerFromCharacter(character)
    local stats = player and player:FindFirstChild("leaderstats")
    local coins = stats and stats:FindFirstChild("Coins")

    if not coins or not coins:IsA("IntValue") then
        return
    end

    collected = true
    coins.Value += VALUE

    coin.Transparency = 1
    coin.CanTouch = false

    task.wait(RESPAWN_TIME)

    coin.Transparency = 0
    coin.CanTouch = true
    collected = false
end)`
  },

  {
    lang: "luau",
    level: "Intermediate",
    title: "Checkpoint",
    desc: "Set a player's respawn location when they touch a checkpoint.",
    hint: "Use a SpawnLocation and put this Script inside it.",
    code: `local Players = game:GetService("Players")

local pad = script.Parent
local ACTIVE_COLOR = Color3.fromRGB(80, 220, 120)

if not pad:IsA("SpawnLocation") then
    error("This Script must be inside a SpawnLocation.")
end

pad.Touched:Connect(function(hit)
    local character = hit:FindFirstAncestorOfClass("Model")
    local player = character and Players:GetPlayerFromCharacter(character)

    if not player or player.RespawnLocation == pad then
        return
    end

    player.RespawnLocation = pad
    pad.Color = ACTIVE_COLOR

    print(player.Name .. " reached a checkpoint")
end)`
  },

  {
    lang: "luau",
    level: "Intermediate",
    title: "Speed pad",
    desc: "Temporarily increase a player's walking speed.",
    hint: "Put this Script inside a Part.",
    notes: [
      "The table prevents the same Humanoid from stacking boosts.",
      "task.delay schedules the reset without pausing the script.",
      "The original speed is restored after the boost."
    ],
    code: `local pad = script.Parent

local BOOST_SPEED = 32
local DURATION = 3
local boosted = {}

pad.Touched:Connect(function(hit)
    local character = hit:FindFirstAncestorOfClass("Model")
    local humanoid = character and character:FindFirstChildOfClass("Humanoid")

    if not humanoid or humanoid.Health <= 0 or boosted[humanoid] then
        return
    end

    boosted[humanoid] = true

    local normalSpeed = humanoid.WalkSpeed
    humanoid.WalkSpeed = BOOST_SPEED

    task.delay(DURATION, function()
        if humanoid.Parent then
            humanoid.WalkSpeed = normalSpeed
        end

        boosted[humanoid] = nil
    end)
end)`
  },

  {
    lang: "luau",
    level: "Intermediate",
    title: "Kill brick",
    wide: true,
    desc: "Damage a player who touches the brick. Configure the Damage attribute in Studio.",
    hint: "Put this server Script inside a Part. Set its Damage attribute to a number greater than zero.",
    notes: [
      "The script checks that the touching part belongs to a real player's character.",
      "The Damage attribute controls the amount of damage.",
      "ForceFields protect players from damage.",
      "A per-player cooldown prevents repeated damage from multiple character parts."
    ],
    code: `-- Server Script inside a Part

local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")

local brick = script.Parent
local originalColor = brick.Color
local lastHit = {}
local COOLDOWN = 1

if brick:GetAttribute("Damage") == nil then
    brick:SetAttribute("Damage", 100)
end

local flashing = false

local function flash()
    if flashing then
        return
    end

    flashing = true
    brick.Color = Color3.fromRGB(255, 255, 255)

    local tween = TweenService:Create(
        brick,
        TweenInfo.new(0.3),
        { Color = originalColor }
    )

    tween:Play()

    tween.Completed:Once(function()
        flashing = false
    end)
end

brick.Touched:Connect(function(hit)
    local character = hit:FindFirstAncestorOfClass("Model")

    if not character then
        return
    end

    local humanoid = character:FindFirstChildOfClass("Humanoid")
    local player = Players:GetPlayerFromCharacter(character)

    if not player or not humanoid or humanoid.Health <= 0 then
        return
    end

    if character:FindFirstChildOfClass("ForceField") then
        return
    end

    local damage = brick:GetAttribute("Damage")

    if typeof(damage) ~= "number" or damage <= 0 then
        warn("Kill brick Damage must be a number greater than zero.")
        return
    end

    local now = os.clock()

    if lastHit[player] and now - lastHit[player] < COOLDOWN then
        return
    end

    lastHit[player] = now

    humanoid:TakeDamage(damage)
    flash()
end)

Players.PlayerRemoving:Connect(function(player)
    lastHit[player] = nil
end)`
  }
];

/* ---------- ordering ---------- */

const LEVEL = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
  Project: 3
};

const LANG_ORDER = Object.keys(LANG);

examples.sort((a, b) =>
  LANG_ORDER.indexOf(a.lang) - LANG_ORDER.indexOf(b.lang) ||
  Number(!!b.wide) - Number(!!a.wide) ||
  LEVEL[a.level] - LEVEL[b.level]
);

/* ---------- syntax highlighting ---------- */

const KW = {
  javascript: "const let var function return if else for while true false null new",
  python: "import from def return if elif else for while in range break continue True False None and or not",
  luau: "local function end if then elseif else for do while in return true false nil and or not"
};

const CMT = {
  javascript: "//",
  python: "#",
  luau: "--"
};

const esc = s =>
  String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));

function highlightMarkup(code) {
  const re = /(<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/)|("[^"\n]*")|(<[!\/]?[a-zA-Z][\w-]*|\/?>)|\b(\d+(?:\.\d+)?(?:px|rem|em|vw|vh|%|s)?)/g;

  let out = "";
  let last = 0;
  let match;

  while ((match = re.exec(code))) {
    out += esc(code.slice(last, match.index));

    const cls = match[1] ? "c"
      : match[2] ? "s"
      : match[3] ? "k"
      : "n";

    out += `<span class="${cls}">${esc(match[0])}</span>`;
    last = re.lastIndex;
  }

  return out + esc(code.slice(last));
}

function highlight(code, lang) {
  if (lang === "html") return highlightMarkup(code);

  const keywords = KW[lang].split(" ").join("|");

  const re = new RegExp(
    String.raw`("""[\s\S]*?"""|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(${CMT[lang]}.*)|\b(\d+(?:\.\d+)?)\b|\b(${keywords})\b`,
    "g"
  );

  let out = "";
  let last = 0;
  let match;

  while ((match = re.exec(code))) {
    out += esc(code.slice(last, match.index));

    const cls = match[1] ? "s"
      : match[2] ? "c"
      : match[3] ? "n"
      : "k";

    out += `<span class="${cls}">${esc(match[0])}</span>`;
    last = re.lastIndex;
  }

  return out + esc(code.slice(last));
}

/* ---------- render cards ---------- */

function card(e, i) {
  const long = e.code.split("\n").length > 12;

  const out = e.run ? "Change the input and run the preview." : e.hint || "";

  const searchableText = (
    e.title + " " +
    e.desc + " " +
    LANG[e.lang] + " " +
    e.code
  ).toLowerCase();

  return `<article class="card${e.wide ? " wide" : ""}"
    data-i="${i}"
    data-lang="${e.lang}"
    data-text="${esc(searchableText)}">

    <div class="meta">
      <span class="tag ${e.lang}">${LANG[e.lang]}</span>
      <span class="level">${e.level}</span>
    </div>

    <h3>${esc(e.title)}</h3>
    <p>${esc(e.desc)}</p>

    <div class="codewrap${long ? " collapsed" : ""}">
      <pre><code>${highlight(e.code, e.lang)}</code></pre>
    </div>

    ${long
      ? '<button type="button" class="link" data-act="expand">Show full code</button>'
      : ""}

    ${e.run ? `
      <div class="runner">
        ${e.run.input ? `
          <label>
            ${esc(e.run.input.label)}
            <input
              type="${e.run.input.type}"
              value="${esc(e.run.input.value)}"
              ${e.run.input.type === "number" ? 'step="any"' : ""}
            >
          </label>
        ` : ""}

        <button type="button" class="btn primary" data-act="run">
          ${esc(e.run.label)}
        </button>
      </div>

      <pre class="out" aria-live="polite">${esc(out)}</pre>
    ` : ""}

    <div class="actions">
      ${e.play
        ? '<button type="button" class="btn primary" data-act="play">Play it here</button>'
        : ""}

      ${e.site
        ? `<a class="btn primary" href="${esc(e.site)}" target="_blank" rel="noopener noreferrer">Visit website</a>`
        : ""}

      <button type="button" class="btn" data-act="copy">Copy code</button>

      ${e.editor
        ? `<a class="btn" href="${EDITOR}" target="_blank" rel="noopener noreferrer">Open Python editor</a>`
        : ""}
    </div>

    ${e.play ? `
      <div class="term" hidden>
        <div class="term-top">
          <span>Browser version of the game</span>
          <button type="button" class="link" data-act="restart">New game</button>
        </div>

        <div class="log" role="log" aria-live="polite"></div>

        <form>
          <span class="prompt"></span>
          <input autocomplete="off" aria-label="Your answer">
          <button type="submit">Enter</button>
        </form>
      </div>
    ` : ""}

    ${out && !e.run ? `<pre class="out">${esc(out)}</pre>` : ""}

    ${e.notes ? `
      <details class="notes">
        <summary>How it works</summary>
        <ul>${e.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
      </details>
    ` : ""}
  </article>`;
}

$("#grid").innerHTML = examples.map(card).join("");

/* ---------- number guessing game ---------- */

function makeGame(term) {
  const log = $(".log", term);
  const form = $("form", term);
  const input = $("input", form);
  const prompt = $(".prompt", term);

  let game;

  function say(text = "") {
    const line = document.createElement("div");
    line.textContent = text;
    log.append(line);
    log.scrollTop = log.scrollHeight;
  }

  function ask(text) {
    prompt.textContent = text;
    input.disabled = false;
    input.focus();
  }

  function finish() {
    game.done = true;
    input.disabled = true;
    prompt.textContent = "Game over. Choose New game to play again.";
  }

  function start() {
    log.textContent = "";

    game = {
      secret: 1 + Math.floor(Math.random() * 50),
      attempts: 0,
      hints: 1,
      low: 1,
      high: 50,
      done: false
    };

    [
      "========================================",
      "        NUMBER GUESSING GAME",
      "========================================",
      "",
      "Welcome to the Number Guessing Game!",
      "Guess a number from 1 to 50.",
      "You have five valid guesses and one hint.",
      ""
    ].forEach(say);

    ask("Guess the number: ");
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (game.done) return;

    const value = input.value.trim();
    input.value = "";

    if (!value) {
      say("Enter a number first.");
      return;
    }

    say(prompt.textContent + value);

    if (!/^\d+$/.test(value)) {
      say("Please enter a whole number.");
      return;
    }

    const number = Number(value);

    if (number < 1 || number > 50) {
      say("Choose a number from 1 to 50.");
      return;
    }

    game.attempts++;

    if (number === game.secret) {
      say("Congratulations!");
      say(`You guessed the number in ${game.attempts} attempts.`);
      finish();
      return;
    }

    if (number > game.secret) {
      game.high = Math.min(game.high, number - 1);
      say("Too high.");
    } else {
      game.low = Math.max(game.low, number + 1);
      say("Too low.");
    }

    if (game.attempts >= 5) {
      say("No attempts left.");
      say(`The number was ${game.secret}.`);
      finish();
      return;
    }

    say(`Attempts remaining: ${5 - game.attempts}`);
    say(`Possible range: ${game.low} to ${game.high}`);

    if (game.hints > 0) {
      const useHint = window.confirm("Use your hint?");

      if (useHint) {
        game.hints--;

        say(
          `Hint: the number is between ${Math.max(1, game.secret - 7)} and ${Math.min(50, game.secret + 7)}.`
        );
      }
    }

    ask("Guess again: ");
  });

  start();
  return { start };
}

/* ---------- card actions ---------- */

const games = new Map();

$("#grid").addEventListener("click", async event => {
  const button = event.target.closest("[data-act]");
  if (!button) return;

  const element = button.closest(".card");
  const example = examples[Number(element.dataset.i)];
  const action = button.dataset.act;

  if (action === "run") {
    const field = $(".runner input", element);
    const output = $(".runner", element).nextElementSibling;

    try {
      output.textContent = example.run.fn(field ? field.value : "");
    } catch (error) {
      output.textContent = "Preview error: " + error.message;
    }
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(example.code);
      button.textContent = "Copied!";
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = example.code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();

      const success = document.execCommand("copy");
      textarea.remove();

      button.textContent = success ? "Copied!" : "Copy unavailable";
    }

    setTimeout(() => {
      button.textContent = "Copy code";
    }, 1500);
  }

  if (action === "expand") {
    const wrapper = $(".codewrap", element);
    const collapsed = wrapper.classList.toggle("collapsed");

    button.textContent = collapsed
      ? "Show full code"
      : "Hide full code";
  }

  if (action === "play") {
    const terminal = $(".term", element);
    terminal.hidden = !terminal.hidden;

    button.textContent = terminal.hidden ? "Play it here" : "Hide game";

    if (!terminal.hidden) {
      if (!games.has(element)) {
        games.set(element, makeGame(terminal));
      } else {
        $(".term input", element).focus();
      }
    }
  }

  if (action === "restart") {
    games.get(element)?.start();
  }
});

/* ---------- search and filters ---------- */

const cards = $$(".card");
const chips = $$(".chip");
const search = $("#search");

let filter = "all";

function applyFilters() {
  const query = search.value.trim().toLowerCase();
  let shown = 0;

  cards.forEach(cardElement => {
    const matchesLanguage =
      filter === "all" || cardElement.dataset.lang === filter;

    const matchesText =
      cardElement.dataset.text.includes(query);

    const visible = matchesLanguage && matchesText;

    cardElement.hidden = !visible;

    if (visible) shown++;
  });

  $("#count").textContent =
    `Showing ${shown} of ${cards.length} examples`;

  $("#empty").hidden = shown !== 0;
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    filter = chip.dataset.f;

    chips.forEach(item => {
      item.setAttribute(
        "aria-pressed",
        String(item === chip)
      );
    });

    applyFilters();
  });
});

search.addEventListener("input", applyFilters);
applyFilters();

/* ---------- theme toggle ---------- */

const themeBtn = $("#themeToggle");
const root = document.documentElement;

function syncTheme() {
  const light = root.dataset.theme === "light";

  themeBtn.textContent = light ? "Dark" : "Light";

  themeBtn.setAttribute(
    "aria-label",
    light ? "Switch to dark theme" : "Switch to light theme"
  );

  $('meta[name="theme-color"]').setAttribute(
    "content",
    light ? "#f6f4ef" : "#0e1220"
  );
}

themeBtn.addEventListener("click", () => {
  root.dataset.theme =
    root.dataset.theme === "light" ? "dark" : "light";

  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch {}

  syncTheme();
});

syncTheme();