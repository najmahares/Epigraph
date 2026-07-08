const categories = [
  {
    name: "Power",
    quotes: [
      {
        text: "Have you considered, in that infinite mind of yours, that the truly brilliant people are the ones who understand the realities we build were already built for us?",
        author: "Sara Hashem, The Jasad Heir",
      },
      {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
      },
      {
        text: "Better terrible truths than kind lies.",
        author: "Leigh Bardugo, Six of Crows",
      },
      {
        text: "Anything worth doing always starts as a bad idea.",
        author: "Leigh Bardugo, The Grisha Trilogy",
      },
      {
        text: "Once men turned their thinking over to machines in the hope that this would set them free. But that only permitted other men with machines to enslave them.",
        author: "Sarah J. Maas, Heir of",
      },
      {
        text: "Heroes aren't always the ones who win. They're the ones who lose, sometimes. But they keep fighting, they keep coming back. They don't give up. That's what makes them heroes.",
        author: "Cassandra Clare, The Dark Artifices",
      },
      {
        text: "We are all the pieces of what we remember. We hold in ourselves the hopes and fears of those who love us. As long as there is love and memory, there is no true loss.",
        author: "Cassandra Clare, The Infernal Devices",
      },
      {
        text: "Once men turned their thinking over to machines in the hope that this would set them free. But that only permitted other men with machines to enslave them.",
        author: "Frank Herbert, Dune",
      },
      {
        text: "Pick your enemies more carefully than your friends, they will be with you longer",
        author: "Cassandra Clare, The Dark Artifices",
      },
      {
        text: "She wasn't a wielder of chains; she was a breaker of them. She was the library's will made flesh.",
        author: "Margaret Rogerson, Sorcery of Thorns",
      },
    ],
  },
  {
    name: "Truth",
    quotes: [
      {
        text: "Reality was, after all, just so malleable, facts could be forgotten, truths suppressed, lives seen from only one angle like a trick prism, if only one resolved never to look too closely.",
        author: "RF Kuang, Babel",
      },
      {
        text: "English did not just borrow words from other languages; it was stuffed to the brim with foreign influences, a Frankenstein vernacular. And Robin found it incredible, how this country, whose citizens prided themselves so much on being better than the rest of the world, could not make it through an afternoon tea without borrowed goods.",
        author: "RF Kuang, Babel",
      },
      {
        text: "To know what people really are and not destroy them is savagely remarkable. She has exceptional restraint.",
        author: "Olivie Blake, The Atlas Paradox",
      },
      {
        text: "Comedy shows us that one must not take life too seriously, and tragedy teaches us what happens when we pay no attention to what comedy teaches us.",
        author: "Carlos Ruiz Zafon, The City of Mist",
      },
      {
        text: "It's so easy to fall into the trap of believing you don't have control over your life, if we don't have control, then we don't have to hold ourselves responsible for our failings, or even our successes. Some people use that as an easy way out.",
        author: "Samantha Young, There with You",
      },
      {
        text: "What happens when the walls we raise outlive the dangers they were built to keep out? At what point does a fort become a cage?",
        author: "GennaRose Nethercott, Thistlefoot",
      },
      {
        text: "Some people were meant for great, lasting legacies. Others were meant for small moments of goodness, tiny but that rippled and grew in big, wide waves.",
        author: "Zoraida Cordova, The Inheritance of Orquidea Divina",
      },
      {
        text: "The things that look fixed in the world, child, mountains, wealth, empires, their permanence is only an illusion. We believe they will last, but that is only because of the brevity of our own lives. From the perspective of God, cities like this come and go like ant-hills.",
        author: "Anthony Doerr, Cloud Cuckoo Land",
      },
      {
        text: "Memory is time folding back on itself. To remember is to disengage from the present.",
        author: "Garth Stein, The Art of Racing in the Rain",
      },
      {
        text: "But grief isn't a competition. It's not an identical pain that we all meet one day when death finds us. It's a monster, personalized by our love and memories to devour us just so. Grief is suffering, tailored.",
        author: "Tracy Deonn, Bloodmarked",
      },
    ],
  },
  {
    name: "Self",
    quotes: [
      {
        text: "I thought about my future. Who I used to be, who I was becoming, and who I wanted to be. And it was strange how revelations felt like they happened all of a sudden, but in reality, it took many small, almost indiscernible moments over the course of weeks, months, and years. Bottom line, I knew I didn't want to be someone who hid anymore, whether behind a veil, to others, or to myself.",
        author: "Jennifer L. Armentrout, From Blood and Ash",
      },
      {
        text: "Adventure works in any strand. It calls to those who care more for living than their lives.",
        author:
          "Amal El-Mohtar and Max Gladstone, This is How You Lose the Time War",
      },
      {
        text: "Heroes are just villains with worse survival instincts and moral superiority complexes.",
        author: "Amanda Foody and Christine Herman, All of Our Demise",
      },
      {
        text: "He is at home with his solitude as the note reverberating inside a bell. Prefers it. Will protect it to the death.",
        author: "Peter Heller, The Dog Stars",
      },
      {
        text: "No, vertigo is something other than the fear of falling. It is the voice of the emptiness below us which tempts and lures us, it is the desire to fall, against which, terrified, we defend ourselves.",
        author: "Milan Kundera, The Unbearable Lightness of Being",
      },
      {
        text: "The characters in my novels are my own unrealized possibilities. That is why I am equally fond of them all and equally horrified by them.",
        author: "Milan Kundera, The Unbearable Lightness of Being",
      },
      {
        text: "Something like laughter. That a flower could be this small, this fleeting, that a snowflake could be so large, so persistent. The improbable simplicity. I groaned. Why don't we have a word for the utterance between laughing and crying?",
        author: "Peter Heller, The Dog Stars",
      },
      {
        text: "In the sunset of dissolution, everything is illuminated by the aura of nostalgia, even the guillotine.",
        author: "Milan Kundera, The Unbearable Lightness of Being",
      },
      {
        text: "But then again, I wonder if what we feel in our hearts today isn't like these raindrops still falling on us from the soaked leaves above, even though the sky itself long stopped raining. I'm wondering if without our memories, there's nothing for it but for our love to fade and die.",
        author: "Kazuo Ishiguro, The Buried Giant",
      },
      {
        text: "How hidden the heart, Nance thought. How frightened we are of being known, and yet how desperately we long for it.",
        author: "Hannah Kent, The Good People",
      },
    ],
  },
  {
    name: "Stories",
    quotes: [
      {
        text: "You see, doors are many things: fissures and cracks, ways between, mysteries and borders. But more than anything else, doors are change.",
        author: "Alix E. Harrow, The Ten Thousand Doors of January",
      },
      {
        text: "Perhaps I keep writing because I was raised in a world where words have power, where curves and spirals of ink adorn sales and skin, where a sufficiently talented word-worker might reach out and remake her world.",
        author: "Alix E. Harrow, The Ten Thousand Doors of January",
      },
      {
        text: "If a story does its job, it doesn't ever end. Not really. But it can change. This is the nature of folktales. They shift to fit each teller. Take whatever form suits the bearer best. What begins as a story of sorrow can be acknowledged, held like a sweetheart to the chest, rocked and sung to. And then it can be set down to sleep. It can become an offering. A lantern. An ember to lead you through the dark.",
        author: "GennaRose Nethercott, Thistlefoot",
      },
      {
        text: "But books, like people, die too. They die in fires or floods or in the mouths of worms or at the whims of tyrants. If they are not safeguarded, they go out of the world. And when a great book goes out of the world, the memory dies a second death.",
        author: "Anthony Doerr, Cloud Cuckoo Land",
      },
      {
        text: "The truth is infinitely more complicated, that we are beautiful even as we are all part of the problem, and that to be a part of the problem is to be human.",
        author: "Anthony Doerr, Cloud Cuckoo Land",
      },
      {
        text: "I have said that he has the power to deliver a compliment and make it hurt. So, too, he can say something that ought to be insulting and deliver it in such a way that it feels like being truly seen.",
        author: "Holly Black, The Wicked King",
      },
      {
        text: "It doesn't take much to come into your own; all it takes is someone's gaze. It's not totally accurate to say that I felt seen. It was more that: Beheld by her, I learned how to become myself. Her interest actualized me.",
        author: "Ling Ma, Bliss Montage",
      },
      {
        text: "So much of being adult is reconciling ourselves with the awkwardness and strangeness of our own feelings. Youth is the time of life lived for some imaginary audience.",
        author: "Douglas Coupland, Girlfriend in a Coma",
      },
      {
        text: "I think a person gets seen, really looked at, looked into, seen the way a leopard would see into you, maybe ten times in their entire life. And even then, who knows what a leopard would be thinking.",
        author: "Daniel Nayeri, Everything Sad Is Untrue",
      },
      {
        text: "What they ask, quietly, with eyes too old for their years, is to be seen. To be held in the gaze of someone who will not flinch at the storm.",
        author: "Ivy J Garmon",
      },
    ],
  },
  {
    name: "Fire",
    quotes: [
      {
        text: "There is some good in this world, and it's worth fighting for.",
        author: "J.R.R. Tolkien, The Two Towers",
      },
      {
        text: "Beware; for I am fearless, and therefore powerful.",
        author: "Mary Shelley, Frankenstein",
      },
      {
        text: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.",
        author: "Harper Lee, To Kill a Mockingbird",
      },
      {
        text: "A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well, or ill?",
        author: "John Steinbeck, East of Eden",
      },
      {
        text: "The only way out of the labyrinth of suffering is to forgive.",
        author: "John Green, Looking for Alaska",
      },
      {
        text: "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.",
        author: "William Shakespeare, Hamlet",
      },
      { text: "We read to know we are not alone.", author: "C.S. Lewis" },
      {
        text: "Books are mirrors: you only see in them what you already have inside you.",
        author: "Carlos Ruiz Zafon, The Shadow of the Wind",
      },
      {
        text: "Stories of imagination tend to upset those without one.",
        author: "Terry Pratchett",
      },
      {
        text: "Fantasy is escapist, and that is its glory. If a soldier is imprisoned by the enemy, don't we consider it his duty to escape? If we value the freedom of mind and soul, if we're partisans of liberty, then it's our plain duty to escape, and to take as many people with us as we can!",
        author: "J.R.R. Tolkien",
      },
    ],
  },
  {
    name: "Shadow",
    quotes: [
      {
        text: "The books are to remind us what asses and fools we are. They're Caesar's praetorian guard, whispering as the parade roars down the avenue, 'Remember, Caesar, thou art mortal.' Most of us can't rush around, talking to everyone, know all the cities of the world, we haven't time, money or that many friends. The things you're looking for, Montag, are in the world, but the only way the average chap will ever see ninety-nine per cent of them is in a book. Don't ask for guarantees. And don't look to be saved in any one thing, person, machine, or library. Do your own bit of saving, and if you drown, at least die knowing you were headed for shore.",
        author: "Ray Bradbury, Fahrenheit 451",
      },
      {
        text: "If you don't want a man unhappy politically, don't give him two sides to a question to worry him; give him one. Better yet, give him none. Let him forget there is such a thing as war. If the government is inefficient, top-heavy, and tax-mad, better it be all those than that people worry over it. Peace, Montag. Give the people contests they win by remembering the words to more popular songs or the names of state capitals or how much corn Iowa grew last year. Cram them full of noncombustible data, chock them so damned full of 'facts' they feel stuffed, but absolutely 'brilliant' with information. Then they'll feel they're thinking, they'll get a sense of motion without moving. And they'll be happy, because facts of that sort don't change.",
        author: "Ray Bradbury, Fahrenheit 451",
      },
      {
        text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
        author: "Franz Kafka",
      },
      {
        text: "The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them, words shrink things that seemed limitless when they were in your head to no more than living size when they're brought out. But it's more than that, isn't it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you've said at all, or why you thought it was so important that you almost cried while you were saying it. That's the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear.",
        author: "Stephen King",
      },
      {
        text: "Words can be like X-rays if you use them properly, they'll go through anything. You read and you're pierced.",
        author: "Aldous Huxley, Brave New World",
      },
      {
        text: "There is no real ending. It's just the place where you stop the story.",
        author: "Frank Herbert",
      },
      {
        text: "If you want to really hurt your parents, and you don't have the nerve to be gay, the least you can do is go into the arts. I'm not kidding. The arts are not a way to make a living. They are a very human way of making life more bearable. Practicing an art, no matter how well or badly, is a way to make your soul grow, for heaven's sake. Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possibly can. You will get an enormous reward. You will have created something.",
        author: "Kurt Vonnegut, A Man Without a Country",
      },
      {
        text: "After nourishment, shelter and companionship, stories are the thing we need most in the world.",
        author: "Philip Pullman",
      },
      {
        text: "Writing and reading decrease our sense of isolation. They deepen and widen and expand our sense of life: They feed the soul. When writers make us shake our heads with the exactness of their prose and their truths, and even make us laugh about ourselves or life, our buoyancy is restored. We are given a shot at dancing with, or at least clapping along with, the absurdity of life, instead of being squashed by it over and over again. It's like singing on a boat during a terrible storm at sea. You can't stop the raging storm, but singing can change the hearts and spirits of the people who are together on that ship.",
        author: "Anne Lamott, Bird by Bird",
      },
      {
        text: "We tell ourselves stories in order to live.",
        author: "Joan Didion, The White Album",
      },
    ],
  },
  {
    name: "Edge",
    quotes: [
      {
        text: "That was something else I'd thought about as I stood on the Rise overnight after preparing myself for the inevitable. I thought about my future. Who I used to be, who I was becoming, and who I wanted to be. And it was strange how revelations felt like they happened all of a sudden, but in reality, it took many small, almost indiscernible moments over the course of weeks, months, and years.",
        author: "Jennifer L. Armentrout, From Blood and Ash",
      },
      {
        text: "You're not the villain in my story. I am. But I'll be the villain for you. Not to you.",
        author: "Raven Kennedy, Gleam",
      },
      {
        text: "For all his secrecy and fear of being seen, he was touched that we had observed him so closely, and with such love. He loved that we knew him. This is one reason people need to believe in God, because we want someone to know us, truly, all the way through, even the worst of us.",
        author: "Tim Kreider, We Learn Nothing",
      },
      {
        text: "It's beautiful when someone recognizes and appreciates us for who we are, for how we are, without trying to change us, and without any judgment. Unconditional acceptance is the truest form of love.",
        author: "Akiroq Brost",
      },
      {
        text: "We all want to be listened to, to feel we matter. We want to be able to tell the story of our life without being interrupted, or judged, or asked to get to the point.",
        author: "Richard Zimler, The Warsaw Anagrams",
      },
      {
        text: "She was moved. Moved down to her core at something so simple, something so many people in the world took for granted, something she had never experienced for herself before. Being seen.",
        author: "RuNyx, Enigma",
      },
      {
        text: "I squinted at every dappled leaf in the mulberry wood, hoping to see leopard eyes looking back. Imagine how unlikely it is for two creatures of any kind to see each other, through the shadows of the woods, eyes connecting, attention ready. For a moment like that all the universe would have to conspire to move all its pieces and line them up just so.",
        author: "Daniel Nayeri, Everything Sad Is Untrue",
      },
      {
        text: "A woman must continually watch herself. She is almost continually accompanied by her own image of herself. Whilst she is walking across a room or whilst she is weeping at the death of her father, she can scarcely avoid envisaging herself walking or weeping. From earliest childhood she has been taught and persuaded to survey herself continually.",
        author: "John Berger, Ways of Seeing",
      },
      {
        text: "I have said that he has the power to deliver a compliment and make it hurt. So, too, he can say something that ought to be insulting and deliver it in such a way that it feels like being truly seen.",
        author: "Holly Black, The Wicked King",
      },
      {
        text: "How hidden the heart, Nance thought. How frightened we are of being known, and yet how desperately we long for it.",
        author: "Hannah Kent, The Good People",
      },
    ],
  },
  {
    name: "Light",
    quotes: [
      {
        text: "She read books as one would breathe air, to fill up and live.",
        author: "Annie Dillard, The Living",
      },
      {
        text: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
        author: "Charles Dickens",
      },
      {
        text: "So Matilda's strong young mind continued to grow, nurtured by the voices of all those authors who had sent their books out into the world like ships on the sea. These books gave Matilda a hopeful and comforting message: You are not alone.",
        author: "Roald Dahl, Matilda",
      },
      {
        text: "The books transported her into new worlds and introduced her to amazing people who lived exciting lives. She went on olden-day sailing ships with Joseph Conrad. She went to Africa with Ernest Hemingway and to India with Rudyard Kipling. She travelled all over the world while sitting in her little room in an English village.",
        author: "Roald Dahl, Matilda",
      },
      {
        text: "He liked the mere act of reading, the magic of turning scratches on a page into words inside his head.",
        author: "John Green, An Abundance of Katherines",
      },
      {
        text: "I know every book of mine by its smell, and I have but to put my nose between the pages to be reminded of all sorts of things.",
        author: "George Gissing",
      },
      { text: "Without literature, life is hell.", author: "Charles Bukowski" },
      {
        text: "A word after a word after a word is power.",
        author: "Margaret Atwood",
      },
      {
        text: "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
        author: "Carl Sagan",
      },
      {
        text: "Show me a family of readers, and I will show you the people who move the world.",
        author: "Napoleon Bonaparte",
      },
    ],
  },
  {
    name: "Stillness",
    quotes: [
      {
        text: "I can feel infinitely alive curled up on the sofa reading a book.",
        author: "Benedict Cumberbatch",
      },
      {
        text: "Some books leave us free and some books make us free.",
        author: "Ralph Waldo Emerson",
      },
      {
        text: "Books and doors are the same thing. You open them, and you go through into another world.",
        author: "Jeanette Winterson",
      },
      {
        text: "A good book would take me out of myself and then stuff me back in, outsized, now, and uneasy with the fit.",
        author: "David Sedaris",
      },
      {
        text: "Books are, let's face it, better than everything else. If we played Cultural Fantasy Boxing League, and made books go fifteen rounds in the ring against the best that any other art form had to offer, then books would win pretty much every time.",
        author: "Nick Hornby, The Polysyllabic Spree",
      },
      {
        text: "As you read a book word by word and page by page, you participate in its creation, just as a cellist playing a Bach suite participates, note by note, in the creation, the coming-to-be, the existence, of the music. And, as you read and re-read, the book of course participates in the creation of you, your thoughts and feelings, the size and temper of your soul.",
        author: "Ursula K. Le Guin",
      },
      {
        text: "It is really hard to be lonely very long in a world of words. Even if you don't have friends somewhere, you still have language, and it will find you and wrap its little syllables around you and suddenly there will be a story to live in.",
        author: "Naomi Shihab Nye",
      },
      {
        text: "Read a lot. Expect something big, something exalting or deepening from a book. No book is worth reading that isn't worth re-reading.",
        author: "Susan Sontag",
      },
      {
        text: "Have books 'happened' to you? Unless your answer to that question is 'yes,' I'm unsure how to talk to you.",
        author: "Haruki Murakami",
      },
      {
        text: "Once you learn to read, you will be forever free.",
        author: "Frederick Douglass",
      },
    ],
  },
  {
    name: "Worlds",
    quotes: [
      {
        text: "A smile better suits a hero.",
        author: "Haurchefant Greystone, Final Fantasy XIV",
      },
      {
        text: "Remember us. Remember that we once lived.",
        author: "Hades, Final Fantasy XIV",
      },
      {
        text: "I will follow you to the ends of the world, if I must. So long as she lives, I must.",
        author: "Ystride de Caulignont, Final Fantasy XIV",
      },
      {
        text: "The evil in me is no more. Now I may know peace, in the realm yonder.",
        author: "Musosai, Final Fantasy XIV",
      },
      {
        text: "Her happiness was never to be. Not in this world. I wonder, was the fruit as sweet as he remembered?",
        author: "Yotsuyu goe Brutus, Final Fantasy XIV",
      },
      {
        text: "I shall arise as ruler of the world.",
        author: "Iedolas Aldercapt, Final Fantasy XV",
      },
      {
        text: "I will await you in the beyond.",
        author: "Ardyn Izunia, Final Fantasy XV",
      },
      {
        text: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        author: "Toni Morrison",
      },
      {
        text: "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
        author: "Ernest Hemingway",
      },
      {
        text: "We write to taste life twice, in the moment and in retrospect.",
        author: "Anais Nin",
      },
      {
        text: "One day I will find the right words, and they will be simple.",
        author: "Jack Kerouac, The Dharma Bums",
      },
      {
        text: "Don't tell me the moon is shining; show me the glint of light on broken glass.",
        author: "Anton Chekhov",
      },
      { text: "Fiction is the truth inside the lie.", author: "Stephen King" },
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
