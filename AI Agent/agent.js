// ---- Edit these two ----
const OWNER = "Prijam Nyaupane";
const WORKER_URL = "https://myagent.nprijam.workers.dev";
// ------------------------

const $ = id => document.getElementById(id);
const log = $("log"), input = $("input"), btn = $("btn");
const history = [];

$("owner").textContent = OWNER;
$("sub").textContent = `About ${OWNER}, or whatever is on your mind.`;
[`Who is ${OWNER}?`, "Where can I watch movies?", "Recommend me a show", "Tell me something fun"].forEach(q => {
  const b = document.createElement("button");
  b.type = "button"; b.textContent = q; b.onclick = () => send(q);
  $("chips").appendChild(b);
});

function linkify(el, text) {
  text.split(/(https?:\/\/[^\s)]+)/g).forEach((part, i) => {
    if (i % 2) {
      const a = document.createElement("a");
      a.href = part; a.textContent = part; a.target = "_blank"; a.rel = "noopener";
      el.appendChild(a);
    } else el.appendChild(document.createTextNode(part));
  });
}

function add(role, text) {
  const d = document.createElement("div");
  d.className = "msg " + (role === "user" ? "me" : "bot");
  linkify(d, text);
  log.appendChild(d);
  log.scrollTop = log.scrollHeight;
  return d;
}

async function send(text) {
  text = text.trim();
  if (!text || btn.disabled) return;
  const intro = $("intro"); if (intro) intro.remove();

  // "/teach SECRET answer" is for the site owner; it is never added to the chat history
  const teach = /^\/teach\s/.test(text);
  add("user", teach ? text.replace(/^(\/teach)\s+\S+/, "$1 ••••") : text);
  if (!teach) history.push({ role: "user", content: text });
  input.value = ""; btn.disabled = true;
  const pending = add("bot", "Thinking…");

  try {
    const r = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: teach ? [{ role: "user", content: text }] : history })
    });
    const { reply } = await r.json();
    pending.textContent = ""; linkify(pending, reply);
    if (!teach) history.push({ role: "assistant", content: reply });
  } catch (e) {
    pending.textContent = "Couldn't reach the assistant. Please try again in a moment.";
    if (!teach) history.pop();
  }
  btn.disabled = false; input.focus(); log.scrollTop = log.scrollHeight;
}

$("form").addEventListener("submit", e => { e.preventDefault(); send(input.value); });