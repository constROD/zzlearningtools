import { Home } from 'modules/home';
import { PageLayout } from 'modules/layouts';
import { type NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default HomePage;
