# Epigraph

**A minimalist, interactive environment for exploring and curating literary quotes.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web APIs](https://img.shields.io/badge/Web_APIs-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API)

**Author:** [Najma Hares Muhumed](https://najma-hares-portfolio.netlify.app/)  
**Project type:** Frontend Application, UI/UX Experiment  
**Current focus:** Vanilla JavaScript, Web APIs, Interface Design

---

## The problem

Most quote collections on the web are static, overwhelming walls of text. They present dozens of quotes at once without hierarchy, making it difficult for the reader to actually absorb the meaning of a single thought.

Furthermore, these sites are often cluttered with ads, generic UI, and minimal interactivity. The experience of reading a profound piece of literature is reduced to mindless scrolling.

Epigraph explores how to build a reading environment that forces focus, encourages reflection, and provides tools for the reader to curate their own collection without relying on heavy JavaScript frameworks.

## What I built

Epigraph is a single-page application that displays over 100 curated quotes across 9 thematic categories.

The application prioritizes one quote at a time using a scroll-driven focus mechanism. It includes a command palette for instant search, a persistent favorites system, and native text-to-speech integration.

The workflow covers the lifecycle of the reading experience:

1. **Focus.** As the user scrolls, the quote in the center of the viewport becomes active, scaling up and illuminating while adjacent quotes fade into the background.
2. **Context.** The ambient background color shifts dynamically based on the active category (e.g., deep red for Power, dusty blue for Truth).
3. **Search.** A keyboard-accessible command palette (`Cmd+K` or `Ctrl+K`) allows the user to instantly search across all quotes and authors.
4. **Curate.** Users can bookmark quotes, which are saved to the browser's local storage and accessible via a dedicated Favorites view.
5. **Listen.** A Read button uses the browser's native SpeechSynthesis API to narrate the active quote.

## How the system works

### 1. Data Structure and Rendering

The quote data is structured as an array of category objects, each containing an array of quote objects (text and author).

The DOM is rendered dynamically on load. A render function iterates through the dataset, injecting the HTML structure for the navigation, the quote blocks, and the action buttons.

### 2. Scroll Focus (IntersectionObserver)

To achieve the focus effect without relying on scroll event listeners (which can cause performance issues), the application uses the `IntersectionObserver` API.

The observer is configured with a negative `rootMargin` (e.g., `-25% 0px -25% 0px`), creating a horizontal "focus zone" in the middle of the screen. When a quote block intersects this zone, it receives an `.active` class, triggering the CSS transitions for opacity, scale, and color.

### 3. Command Palette

The search modal listens for the `keydown` event. If `Cmd+K` or `Ctrl+K` is pressed, it opens the overlay and focuses the input.

As the user types, a `handleSearch` function filters the global quote array based on substring matching. The results are rendered dynamically. Pressing `Escape` or clicking the backdrop closes the modal and clears the query.

### 4. State Persistence (LocalStorage)

The Favorites system does not require a backend. When a user bookmarks a quote, the quote's text is pushed to an array and serialized to JSON.

This array is saved to `localStorage` under the key `epigraph_favs`. On page load, the application reads this key to restore saved quotes and updates the UI accordingly.

## Engineering decisions

- **Zero Frameworks.** Built entirely with Vanilla JavaScript and raw DOM manipulation. This ensures instantaneous load times and zero dependency bloat.
- **CSS for Animation.** All hover states, focus scaling, and color transitions are handled by CSS, keeping the JavaScript focused purely on state and logic.
- **Web Speech API.** Chose the native `SpeechSynthesisUtterance` over third-party text-to-speech services to ensure privacy, zero cost, and offline functionality.
- **Command Palette.** Implemented a keyboard-first search interface to demonstrate advanced focus management and modal accessibility.
- **Component Isolation.** The architecture isolates state (favorites, active category) from the render logic, making it easy to swap the dataset or add features without rewriting the core loop.

## Technology

| Area      | Technology                                                     |
| --------- | -------------------------------------------------------------- |
| Structure | HTML5                                                          |
| Styling   | CSS3 (Grid, Flexbox, Variables)                                |
| Logic     | Vanilla JavaScript (ES6+)                                      |
| APIs      | IntersectionObserver, SpeechSynthesis, Clipboard, LocalStorage |
| Fonts     | Google Fonts (Playfair Display, Inter)                         |

## Project structure

```text
epigraph/
├── index.html
├── styles.css
├── script.js
├── favicon.svg
└── README.md
```

## Running the project

This project does not require a build step or a local server.

1. Clone the repository.
2. Open `index.html` in any modern web browser.

Or, if you prefer a local server:

```bash
npx serve .
```

## Next steps

The next steps are to:

1. Implement text highlighting, allowing users to save specific phrases within a quote.
2. Add a simple backend or Supabase integration to allow users to sync their favorites across devices.
3. Expand the keyboard navigation to allow moving through quotes using the arrow keys without scrolling.
4. Add an ambient audio player using the Web Audio API for background soundscapes (rain, cafe noise) while reading.

## Author

Najma Hares
