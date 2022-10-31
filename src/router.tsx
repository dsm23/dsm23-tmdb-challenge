import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Error from "./routes/error";
import Home from "./routes/home";
import Root from "./routes/root";
import Search from "./routes/search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/login" element={null} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Route>
  )
);

export default router;
