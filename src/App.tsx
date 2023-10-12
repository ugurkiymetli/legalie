import { useState } from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(
    localStorage.getItem('legalConfirmation') === 'true'
  );
  const handleConfirmation = () => {
    if (!submitted) {
      setChecked(!checked);
    }
  };

  const handleSubmit = () => {
    if (checked && !submitted) {
      setSubmitted(true);
      localStorage.setItem('legalConfirmation', 'true');
      alert('Submitted');
    }
  };
  const handleReset = () => {
    localStorage.removeItem('legalConfirmation');
    setSubmitted(false);
    setChecked(false);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Legalie</h1>
        <div className={`legal-text ${submitted ? 'disabled-text' : ''}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          corporis dolore corrupti natus vero ab deserunt ratione soluta enim
          ea, architecto minima omnis maiores labore tenetur velit consectetur
          quidem sed! Aliquid necessitatibus fugit consectetur, molestiae earum
          repellendus pariatur culpa temporibus, aliquam rem sequi. Perspiciatis
          quo pariatur, repudiandae maxime et corporis! Voluptatum optio ex
          reiciendis non iusto ad eligendi tempora possimus? Nihil repellat
          blanditiis fugiat laboriosam asperiores, aliquid cumque corporis ab,
          dolores rerum assumenda quidem minus odit eum excepturi modi ipsam,
          cupiditate quia laborum dolore fuga doloribus! Nesciunt cupiditate
          magni repellendus. Molestiae dolores cum ut consequuntur nostrum quae
          voluptas officia iure commodi alias, assumenda porro beatae aut?
          Aliquam voluptate cum quia error eligendi a soluta? Natus debitis
          consequuntur illum impedit commodi? Quas expedita velit vitae
          repudiandae doloribus, quasi animi praesentium exercitationem odit
          fugiat error adipisci a minima voluptate nihil, temporibus alias!
          Atque consectetur temporibus quam sunt suscipit asperiores, sint nam
          delectus. Porro aliquam, exercitationem ex ipsa illo odio vero
          voluptates! Sed molestiae cupiditate quia quos ducimus id earum quasi!
          Repellat voluptatibus aliquam sint odit. Quas facilis iure voluptatum.
          Facilis, fugiat voluptates. Expedita qui atque repellendus obcaecati
          iure culpa dolorum odio, incidunt excepturi commodi architecto,
          nostrum ipsum at velit. Corrupti illum sequi deleniti et facere,
          expedita voluptatibus, aliquam obcaecati reprehenderit incidunt culpa?
          Laborum ratione incidunt iure, nemo maxime eius tenetur odio sint
          necessitatibus odit nihil vel dolores. Corrupti eaque aliquam vero
          quidem consequatur nulla asperiores aspernatur, itaque quae.
          Voluptates modi optio id! Enim, nisi ipsa corporis necessitatibus
          autem fugit qui eos odio accusantium est velit, nobis impedit iusto
          quasi magnam consequatur exercitationem! Quisquam odit aperiam placeat
          aliquid cumque expedita hic odio veniam? Minima quae nostrum ipsum
          illum dolorum provident beatae voluptatibus molestias similique
          placeat laboriosam quam, deleniti iure soluta blanditiis iusto
          quibusdam dignissimos et magnam. Maiores magni est iste iusto mollitia
          natus!
        </div>
        <div
          className={`checkbox-container mt-3 ${
            submitted ? 'disabled-text' : ''
          }`}
        >
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleConfirmation}
            />{' '}
            I confirm that I have read and agreed to the terms.
          </label>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!checked && !submitted}
          className={`btn btn-primary mt-3 ${
            !checked || submitted ? 'disabled' : ''
          }`}
        >
          {!submitted ? 'Confirm' : 'Submitted'}
        </button>
        {submitted ? (
          <button onClick={handleReset} className="btn mt-3 reset-button">
            <i className="fas fa-undo"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
