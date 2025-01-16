import React from 'react'
import './App.css'

export default function Card(props) {
    
    function download(){
        const link = document.createElement('a');
        link.href = props.hdurl;
        link.download = 'ADOP.jpg';
        link.click();
    }
  return (
    <>
    
    <div className="container">
        <header>
            <h1>Astronomy Picture of the Day</h1>
        </header>
        
        <main>
            <div id="apod-card" className="card">
                <div id="image-container">
                    <img id="apod-image" src={props.src?props.src:'Loading...'} alt="Astronomy Picture" />
                    <button onClick={download}>Download HD</button>
                </div>
                <div id="apod-info" className="card-content">
                    
                    <h2 id="apod-title">{props.title?props.title:'Loading...'}</h2>
                    <p id="apod-description">{props.desc?props.desc:'Loading...'}</p>
                    <p><strong>Date:</strong> <span id="apod-date">{props.date}</span></p>
                </div>
            </div>
        </main>

        <footer>
            <p>&copy; 2025 Astronomy API by NASA | Data sourced from <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA</a></p>
        </footer>
    </div>

    </>
)


}