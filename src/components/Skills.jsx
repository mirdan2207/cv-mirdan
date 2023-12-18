import React from 'react';

function Skills({
  programmingLanguages,
  frameworks,
  operatingSystems,
  databases,
  technologies,
  algorithmsAndDataStructures,
  languages
}) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className='text-lg'>
        <li>Programming Languages: {programmingLanguages.join(', ')}</li>
        <li>Frameworks: {frameworks.join(', ')}</li>
        <li>Operating Systems: {operatingSystems.join(', ')}</li>
        <li>Databases: {databases.join(', ')}</li>
        <li>Technologies: {technologies.join(', ')}</li>
        <li>Understanding of algorithms and data structures: {algorithmsAndDataStructures ? 'Yes' : 'No'}</li>
        <li>Languages: {languages.join(', ')}</li>
      </ul>
    </div>
  );
}

export default Skills;