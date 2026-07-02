/* =========================
   你主要改这里：基础配置
========================= */

const siteConfig = {
  loverName: "宝梓",
  birthdayDate: "2026.07.17",
  startDate: "2025.10.13",
  bgMusic: "./assets/music/bg.mp3"
};

/* 情书内容：后续你可以直接替换 */
const letterText = `
亲爱的宝梓：
展信佳，今天是小宝的生日，生日快乐！我们已经在一起九个多月了。
2025年10月13日是我们在一起的日子。但小宝在我心里开始于在食堂电梯里小宝很热情的向我打招呼，那个时候我都没发现你们。
后面我上了电梯，我向下看去，你挂在苏苏姐身上。样子十分可爱。瞬间的念头涌上我的心里：好亲近的感觉，如果她能是我对象该多好呀~
我一直在等一个机会，一个能自然而然的接近小宝的机会，我不想去刻意接近小宝，那样的话意图实在明显的不得了。获取是源自于我内心的害羞与胆怯。
直到那天我穿着棕色的毛衣上去汇报，当时还烫着一头卷毛。宝贝给我拿起手机拍摄了汇报时的照片，我想机会来了，但我和小宝也只是简单的说了几句，没有进一步邀约，可能这种事情我确实不擅长。
但我们有机会一起乘电梯下楼梯，最后在各回寝室时，小宝说对研究问题有点不明白的地方，以及后面对研究生规划有点迷茫，我就顺势给小宝说了点我自己的见解。
后来我们很自然的约着一起学习，一起交流学习和自己以前的个人经历。我们的相处时间越来越多。
在小宝去香港澳门旅游后回尔冰时，我确实担心小宝在寒冷的夜里在冷风中着凉受冻。但也确实没有其他意思，我觉得宝宝是一个很好的朋友，是一个我很想珍惜的人。
人在深夜总是最感性的时候。深夜多次翻看小宝的朋友圈与小红书，想进一步多了解小宝的性格和爱好。想要与小宝变成更好的朋友。
后面我们终于在2025年10月13日确定的关系。但我对于如何处理亲密关系的生疏程度远超了宝贝的预期，我知道如何实打实的对待自己的好朋友，却不知道如何好好对待我自己的女朋友。
我们在相处的前三个月里进行了多次的交心磨合，但好在我们都为对方而努力着，为我们的“感情树”长青常青努力着。我们不断的向对方靠近，了解对方的内心真实想法。
我们相处的越来越融洽，越来越亲密。后面的日子里我们没有过一次大的争吵，虽然有过小的摩擦，但我们都能及时的沟通和解决问题。我们都在努力的让对方开心，让对方感受到爱。
我们已经取得了九个多月的阶段性胜利，愿我们我们取得一辈子的胜利！

`;

/* 结尾内容：后续你可以直接替换 */
const endingText = `
生日快乐，宝梓
`;

