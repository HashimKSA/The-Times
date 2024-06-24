import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './/About';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Projects from './Projects';
import SignUp from './SignUp';
import Header from './Header';
import Footer from './Footer';
import PrivateRoute from './PrivateRoute';
import OnlyAdminPrivateRoute from '/OnlyAdminPrivateRoute';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import PostPage from './PostPage';
import ScrollToTop from './ScrollToTop';
import Search from './Search';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
