import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="container my-5">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">Customer Service Representative</h3>
          <p className="card-text"><strong>Walmart Canada</strong> 08/2022 – Present, Halifax, NS</p>
          <ul>
            <li>Demonstrated a strong understanding of financial transactions, efficiently managing customer transactions with precise attention to detail.</li>
            <li>Resolved over 95% of customer queries at the point of sale, enhancing the shopping experience and ensuring customer satisfaction.</li>
            <li>By enhancing the shopping experience and providing high-level customer service, we aim to ensure customer satisfaction.</li>
          </ul>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">Cashier</h3>
          <p className="card-text"><strong>Bombay Spices</strong> 08/2023 – Present, Halifax, NS</p>
          <ul>
            <li>Ensured accuracy in financial exchanges and receipt processing, assisted customers in locating products, and provided recommendations based on preferences and dietary needs.</li>
            <li>Ensured availability of popular items and promotional products. Collaborated with team members to maintain a clean and organized store environment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
