import Header from 'components/Header';
import NavigationItems from 'components/NavigationItems';
import Hero from 'components/Hero';
import Schedule from 'components/Schedule';
import PageContent from 'components/PageContent';
import Form from 'components/Form';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header>
        <NavigationItems />
      </Header>
      <Hero />
      <Schedule />
      <PageContent>
        <Form />
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
