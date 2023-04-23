import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/home";
import PostsPage from "../pages/posts-page";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import Footer from "../components/footer";

const Routage = () => {
  return (
    <main className="mx-auto h-full w-full">
      <SkeletonTheme baseColor="#69758A" highlightColor="#FFF">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<HomePage />} />
            <Route path="/users/:userId/posts" element={<PostsPage />} />
          </Routes>
          <Footer />
        </Router>
      </SkeletonTheme>
    </main>
  );
};

export default Routage;
