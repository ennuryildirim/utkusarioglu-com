import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const LoadingView = () => <div>Loading...</div>;

const AppRouter = () => {
  const LazyHomeRoute = lazy(() => import("../../routes/home.route"));
  const LazyPaperChainRoute = lazy(
    () => import("../../routes/paper-chain.route")
  );

  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={LoadingView}>
          <LazyHomeRoute />
        </Suspense>
      ),
    },
    {
      path: "/paper-chain",
      element: (
        <Suspense fallback={LoadingView}>
          <LazyPaperChainRoute />
        </Suspense>
      ),
    },
  ]);
};

export default AppRouter;