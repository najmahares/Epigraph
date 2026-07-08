const categories = [
  {
    name: "Existence",
    quotes: [
      {
        text: "The only true currency in this bankrupt world is what you share with someone else when you are uncool.",
        author: "Lester Bangs, Almost Famous",
      },
      {
        text: "You know that point in your life when you realise the house you grew up in isn't really your home anymore? All of a sudden even though you have some place where you put your shit, that idea of home is gone.",
        author: "Andrew, Garden State",
      },
      {
        text: "I don't necessarily agree with everything that I say.",
        author: "Marshall McLuhan",
      },
      {
        text: "A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness.",
        author: "Albert Einstein",
      },
      {
        text: "People who deny the existence of dragons are often eaten by dragons. From within.",
        author: "Ursula K. Le Guin",
      },
      {
        text: "Every society honors its live conformists and its dead troublemakers.",
        author: "Marshall McLuhan",
      },
      {
        text: "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.",
        author: "Friedrich Nietzsche",
      },
      {
        text: "I know there is no straight road. No straight road in this world. Only a giant labyrinth of intersecting crossroads.",
        author: "Federico Garcia Lorca",
      },
      {
        text: "I've often lost myself, in order to find the burn that keeps everything awake.",
        author: "Federico Garcia Lorca",
      },
      {
        text: "you are not too old and it is not too late to dive into your increasing depths where life calmly gives out its own secret.",
        author: "Rainer Maria Rilke",
      },
    ],
  },
  {
    name: "Mortality",
    quotes: [
      {
        text: "We just don't recognize life's most significant moments while they're happening. Back then I thought, 'Well, there'll be other days.' I didn't realize that that was the only day.",
        author: "Field of Dreams",
      },
      {
        text: "As I have not worried to be born, I do not worry to die.",
        author: "Federico Garcia Lorca",
      },
      {
        text: "Nobody owns life, but anyone who can pick up a frying pan owns death.",
        author: "William S. Burroughs",
      },
      {
        text: "Life is for the living. Death is for the dead. Let life be like music. And death a note unsaid.",
        author: "Langston Hughes",
      },
      {
        text: "Time is merely a feature of our memories and expectations.",
        author: "Ibn Sina",
      },
      {
        text: "They lose the day in expectation of the night, and the night in fear of the dawn.",
        author: "Seneca",
      },
      {
        text: "You will die not because you are ill, but because you are alive.",
        author: "Seneca",
      },
      { text: "While we are postponing, life speeds by.", author: "Seneca" },
      {
        text: "As is a tale, so is life: not how long it is, is what matters.",
        author: "Seneca",
      },
      {
        text: "If you cry because the sun has gone out of your life, your tears will prevent you from seeing the stars.",
        author: "Rabindranath Tagore",
      },
    ],
  },
  {
    name: "Resilience",
    quotes: [
      {
        text: "The best way to keep a prisoner from escaping is to make sure he never knows he's in prison.",
        author: "Fyodor Dostoevsky",
      },
      {
        text: "Your worst sin is that you have destroyed and betrayed yourself for nothing.",
        author: "Fyodor Dostoevsky",
      },
      {
        text: "It takes something more than intelligence to act intelligently.",
        author: "Fyodor Dostoevsky",
      },
      {
        text: "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
        author: "Fyodor Dostoevsky",
      },
      {
        text: "You have to die a few times before you can really live.",
        author: "Charles Bukowski",
      },
      {
        text: "If you're losing your soul and you know it, then you've still got a soul left to lose.",
        author: "Charles Bukowski",
      },
      {
        text: "Can you remember who you were before the world told you who to be?",
        author: "Charles Bukowski",
      },
      {
        text: "The wound is the place where light enters you.",
        author: "Rumi",
      },
      {
        text: "Out beyond the ideas of wrong doing and right doing there is a field. I'll meet you there.",
        author: "Rumi",
      },
      { text: "The cure for pain is in pain.", author: "Rumi" },
    ],
  },
  {
    name: "Connection",
    quotes: [
      {
        text: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        author: "Friedrich Nietzsche",
      },
      {
        text: "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
        author: "Herman Hesse",
      },
      {
        text: "Everything that irritates us about others can lead us to an understanding of ourselves.",
        author: "C.G. Jung",
      },
      {
        text: "Between what is said and not meant, and what is meant and not said, most of love is lost.",
        author: "Khalil Gibran",
      },
      {
        text: "Travel and tell no one, live a true love story and tell no one, live happily and tell no one, people ruin beautiful things.",
        author: "Khalil Gibran",
      },
      {
        text: "If you love somebody, let them go, for if they return, they were always yours. If they don't, they never were.",
        author: "Khalil Gibran",
      },
      {
        text: "Of all forms of caution, caution in love is perhaps the most fatal to true happiness.",
        author: "Bertrand Russell",
      },
      {
        text: "I have learned that to be with those I like is enough.",
        author: "Walt Whitman",
      },
      {
        text: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
        author: "When Harry Met Sally",
      },
      {
        text: "I gave her my heart and she gave me a pen.",
        author: "Say Anything",
      },
    ],
  },
  {
    name: "Ambition",
    quotes: [
      {
        text: "You ought to spend a little more time trying to make something of yourself and a little less time trying to impress people.",
        author: "The Breakfast Club",
      },
      {
        text: "You know what? Fuck beauty contests. Life is one fucking beauty contest after another. School, then college, then work… Fuck that. And fuck the Air Force Academy. If I want to fly, I'll find a way to fly. You do what you love, and fuck the rest.",
        author: "Dwayne, Little Miss Sunshine",
      },
      {
        text: "A real loser is somebody that's so afraid of not winning, they don't even try.",
        author: "Grandpa, Little Miss Sunshine",
      },
      {
        text: "It's like God gave you something man, all those stories you can make up. And He said, 'this is what we got for ya kid, try not to lose it.' Kids lose everything unless there's someone's there to look out for them.",
        author: "Stand By Me",
      },
      {
        text: "The older you get, the more rules they're gonna try to get you to follow. You just gotta keep living, man. L-I-V-I-N.",
        author: "David Wooderson, Dazed and Confused",
      },
      {
        text: "All I'm saying is that I want to look back and say that I did the best I could while I was stuck in this place. Had as much fun as I could while I was stuck in this place.",
        author: "Dawson, Dazed and Confused",
      },
      {
        text: "When you're young, not much matters. When you find something that you care about, then that's all you got.",
        author: "Telly, Kids",
      },
      {
        text: "I realised it was ridiculous being afraid, worrying about everything, wishing I was dead. All that shit, I'm tired of it. It was the best day of my life.",
        author: "Cameron, Ferris Bueller's Day Off",
      },
      {
        text: "There is a big world out there… bigger than prom, bigger than high school and it won't matter if you were the prom queen, the quarterback of the football team, or the biggest nerd in school. Find out who you are and try not to be afraid of it.",
        author: "Josie, Never Been Kissed",
      },
      {
        text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
        author: "Ferris Bueller",
      },
    ],
  },
  {
    name: "Knowledge",
    quotes: [
      {
        text: "Never let your sense of morals prevent you from doing what is right.",
        author: "Isaac Asimov, Foundation",
      },
      {
        text: "A serious and good philosophical work could be written consisting entirely of jokes.",
        author: "Ludwig Wittgenstein",
      },
      {
        text: "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
        author: "The Bhagavad Gita",
      },
      {
        text: "The books that the world calls immoral are books that show the world its own shame.",
        author: "Oscar Wilde",
      },
      {
        text: "Right or wrong, it's very pleasant to break something from time to time.",
        author: "Fyodor Dostoyevsky",
      },
      {
        text: "There are no passengers on spaceship earth. We are all crew.",
        author: "Marshall McLuhan",
      },
      {
        text: "Dear future generations: Please accept our apologies. We were rolling drunk on petroleum.",
        author: "Kurt Vonnegut",
      },
      {
        text: "I don't necessarily agree with everything that I say.",
        author: "Marshall McLuhan",
      },
      {
        text: "Most of our ancestors were not perfect ladies and gentlemen. The majority of them weren't even mammals.",
        author: "Robert Anton Wilson",
      },
      {
        text: "Disillusionment in living is finding that no one can really ever be agreeing with you completely in anything.",
        author: "Gertrude Stein",
      },
    ],
  },
  {
    name: "Freedom",
    quotes: [
      {
        text: "A slave is one who waits for someone to come and free him.",
        author: "Ezra Pound",
      },
      {
        text: "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
        author: "Bertrand Russell",
      },
      {
        text: "Without deviation from the norm, progress is not possible.",
        author: "Frank Zappa",
      },
      {
        text: "You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do.",
        author: "Patrick Ness, A Monster Calls",
      },
      {
        text: "Fantasy is escapist, and that is its glory. If a soldier is imprisoned by the enemy, don't we consider it his duty to escape?",
        author: "J.R.R. Tolkien",
      },
      {
        text: "Trust yourself. You know more than you think you do.",
        author: "Benjamin Spock",
      },
      {
        text: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
        author: "Albert Einstein",
      },
      {
        text: "There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.",
        author: "Elie Wiesel",
      },
      {
        text: "Make the money, don't let the money make you.",
        author: "The Players Club",
      },
      {
        text: "Worrying is like a rocking chair, it gives you something to do but it doesn't get you anywhere.",
        author: "Van Wilder",
      },
    ],
  },
  {
    name: "Creativity",
    quotes: [
      {
        text: "Genius is the recovery of childhood at will.",
        author: "Arthur Rimbaud",
      },
      {
        text: "We are all geniuses up to the age of ten.",
        author: "Aldous Huxley",
      },
      {
        text: "Your mind will answer most questions if you learn to relax and wait for the answer.",
        author: "William S. Burroughs",
      },
      {
        text: "Muddy water is best cleared by leaving it alone.",
        author: "Alan W. Watts",
      },
      {
        text: "Make your ego porous. Will is of little importance, complaining is nothing, fame is nothing.",
        author: "Rainer Maria Rilke",
      },
      {
        text: "All those moments will be lost in time, like tears in rain.",
        author: "Roy Batty, Blade Runner",
      },
      {
        text: "I just try to live every day as if I've deliberately come back to this one day to enjoy it as if it was the full final day of my extraordinary, ordinary life.",
        author: "About Time",
      },
      {
        text: "If you can't laugh at yourself, life's going to seem a whole lot longer than you'd like… what do you do? You laugh, you know. I'm not saying I don't cry, but in between, I laugh. And I realise how silly it is to take anything too seriously.",
        author: "Sam, Garden State",
      },
      {
        text: "The more you know who you are, and what you want, the less you let things upset you.",
        author: "Lost in Translation",
      },
      {
        text: "Searching for a boy in high school is as useless as searching for meaning in a Pauly Shore movie.",
        author: "Cher, Clueless",
      },
    ],
  },
  {
    name: "Silence",
    quotes: [
      {
        text: "The monotony and solitude of a quiet life stimulates the creative mind.",
        author: "Albert Einstein",
      },
      {
        text: "In solitude the mind gains strength and learns to lean upon itself.",
        author: "Laurence Sterne",
      },
      {
        text: "I have never found a companion that was so companionable as solitude.",
        author: "Henry David Thoreau",
      },
      {
        text: "The quieter you become, the more you are able to hear.",
        author: "Rumi",
      },
      {
        text: "Being alone has a power that very few people can handle.",
        author: "Steven Aitchison",
      },
      {
        text: "I live in that solitude which is painful in youth, but delicious in the years of maturity.",
        author: "Albert Einstein",
      },
      {
        text: "Silence is the sleep that nourishes wisdom.",
        author: "Francis Bacon",
      },
      {
        text: "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
        author: "Blaise Pascal",
      },
      {
        text: "To the mind that is still, the whole universe surrenders.",
        author: "Lao Tzu",
      },
      {
        text: "Whosoever is delighted in solitude is either a wild beast or a god.",
        author: "Aristotle",
      },
    ],
  },
  {
    name: "Chaos",
    quotes: [
      {
        text: "In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.",
        author: "Friedrich Nietzsche",
      },
      {
        text: "We do not have to visit a madhouse to find disordered minds; our planet is the mental institution of the universe.",
        author: "Johann Wolfgang von Goethe",
      },
      {
        text: "No snowflake ever falls in the wrong place.",
        author: "Zen Proverb",
      },
      {
        text: "The instant you speak about a thing, you miss the mark.",
        author: "Zen Proverb",
      },
      {
        text: "If you understand, things are just as they are; if you do not understand, things are just as they are.",
        author: "Zen Proverb",
      },
      {
        text: "The frog in the pond knows little of the great ocean.",
        author: "Zen Proverb",
      },
      {
        text: "Astonishment is the proper response to reality.",
        author: "Terence McKenna",
      },
      {
        text: "Life is not a problem to be solved, but a reality to be experienced.",
        author: "Soren Kierkegaard",
      },
      {
        text: "The longer I live, the more uninformed I feel. Only the young have an explanation for everything.",
        author: "Isabel Allende",
      },
      {
        text: "He who does not answer the questions has passed the test.",
        author: "Franz Kafka",
      },
    ],
  },
];

