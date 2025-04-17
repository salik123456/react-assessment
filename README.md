# NY Times Most Popular Articles Viewer 📰

This is a React-based master/detail web app that fetches and displays the most popular articles from the New York Times using their public API. The app showcases clean architecture, object-oriented principles using custom hooks, proper testing (unit + UI), and modern development best practices.

---

## 🏗️ Project Structure


src/
│
├── components/             
│   ├── ArticleList.jsx
│   └── ArticleDetail.jsx
│
├── container/              
│   └── ArticleContainer.jsx
│
├── hooks/                 
│   └── useFetchMostPopArticles.js
│
├── services/              
│   └── api.js
│
├── App.jsx
└── main.jsx


 Key Highlights
✅ React with Vite for fast setup and performance

🎯 Custom Hook (useFetchMostPopArticles) for data fetching logic

🧱 Container/Presentational Pattern for separation of concerns

🧪 Jest + React Testing Library for unit tests

🌐 Cypress for E2E UI testing

📦 Environment variables for API key security

🧹 Linting and Code Formatting via ESLint and Prettier




🧠 Implementation Overview
Data Fetching with Custom Hook
useFetchMostPopArticles handles API calls using fetchMostPopularArticles() from services/api.js.

Utilizes useState and useEffect to manage asynchronous fetching.

Returns articles, loading, and error for flexible rendering.

Component Breakdown
ArticleList: A stateless presentational component that shows article titles in a list.

ArticleDetail: Displays full details of the selected article.

ArticleContainer: Orchestrates state and layout, acts as the "smart" component.

API Integration
Fetches data from:
https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=YOUR_KEY

Uses a period parameter to allow flexibility (1, 7, or 30 days).

API call is abstracted into the services/api.js file for reusability.



This application follows a clean and modular structure based on separation of concerns and component responsibility. Here's a detailed look at each core piece of the implementation:

🔁 Data Fetching – useFetchMostPopArticles (in hooks/)
This is a custom React hook designed to encapsulate the logic of fetching data from the NY Times Most Popular Articles API.

🔧 Responsibilities:
Manages loading, error, and articles state using useState.

Performs a side effect using useEffect to fetch data on mount.

Abstracts the API calling logic and isolates it from the UI components.

Makes use of fetchMostPopularArticles() from the services/api.js file to maintain separation of concerns.

✅ Benefits:
Promotes code reuse across multiple components (if needed).

Keeps components clean and focused on presentation.

Easier to test independently if needed.

🧩 Presentational Components (in components/)
These are stateless and focused solely on rendering data provided via props. They do not contain logic or side effects.

📄 ArticleList.jsx
Purpose: Display a list of article titles in a button format.

Props:
articles: an array of article objects

onSelect: a callback function to select an article

Logic:
Maps over the articles array and renders each title inside a button.

When clicked, the selected article is passed to the parent via onSelect.

📄 ArticleDetail.jsx
Purpose: Show detailed information about a selected article.

Props:
article: the currently selected article object

Rendered Info:
Title

Byline (author)

Abstract (summary)

Link to full article (opens in a new tab)

UX Detail:
Styled with a max width and uses a sticky position to stay visible during scrolling.

🧠 Container Component – ArticleContainer.jsx (in container/)
This is a stateful smart component that connects logic with the UI. It’s responsible for managing the app's data and user interaction.

Responsibilities:
Uses the useFetchMostPopArticles hook to load data.

Maintains a selectedArticle state to track the currently selected article.

Renders:

<ArticleList /> with data and a click handler.

<ArticleDetail /> when an article is selected.

Design Choice:
Container/Presentational pattern ensures clean separation of UI and logic.

Prevents prop-drilling and avoids cluttering presentational components with business logic.

🌐 API Abstraction – fetchMostPopularArticles (in services/api.js)
Purpose:
Encapsulate the API call logic to keep components and hooks clean.

Makes the actual API call using fetch() with dynamic period value.

Notes:
Defaults to period = 1 (most viewed in the past day).

Handles HTTP errors explicitly and throws for the hook to catch.

Returns only data.results, keeping the structure consistent for consumers.

🔁 Data Flow Summary

+-------------------------+
|     ArticleContainer    |
|-------------------------|
| - Fetches data via hook |
| - Holds selected state  |
| - Passes data & events  |
+-------------------------+
       ↓         ↓
+-------------+ +----------------+
| ArticleList | | ArticleDetail  |
|-------------| |----------------|
|   List UI   | |  Detail UI     |
+-------------+ +----------------+