/* 时间线内容：替换图片/视频路径和文案即可 */
const timelineData = [
  {
    month: "Month 01",
    title: "刚刚开始的我们",
    date: "第一个月",
    type: "image",
    src: "./assets/timeline/month-01.jpg",
    keywords: "靠近 / 开始",
    memory: "第一个月，我们互相吸引，慢慢靠近，宝贝给我送来了远方的月亮，宝宝想我，但宝宝不明说。",
    words: "还有我执着的为姐姐买豆浆~"
  },
  {
    month: "Month 02",
    title: "慢慢变成习惯",
    date: "第二个月",
    type: "image",
    src: "./assets/timeline/month-02.jpg",
    keywords: "分享 / 陪伴",
    memory: "第二个月，我们开始一起吃海底捞，一起参加音乐会，一起去逛中央大街，一起健身，一起运动。",
    words: "在这个冬天的第一场雪，我们一起赏雪，你以初雪为证，雪地落下爱我的痕迹~"
  },
  {
    month: "Month 03",
    title: "更靠近一点",
    date: "第三个月",
    type: "video",
    src: "./assets/timeline/month-03.mp4",
    keywords: "逛街 / 与你 ",
    memory: "第三个月，我们在冰天雪地的凌晨，一起去了有名的尔冰早市，一拍即合说走就走。",
    words: "和宝宝在一起真的很轻松愉悦！"
  },
  {
    month: "Month 04",
    title: "普通日子里的温柔",
    date: "第四个月",
    type: "image",
    src: "./assets/timeline/month-04.jpg",
    keywords: "温柔 / 依赖",
    memory: "第四个月，我们一起去滑雪、一起接受负三十多度的冰雪大世界的拷打，一起去东北大澡堂~",
    words: "如果只拿一个词能形容我们，一定是和谐"
  },
  {
    month: "Month 05",
    title: "过年",
    date: "第五个月",
    type: "image",
    src: "./assets/timeline/month-05.jpg",
    keywords: "一起在线学习 / 新年祝福",
    memory: "第五个月，我们寒假的回了家，但我们仍在线一起学习，想念通过手机屏幕1传递。",
    words: "宝宝还给我题了一副专属于我的对联！"
  },
  {
    month: "Month 06",
    title: "远方的亲亲已发货",
    date: "第六个月",
    type: "video",
    src: "./assets/timeline/month-06.mp4",
    keywords: "更喜欢 / 更坚定 / 想要以后",
    memory: "第六个月，宝宝的亲亲通过视频狠狠地传达到了我的心里，好喜欢！",
    words: "过年，宝宝穿着大红色的衣服，不是一般的诱人~"
  },
  {
    month: "Month 07",
    title: "认真珍惜彼此",
    date: "第七个月",
    type: "image",
    src: "./assets/timeline/month-07.jpg",
    keywords: "理解 / 珍惜",
    memory: "第七个月，我们也许更清楚地知道，喜欢不只是甜甜的瞬间，也包括理解、包容和一次次愿意靠近。",
    words: "我们也一起去了很多地方，我们一起走过的长度正不断增长。"
  },
  {
    month: "Month 08",
    title: "走到你的生日",
    date: "第八个月多一点",
    type: "image",
    src: "./assets/timeline/month-08.jpg",
    keywords: "生日 / 当下 / 未来",
    memory: "第八个月多一点，我们走到了你的生日。我突然觉得很幸运，今年的这个日子，我可以陪你一起过。",
    words: "这八个月不是终点，只是我们故事里很温柔的一章。未来，我还想陪你过很多很多个生日。"
  }
];


/* =========================
   以下是页面逻辑，一般不用改
========================= */

const $ = (selector) => document.querySelector(selector);

const bgMusic = $("#bgMusic");
const musicToggle = $("#musicToggle");

const startBtn = $("#startBtn");
const envelope = $("#envelope");
const openLetterBtn = $("#openLetterBtn");
const letterPaper = $("#letterPaper");
const letterTextEl = $("#letterText");
const toTimelineBtn = $("#toTimelineBtn");

const timelineList = $("#timelineList");
const toGiftBtn = $("#toGiftBtn");

const giftBox = $("#giftBox");

const endingTextEl = $("#endingText");
const lastUpdated = $("#lastUpdated");
const backTimelineBtn = $("#backTimelineBtn");
const backTopBtn = $("#backTopBtn");

let letterStarted = false;


/* 初始化 */
document.addEventListener("DOMContentLoaded", () => {
  initMedia();
  renderTimeline();
  renderEnding();
  createPetals();
  initObservers();
  bindEvents();
});


function initMedia() {
  bgMusic.src = siteConfig.bgMusic;
  bgMusic.volume = 0.42;
}


function renderEnding() {
  endingTextEl.textContent = endingText.trim();
  lastUpdated.textContent = `Last updated：${siteConfig.birthdayDate}`;
}


