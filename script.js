const categories = [
  {
    name: "Power",
    color: "#8b0000",
    quotes: [
      { text: "Have you considered, in that infinite mind of yours, that the truly brilliant people are the ones who understand the realities we build were already built for us?", author: "Sara Hashem, The Jasad Heir" },
      { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
      { text: "Better terrible truths than kind lies.", author: "Leigh Bardugo, Six of Crows" },
      { text: "Anything worth doing always starts as a bad idea.", author: "Leigh Bardugo, The Grisha Trilogy" },
      { text: "Once men turned their thinking over to machines in the hope that this would set them free. But that only permitted other men with machines to enslave them.", author: "Frank Herbert, Dune" },
      { text: "Heroes aren't always the ones who win. They're the ones who lose, sometimes. But they keep fighting, they keep coming back. They don't give up. That's what makes them heroes.", author: "Cassandra Clare, The Dark Artifices" },
      { text: "Pick your enemies more carefully than your friends, they will be with you longer", author: "Cassandra Clare, The Dark Artifices" },
      { text: "A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well, or ill?", author: "John Steinbeck, East of Eden" },
      { text: "Power is not a means; it is an end. One does not establish a dictatorship in order to safeguard a revolution; one makes the revolution in order to establish the dictatorship.", author: "George Orwell, 1984" },
      { text: "The measure of a man is what he does with power.", author: "Plato" },
      { text: "It is better to be feared than loved, if you cannot be both.", author: "Niccolò Machiavelli, The Prince" },
      { text: "When you tear out a man's tongue, you are not proving him a liar, you're only telling the world that you fear what he might say.", author: "George R.R. Martin, A Clash of Kings" }
    ]
  },
  {
    name: "Truth",
    color: "#1a3a5c",
    quotes: [
      { text: "Reality was, after all, just so malleable, facts could be forgotten, truths suppressed, lives seen from only one angle like a trick prism, if only one resolved never to look too closely.", author: "RF Kuang, Babel" },
      { text: "To know what people really are and not destroy them is savagely remarkable. She has exceptional restraint.", author: "Olivie Blake, The Atlas Paradox" },
      { text: "Comedy shows us that one must not take life too seriously, and tragedy teaches us what happens when we pay no attention to what comedy teaches us.", author: "Carlos Ruiz Zafon, The City of Mist" },
      { text: "What happens when the walls we raise outlive the dangers they were built to keep out? At what point does a fort become a cage?", author: "GennaRose Nethercott, Thistlefoot" },
      { text: "Memory is time folding back on itself. To remember is to disengage from the present.", author: "Garth Stein, The Art of Racing in the Rain" },
      { text: "Some people were meant for great, lasting legacies. Others were meant for small moments of goodness, tiny but that rippled and grew in big, wide waves.", author: "Zoraida Cordova, The Inheritance of Orquidea Divina" },
      { text: "It's so easy to fall into the trap of believing you don't have control over your life, if we don't have control, then we don't have to hold ourselves responsible for our failings, or even our successes.", author: "Samantha Young, There with You" },
      { text: "There are no facts, only interpretations.", author: "Friedrich Nietzsche" },
      { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
      { text: "The truth will set you free, but first it will make you miserable.", author: "James A. Garfield" },
      { text: "Perhaps one did not want to be loved so much as to be understood.", author: "George Orwell, 1984" },
      { text: "Rather than love, than money, than fame, give me truth.", author: "Henry David Thoreau, Walden" }
    ]
  },
  {
    name: "Self",
    color: "#4a2040",
    quotes: [
      { text: "I thought about my future. Who I used to be, who I was becoming, and who I wanted to be. And it was strange how revelations felt like they happened all of a sudden, but in reality, it took many small, almost indiscernible moments over the course of weeks, months, and years.", author: "Jennifer L. Armentrout, From Blood and Ash" },
      { text: "Adventure works in any strand. It calls to those who care more for living than their lives.", author: "Amal El-Mohtar and Max Gladstone, This is How You Lose the Time War" },
      { text: "He is at home with his solitude as the note reverberating inside a bell. Prefers it. Will protect it to the death.", author: "Peter Heller, The Dog Stars" },
      { text: "No, vertigo is something other than the fear of falling. It is the voice of the emptiness below us which tempts and lures us, it is the desire to fall, against which, terrified, we defend ourselves.", author: "Milan Kundera, The Unbearable Lightness of Being" },
      { text: "How hidden the heart, Nance thought. How frightened we are of being known, and yet how desperately we long for it.", author: "Hannah Kent, The Good People" },
      { text: "The characters in my novels are my own unrealized possibilities. That is why I am equally fond of them all and equally horrified by them.", author: "Milan Kundera, The Unbearable Lightness of Being" },
      { text: "You have power over your mind, not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius, Meditations" },
      { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott, Little Women" },
      { text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.", author: "Carl Jung" },
      { text: "I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself.", author: "Charlotte Brontë, Jane Eyre" },
      { text: "Perhaps it's good for one to suffer. Can an artist do anything if he's happy? Would he ever want to do anything?", author: "Aldous Huxley" }
    ]
  },
  {
    name: "Stories",
    color: "#2c4a20",
    quotes: [
      { text: "You see, doors are many things: fissures and cracks, ways between, mysteries and borders. But more than anything else, doors are change.", author: "Alix E. Harrow, The Ten Thousand Doors of January" },
      { text: "If a story does its job, it doesn't ever end. Not really. But it can change. This is the nature of folktales.", author: "GennaRose Nethercott, Thistlefoot" },
      { text: "But books, like people, die too. They die in fires or floods or in the mouths of worms or at the whims of tyrants. If they are not safeguarded, they go out of the world.", author: "Anthony Doerr, Cloud Cuckoo Land" },
      { text: "The truth is infinitely more complicated, that we are beautiful even as we are all part of the problem, and that to be a part of the problem is to be human.", author: "Anthony Doerr, Cloud Cuckoo Land" },
      { text: "I think a person gets seen, really looked at, looked into, seen the way a leopard would see into you, maybe ten times in their entire life.", author: "Daniel Nayeri, Everything Sad Is Untrue" },
      { text: "So much of being adult is reconciling ourselves with the awkwardness and strangeness of our own feelings. Youth is the time of life lived for some imaginary audience.", author: "Douglas Coupland, Girlfriend in a Coma" },
      { text: "People think that stories are shaped by people. In fact, it's the other way around.", author: "Terry Pratchett, Witches Abroad" },
      { text: "The story is the truth inside the lie.", author: "Stephen King" },
      { text: "We are made of star-stuff. We are a way for the cosmos to know itself.", author: "Carl Sagan, Cosmos" },
      { text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", author: "George R.R. Martin, A Dance with Dragons" },
      { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou, I Know Why the Caged Bird Sings" }
    ]
  },
  {
    name: "Fire",
    color: "#8b4500",
    quotes: [
      { text: "There is some good in this world, and it's worth fighting for.", author: "J.R.R. Tolkien, The Two Towers" },
      { text: "Beware; for I am fearless, and therefore powerful.", author: "Mary Shelley, Frankenstein" },
      { text: "The only way out of the labyrinth of suffering is to forgive.", author: "John Green, Looking for Alaska" },
      { text: "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.", author: "William Shakespeare, Hamlet" },
      { text: "We read to know we are not alone.", author: "C.S. Lewis" },
      { text: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway.", author: "Harper Lee, To Kill a Mockingbird" },
      { text: "Find what you love and let it kill you.", author: "Charles Bukowski" },
      { text: "The world breaks everyone, and afterward, many are strong at the broken places.", author: "Ernest Hemingway, A Farewell to Arms" },
      { text: "It is not in the stars to hold our destiny but in ourselves.", author: "William Shakespeare, Julius Caesar" },
      { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde, Lady Windermere's Fan" },
      { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
      { text: "Sometimes even to live is an act of courage.", author: "Seneca" }
    ]
  },
  {
    name: "Shadow",
    color: "#221a1a",
    quotes: [
      { text: "The books are to remind us what asses and fools we are. They're Caesar's praetorian guard, whispering as the parade roars down the avenue.", author: "Ray Bradbury, Fahrenheit 451" },
      { text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion.", author: "Franz Kafka" },
      { text: "The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them.", author: "Stephen King" },
      { text: "Words can be like X-rays if you use them properly, they'll go through anything. You read and you're pierced.", author: "Aldous Huxley, Brave New World" },
      { text: "There is no real ending. It's just the place where you stop the story.", author: "Frank Herbert" },
      { text: "We tell ourselves stories in order to live.", author: "Joan Didion, The White Album" },
      { text: "I have absolutely no pleasure in the stimulants in which I sometimes so madly indulge. It has not been in the pursuit of pleasure that I have periled life and reputation and reason. It has been the desperate attempt to escape from torturing memories.", author: "Edgar Allan Poe" },
      { text: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.", author: "H.P. Lovecraft, Supernatural Horror in Literature" },
      { text: "Hell is empty and all the devils are here.", author: "William Shakespeare, The Tempest" },
      { text: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung" },
      { text: "To live is to suffer, to survive is to find some meaning in the suffering.", author: "Friedrich Nietzsche" }
    ]
  },
  {
    name: "Light",
    color: "#7a6a00",
    quotes: [
      { text: "She read books as one would breathe air, to fill up and live.", author: "Annie Dillard, The Living" },
      { text: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.", author: "Charles Dickens" },
      { text: "So Matilda's strong young mind continued to grow, nurtured by the voices of all those authors who had sent their books out into the world like ships on the sea.", author: "Roald Dahl, Matilda" },
      { text: "A word after a word after a word is power.", author: "Margaret Atwood" },
      { text: "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.", author: "Carl Sagan" },
      { text: "Show me a family of readers, and I will show you the people who move the world.", author: "Napoleon Bonaparte" },
      { text: "Let the beauty of what you love be what you do.", author: "Rumi" },
      { text: "Tell me, what is it you plan to do with your one wild and precious life?", author: "Mary Oliver, The Summer Day" },
      { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
      { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { text: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo, Les Misérables" }
    ]
  },
  {
    name: "Stillness",
    color: "#1c2e3a",
    quotes: [
      { text: "I can feel infinitely alive curled up on the sofa reading a book.", author: "Benedict Cumberbatch" },
      { text: "Some books leave us free and some books make us free.", author: "Ralph Waldo Emerson" },
      { text: "Books and doors are the same thing. You open them, and you go through into another world.", author: "Jeanette Winterson" },
      { text: "It is really hard to be lonely very long in a world of words. Even if you don't have friends somewhere, you still have language.", author: "Naomi Shihab Nye" },
      { text: "Read a lot. Expect something big, something exalting or deepening from a book. No book is worth reading that isn't worth re-reading.", author: "Susan Sontag" },
      { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" },
      { text: "Smile, breathe and go slowly.", author: "Thich Nhat Hanh" },
      { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
      { text: "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.", author: "Hermann Hesse, Siddhartha" },
      { text: "To see a World in a Grain of Sand And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand And Eternity in an hour.", author: "William Blake, Auguries of Innocence" },
      { text: "The truth is, I often like women. I like their unconventionality. I like their completeness. I like their anonymity.", author: "Virginia Woolf, A Room of One's Own" }
    ]
  },
  {
    name: "Memory",
    color: "#3a1c2e",
    quotes: [
      { text: "The past is never dead. It's not even past.", author: "William Faulkner, Requiem for a Nun" },
      { text: "Memory is the mother of all wisdom.", author: "Aeschylus" },
      { text: "We are what we remember. We are what we forget.", author: "Kazuo Ishiguro, The Buried Giant" },
      { text: "Remembrance of things past is not necessarily the remembrance of things as they were.", author: "Marcel Proust" },
      { text: "The heart's memory eliminates the bad and magnifies the good.", author: "Gabriel García Márquez, Love in the Time of Cholera" },
      { text: "Memory believes before knowing remembers.", author: "William Faulkner, Light in August" },
      { text: "The act of memory is an act of creation.", author: "Vladimir Nabokov, Speak, Memory" },
      { text: "I am a part of all that I have met.", author: "Alfred Lord Tennyson, Ulysses" },
      { text: "What we remember is not the event, but the story we tell ourselves about the event.", author: "Joan Didion" },
      { text: "Time is the substance I am made of. Time is a river which sweeps me along, but I am the river.", author: "Jorge Luis Borges, Labyrinths" }
    ]
  }
];

let activeCategory = 0;
let viewingFavorites = false;
let favorites = JSON.parse(localStorage.getItem("epigraph_favs") || "[]");
const ambientBg = document.getElementById("ambientBg");

function renderNav() {
  const navList = document.getElementById("navList");
  navList.innerHTML = categories.map((cat, i) => `
    <div class="nav-item ${i === activeCategory && !viewingFavorites ? "active" : ""}" data-index="${i}">
      <span class="nav-indicator"></span>
      <span class="nav-number">0${i + 1}</span>
      <span class="nav-name">${cat.name}</span>
    </div>
  `).join("");

  navList.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      viewingFavorites = false;
      document.getElementById("favToggleBtn").classList.remove("active");
      const index = parseInt(item.dataset.index);
      document.getElementById(`category-${index}`).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderQuotes() {
  const main = document.getElementById("main");
  
  if (viewingFavorites) {
    const favQuotes = [];
    categories.forEach((cat) => {
      cat.quotes.forEach((q) => {
        if (favorites.includes(q.text)) favQuotes.push(q);
      });
    });

    main.innerHTML = `
      <section class="category-section">
        <div class="category-label">Saved Epigraphs</div>
        ${favQuotes.length === 0 ? '<p class="command-empty">No favorites saved yet.</p>' : ""}
        ${favQuotes.map((quote) => `
          <div class="quote-block active">
            <p class="quote-text">${quote.text}</p>
            <p class="quote-author">${quote.author}</p>
            <div class="quote-actions">
              <button class="action-btn copy-btn" data-text="${quote.text}" data-author="${quote.author}">Copy</button>
              <button class="action-btn read-btn" data-text="${quote.text}">Read</button>
              <button class="action-btn bookmark-btn active" data-text="${quote.text}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>
        `).join("")}
      </section>
    `;
  } else {
    main.innerHTML = categories.map((category, catIndex) => `
      <div>
        <section id="category-${catIndex}" class="category-section" data-id="${catIndex}">
          <div class="category-label">${category.name}</div>
          ${category.quotes.map((quote) => {
            const isFav = favorites.includes(quote.text);
            return `
            <div class="quote-block">
              <p class="quote-text">${quote.text}</p>
              <p class="quote-author">${quote.author}</p>
              <div class="quote-actions">
                <button class="action-btn copy-btn" data-text="${quote.text}" data-author="${quote.author}">Copy</button>
                <button class="action-btn read-btn" data-text="${quote.text}">Read</button>
                <button class="action-btn bookmark-btn ${isFav ? "active" : ""}" data-text="${quote.text}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </button>
              </div>
            </div>
          `}).join("")}
        </section>
        ${catIndex < categories.length - 1 ? '<div class="section-divider"></div>' : ""}
      </div>
    `).join("");
  }

  attachActionListeners();
  if (!viewingFavorites) setupObserver();
}

function attachActionListeners() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = `"${btn.dataset.text}"\n\n— ${btn.dataset.author}`;
      navigator.clipboard.writeText(content).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "Copied";
        btn.style.color = "#c9a96e";
        setTimeout(() => { btn.innerHTML = originalText; btn.style.color = ""; }, 2000);
      });
    });
  });

  document.querySelectorAll(".read-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(btn.dataset.text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    });
  });

  document.querySelectorAll(".bookmark-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.dataset.text;
      if (favorites.includes(text)) {
        favorites = favorites.filter((t) => t !== text);
        btn.classList.remove("active");
      } else {
        favorites.push(text);
        btn.classList.add("active");
      }
      localStorage.setItem("epigraph_favs", JSON.stringify(favorites));
      if (viewingFavorites) renderQuotes();
    });
  });
}

function setupObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
      else entry.target.classList.remove("active");
    });
  }, { root: null, rootMargin: "-25% 0px -25% 0px", threshold: 0 });

  document.querySelectorAll(".quote-block").forEach((block) => observer.observe(block));
}

document.getElementById("favToggleBtn").addEventListener("click", () => {
  viewingFavorites = !viewingFavorites;
  document.getElementById("favToggleBtn").classList.toggle("active", viewingFavorites);
  renderNav();
  renderQuotes();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateProgress() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
  document.getElementById("progressBar").style.width = `${progress}%`;
  document.getElementById("progressText").textContent = `${Math.round(progress)}% through`;
}

function updateActiveCategory() {
  if (viewingFavorites) return;
  const sections = document.querySelectorAll(".category-section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
      const newIndex = parseInt(section.dataset.id);
      if (newIndex !== activeCategory) {
        activeCategory = newIndex;
        renderNav();
        ambientBg.style.background = `radial-gradient(circle at 50% 50%, ${categories[activeCategory].color} 0%, transparent 60%)`;
      }
    }
  });
}

function toggleBackToTop() {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 600) btn.classList.add("visible");
  else btn.classList.remove("visible");
}

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const overlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function openSearch() {
  overlay.classList.add("open");
  searchInput.focus();
  handleSearch("");
}

function closeSearch() {
  overlay.classList.remove("open");
  searchInput.value = "";
}

function handleSearch(query) {
  const q = query.toLowerCase();
  if (!q) {
    searchResults.innerHTML = '<div class="command-empty">Type to search...</div>';
    return;
  }
  
  const results = [];
  categories.forEach((cat) => {
    cat.quotes.forEach((quote) => {
      if (quote.text.toLowerCase().includes(q) || quote.author.toLowerCase().includes(q)) {
        results.push(quote);
      }
    });
  });

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="command-empty">No results found.</div>';
    return;
  }

  searchResults.innerHTML = results.slice(0, 8).map((r) => `
    <div class="command-result-item" data-author="${r.author}">
      <span class="result-text">${r.text}</span>
      <span class="result-author">${r.author}</span>
    </div>
  `).join("");

  document.querySelectorAll(".command-result-item").forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.querySelector(".result-text").textContent;
      closeSearch();
      viewingFavorites = false;
      renderQuotes();
      
      setTimeout(() => {
        const blocks = document.querySelectorAll(".quote-text");
        blocks.forEach((b) => {
          if (b.textContent === text) {
            b.closest(".quote-block").scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
      }, 100);
    });
  });
}

document.getElementById("searchBtn").addEventListener("click", openSearch);
searchInput.addEventListener("input", (e) => handleSearch(e.target.value));

window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    overlay.classList.contains("open") ? closeSearch() : openSearch();
  }
  if (e.key === "Escape" && overlay.classList.contains("open")) closeSearch();
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeSearch();
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveCategory();
  toggleBackToTop();
});

renderNav();
renderQuotes();
updateProgress();