let activeCategory = 0;

function renderNav() {
  const navList = document.getElementById("navList");
  navList.innerHTML = categories
    .map(
      (cat, i) => `
    <div class="nav-item ${i === activeCategory ? "active" : ""}" data-index="${i}">
      <span class="nav-indicator"></span>
      <span class="nav-number">0${i + 1}</span>
      <span class="nav-name">${cat.name}</span>
    </div>
  `,
    )
    .join("");

  navList.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const index = parseInt(item.dataset.index);
      document
        .getElementById(`category-${index}`)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderQuotes() {
  const main = document.getElementById("main");
  main.innerHTML = categories
    .map(
      (category, catIndex) => `
    <div>
      <section id="category-${catIndex}" class="category-section" data-id="${catIndex}">
        <div class="category-label">
          ${category.name}
          <div class="category-label-line"></div>
        </div>
        ${category.quotes
          .map(
            (quote, qIndex) => `
          <div class="quote-block">
            <p class="quote-text">${quote.text}</p>
            <p class="quote-author">&mdash; ${quote.author}</p>
          </div>
        `,
          )
          .join("")}
      </section>
      ${catIndex < categories.length - 1 ? '<div class="section-divider"></div>' : ""}
    </div>
  `,
    )
    .join("");
}

function updateProgress() {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
  document.getElementById("progressBar").style.width = `${progress}%`;
  document.getElementById("progressText").textContent =
    `${Math.round(progress)}% through`;
}

function updateActiveCategory() {
  const sections = document.querySelectorAll(".category-section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight * 0.3 &&
      rect.bottom >= window.innerHeight * 0.3
    ) {
      activeCategory = parseInt(section.dataset.id);
      renderNav();
    }
  });
}

function toggleBackToTop() {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 600) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
}

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveCategory();
  toggleBackToTop();
});

renderNav();
renderQuotes();
updateProgress();