function bindEvents() {
  startBtn.addEventListener("click", async () => {
    await playMusic();
    musicToggle.classList.remove("hidden");
    scrollToSection("letter");
  });

  musicToggle.addEventListener("click", toggleMusic);

  openLetterBtn.addEventListener("click", openLetter);
  envelope.addEventListener("click", openLetter);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openLetter();
  });

  toTimelineBtn.addEventListener("click", () => scrollToSection("timeline"));
  toGiftBtn.addEventListener("click", () => scrollToSection("gift"));

  giftBox.addEventListener("click", openGift);
  giftBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openGift();
  });

  backTimelineBtn.addEventListener("click", () => scrollToSection("timeline"));
  backTopBtn.addEventListener("click", () => scrollToSection("intro"));
}


/* 音乐 */
async function playMusic() {
  try {
    await bgMusic.play();
    musicToggle.classList.remove("paused");
  } catch (err) {
    console.warn("音乐播放被浏览器拦截，需要用户再次点击。", err);
    musicToggle.classList.add("paused");
  }
}


function pauseMusic() {
  bgMusic.pause();
  musicToggle.classList.add("paused");
}


function toggleMusic() {
  if (bgMusic.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
}


/* 打开情书 */
function openLetter() {
  if (letterStarted) return;

  letterStarted = true;
  envelope.classList.add("open");
  openLetterBtn.classList.add("hidden");

  setTimeout(() => {
    letterPaper.classList.remove("hidden");
    typeWriter(letterText.trim(), letterTextEl, 42, () => {
      toTimelineBtn.classList.remove("hidden");
    });
  }, 850);
}


/* 打字机 */
function typeWriter(text, el, speed = 45, done) {
  let index = 0;
  el.textContent = "";

  const timer = setInterval(() => {
    el.textContent += text[index];
    index++;

    if (index >= text.length) {
      clearInterval(timer);
      if (typeof done === "function") done();
    }
  }, speed);
}


/* 时间线 */
function renderTimeline() {
  const html = timelineData.map((item) => {
    const media =
      item.type === "video"
        ? `
          <video
            class="timeline-media"
            src="${item.src}"
            controls
            playsinline
            preload="metadata"
          ></video>
        `
        : `
          <img
            class="timeline-media"
            src="${item.src}"
            alt="${escapeHtml(item.title)}"
            loading="lazy"
          />
        `;

    return `
      <article class="timeline-card reveal">
        <p class="timeline-month">${escapeHtml(item.month)}</p>
        <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
        <p class="timeline-date">${escapeHtml(item.date)}</p>

        <div class="polaroid">
          ${media}
        </div>

        <p class="timeline-keywords">关键词：${escapeHtml(item.keywords)}</p>
        <p class="timeline-copy">${escapeHtml(item.memory)}</p>
        <p class="timeline-copy">${escapeHtml(item.words)}</p>
      </article>
    `;
  }).join("");

  timelineList.innerHTML = html;
}


/* 观察滚动出现 */
function initObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.16
  });

  document.querySelectorAll(".reveal, .timeline-card").forEach((el) => {
    observer.observe(el);
  });
}


/* 礼物 - 跳转到分析报告 */
function openGift() {
  giftBox.classList.add("opened");
  setTimeout(() => {
    window.location.href = "gift.html";
  }, 650);
}


/* 花瓣 */
function createPetals() {
  const petalLayer = $("#petalLayer");
  const count = 26;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 8;
    const drift = -60 + Math.random() * 120;
    const scale = 0.65 + Math.random() * 0.85;
    const opacity = 0.45 + Math.random() * 0.45;

    petal.style.left = `${left}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.setProperty("--drift", `${drift}px`);
    petal.style.opacity = opacity;
    petal.style.transform = `scale(${scale})`;

    petalLayer.appendChild(petal);
  }
}


/* 滚动 */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* 防止注入 */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}