import ContentSection from './ContentSection.jsx';
import ServiceSection from './ServiceSection.jsx';

export default function MainContent() {
  return (
    <main>
      <section className='content'>
        <div className='container'>
          <ContentSection />
        </div>
      </section>
      
      <section className='service'>
        <div className='container'>
          <ServiceSection />
        </div>
      </section>

    </main>
  );
}


