import './Medication.css';
import Doctor from './../../assets/Doctor.png';
import { useState } from 'react';

const Frame1 = () => {
    const [activeService, setActiveService] = useState('Medication-suggestion'); // Default active service

    return (
        <div className="Medication">
            <div className="Frame1">
                <div className="Headline">
                    <h1>Explore Detailed Medication Insights and Recommendations</h1>
                    <button>Medication</button>
                </div>
                <div className="images">
                    <svg viewBox="47 25 120 140" xmlns="http://www.w3.org/2000/svg" className="Blob">
                        <path fill="#167bb9" d="M38.4,-58.7C51.4,-51.3,64.9,-43.6,73.6,-31.5C82.4,-19.5,86.5,-3.2,84.2,12.1C81.9,27.4,73.3,41.7,61.3,50C49.3,58.2,33.8,60.3,19.9,61.7C5.9,63,-6.5,63.6,-20.9,63.1C-35.4,62.6,-52,61,-61.2,52.1C-70.5,43.1,-72.5,26.9,-76.1,10.1C-79.8,-6.6,-85.1,-24,-78.8,-35.2C-72.5,-46.5,-54.5,-51.7,-39.5,-58.2C-24.4,-64.7,-12.2,-72.5,0.2,-72.8C12.7,-73.2,25.3,-66.2,38.4,-58.7Z" transform="translate(100 100)" />
                    </svg>
                    <img src={Doctor} alt="Doctor" />
                </div>
            </div>
            <div className="Services">
                <h1 className='heading'>Choose the service you want:</h1>
                <div className="service-options">
                    <div
                        className={`Medication-suggestion ${activeService === 'Medication-suggestion' ? 'active' : ''}`}
                        onClick={() => setActiveService('Medication-suggestion')}
                    >
                        <p>Medication Suggestion</p>
                        <hr />
                        <ul>
                            <li>Symptoms checker</li>
                            <li>Medication suggestion</li>
                            <li>Dosage information</li>
                        </ul>
                    </div>
                    <div
                        className={`Medication-tracker ${activeService === 'Medication-tracker' ? 'active' : ''}`}
                        onClick={() => setActiveService('Medication-tracker')}
                    >
                        <p>Medication Tracker</p>
                        <hr />
                        <ul>
                            <li>To do list of medication</li>
                            <li>Timely notification</li>
                        </ul>
                    </div>
                    <div
                        className={`Medication-history ${activeService === 'Medication-history' ? 'active' : ''}`}
                        onClick={() => setActiveService('Medication-history')}
                    >
                        <p>Medication History</p>
                        <hr />
                        <ul>
                            <li>Medication history</li>
                            <li>Reaction avoidance</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Medication-suggestion-section">
                <div className="background"></div>
                <h1>Search Medicines by symptoms</h1>
                <div className="Search-by-symptoms">
                    <input type="text" placeholder='Enter your symptoms'/>
                </div>
            </div>
        </div>
    );
}

export default Frame1;
