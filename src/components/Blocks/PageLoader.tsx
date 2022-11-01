import { FC } from "react";
import Layout from "./Layout";
import Loader from "./Loader";

const PageLoader: FC<Props> = ({ withLayout = true }) => {
  if (withLayout) {
    return (
      <Layout title={""}>
        <div className="m-8 flex w-full justify-center">
          <Loader className="!h-10 !w-10" />
        </div>
      </Layout>
    );
  }

  return (
    <div className="m-8 flex w-full justify-center">
      <Loader className="!h-10 !w-10" />
    </div>
  );
};

export default PageLoader;

interface Props {
  withLayout?: boolean;
}
