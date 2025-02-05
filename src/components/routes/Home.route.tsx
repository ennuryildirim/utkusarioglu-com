import HomeLayout from "../layouts/home/Home.layout";
import { Helmet } from "react-helmet-async";
import { useGaPageView } from "../../hooks/useGaPageview.hook";

const HomeRoute = () => {
  useGaPageView();

  return (
    <>
      <Helmet>
        <title>Utku Sarioglu</title>
      </Helmet>
      <HomeLayout />
    </>
  );
};

export default HomeRoute;
