import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ExpandableTopics from "~/topics/ExpandableTopic";
// import ChapterDetailPage from "~/topics/ChapterDetailPage"; // New page for chapter details
import './App.css';
import TopicsPage from "./topics/TopicsPage";
import ChapterDetailPage from "./topics/ChapterDetailPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopicsPage />}>
          {/* This nested route works on large screens */}
          <Route path="chapter/:topicId/:chapterId" element={<ChapterDetailPage />} />
        </Route>
        {/* This route ensures it works on small screens */}
        <Route path="chapter/:topicId/:chapterId" element={<ChapterDetailPage />} />
      </Routes>
    </Router>
  );
}

