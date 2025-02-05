import PaperChainLayout from "../layouts/paper-chain/PaperChain.layout";
import { Helmet } from "react-helmet-async";
import { useGaPageView } from "../../hooks/useGaPageview.hook";

const PaperChainRoute = () => {
  useGaPageView();

  return (
    <>
      <Helmet>
        <title>Utku's Paper Chain</title>
      </Helmet>
      <PaperChainLayout />
    </>
  );
};

export default PaperChainRoute;
