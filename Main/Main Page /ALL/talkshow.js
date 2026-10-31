// Talkshow video popup
const videoModal = document.querySelector("#videoModal");
if (videoModal && typeof videoModal.showModal === "function") {
  const frame = videoModal.querySelector(".vframe");
  const title = videoModal.querySelector("#videoTitle");
  let opener = null;

  // Accepts a full YouTube link or just the 11-character video ID
  const videoId = (v) => {
    const m = v.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
    return m ? m[1] : v.trim();
  };

  document.querySelectorAll(".more[data-video]").forEach((btn) => btn.addEventListener("click", () => {
    opener = btn;
    title.textContent = btn.dataset.title || "Video";
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(videoId(btn.dataset.video)) + "?autoplay=1&rel=0";
    iframe.title = title.textContent;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    frame.replaceChildren(iframe);
    videoModal.showModal();
  }));

  // Close with the button or by clicking the dark area outside the box (Esc works by default)
  videoModal.querySelector(".vclose").addEventListener("click", () => videoModal.close());
  videoModal.addEventListener("click", (e) => { if (e.target === videoModal) videoModal.close(); });

  // Remove the player when closed so the video stops, then return focus to the button
  videoModal.addEventListener("close", () => {
    frame.replaceChildren();
    if (opener) opener.focus();
  });
}