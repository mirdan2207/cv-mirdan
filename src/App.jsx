import React from 'react';
import ContactInformation from './components/ContactInformation';
import Objective from './components/Objective';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import AdditionalInformation from './components/AdditionalInformation';

function App() {
  return (
    <div className="container mx-auto px-64 mt-8">
      <h1 className="text-3xl font-bold mb-4">MIRONENKO DANIIL</h1>

      <ContactInformation
        telegram="https://t.me/anonymous22072005"
        email="mirdan2207@gmail.com"
        github="https://github.com/mirdan2207"
      />

      <Objective title="Trainee developer" />

      <Summary>
        I am an attractive, smiling and efficient person with a great sense of humor, passionate about solving non-trivial
        problems and especially about obtaining non-trivial results. I am a member of the student council of my faculty,
        so I have good communication skills and the ability to work in a team. I continue my education in the field of
        mathematics, I am interested in mathematics and programming.
      </Summary>

      <Skills
        programmingLanguages={['Go', 'C++', 'Python', 'JS']}
        frameworks={['React']}
        operatingSystems={['Linux', 'Windows']}
        databases={['MySQL', 'MongoDB']}
        technologies={['HTML', 'CSS', 'Bash']}
        algorithmsAndDataStructures={true}
        languages={['English (B1)', 'Belarusian', 'Russian']}
      />

      <Education
        school="Golang United School Epam"
        schoolPeriod="April-August 2022"
        university="Belarusian State University, MMF"
        universityPeriod="September 2022 – July 2026"
        specialization="Mathematics and Information technologies (mathematical and software of mobile devices)"
      />

      <AdditionalInformation militaryStatus="Liable" />
    </div>
  );
}

export default App;