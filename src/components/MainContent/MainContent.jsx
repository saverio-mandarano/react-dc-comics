import ContentSection from './ContentSection/ContentSection.jsx';
import ServiceSection from './ServiceSection.jsx';
import Jumbotron from './Jumbotron.jsx';

export default function MainContent() {
  return (
    <main>
      <Jumbotron />
      <ContentSection />
      <ServiceSection />
    </main>
  );
}


