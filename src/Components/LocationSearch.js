import React, { useState } from 'react' 
import axios from 'axios';

import mainLogo from '../images/dd-log-10-years.png' 
import StarRating from '../images/star-dd.svg' 
import GoogleGLogo from '../images/Google-Logo.png'

export default function LocationSearch() {  
    const [searchtext, setSearchtext] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const [searchCountry, setsearchCountry] = useState("");
    const [searchLang, setsearchLang] = useState(""); 
    
    function GoogleSearchAPI() {
        //console.log(searchtext); 
        var data = JSON.stringify({
        "location":  `${searchCity}, ${searchCountry}`,
        "q": `${searchtext}`,
        "hl": `${searchLang}`,
        "gl": `${searchCountry}`,
        "gws_rd": "cr",
        "pws": "0"
        });

        var config = {
        method: 'post',
        url: 'https://8as62tzq44.execute-api.ap-south-1.amazonaws.com/Production',
        //withCredentials: false,
        headers: { 
            'Content-Type': 'application/json', 
            //'Access-Control-Allow-Origin': '*'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }
      
  return (
    <>
        <section className='hero-bnr'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="panel-content">
                        <div className="sc-header">
                            <div className="gm-header text-center">
                                <h1>Local SERP Checker</h1>
                            <aside className="sub-heading">
                            Check Google SERPs for any keyword. View localized search results for any country, city or ZIP code on Google and Google Maps.
                            </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='loaction-search-section'>
            <div className='container'>
                <div className='row'>
                    <div className='loaction-search-form'>
                        <form>
                            <div className="form-floating">
                                <input type="text" onChange={(e) => setSearchtext(e.target.value)} value={searchtext} className="form-control" id="textEnter" placeholder="Enter your search term" />
                                <label for="textEnter">Enter your search term</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" onChange={(e) => setSearchCity(e.target.value)} value={searchCity} className="form-control" id="searchLocation" placeholder="Enter a search location (e.g. Chicago, IL; 90219 CA)" />
                                <label for="searchLocation">Enter a search location (e.g. Chicago, IL; 90219 CA)</label>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-floating">
                                        <select className="form-select" id="SelectCountry" onChange={(e) => setsearchCountry(e.target.value)} value={searchCountry}>
                                            <option value="0">India</option>
                                            <option value="1" selected>United State</option>
                                            <option value="2">Country</option>
                                            <option value="3">Country</option>
                                        </select>
                                        <label for="SelectCountry">Country</label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-floating">
                                        <select className="form-select" id="SelectLanguage" onChange={(e) => setsearchLang(e.target.value)} value={searchLang}>
                                            <option value="EN" selected>English</option> 
                                        </select>
                                        <label for="SelectCountry">Language</label>
                                    </div>
                                </div>
                            </div>
                            <h5 className='choose-search-engine'>Choose a Search Engine</h5>
                            <div className='select-search-engine'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="RadioGoogleSearch" id="RadioGoogleSearch" checked />
                                    <label className="form-check-label" for="RadioGoogleSearch">Google Search</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="RadioGoogleSearch" id="RadioGoogleMaps" />
                                    <label className="form-check-label" for="RadioGoogleMaps">Google Maps</label>
                                </div>
                            </div>
                            <button type="button" className="btn form-submit-btn" onClick={GoogleSearchAPI}>Check search results</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className='localized-search'>
            <div className='container'>
                <div className='row'>
                    <div className='col localized-search-inner'>
                        <h2>Here are your Localized search results</h2> 
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Search Term</th>
                                    <th>Location</th>
                                    <th>Language</th>
                                    <th>Search Engine</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{searchtext}</td>
                                    <td>{searchCity}</td>
                                    <td>{searchLang}</td>
                                    <td>GOOGLE</td> 
                                </tr> 
                            </tbody>
                            </table>
                        <h4>Please use the page links below to view your localized search results.</h4>
                        <ul className='pagelist'>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 1</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 2</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 3</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 4</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 5</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 6</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 7</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 8</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 9</a></li>
                            <li><a href='#'><img src={GoogleGLogo} /> Page 10</a></li> 
                        </ul>  
                    </div>
                </div>
            </div>
        </section>
        <section className='review-sestion'>
            <div  className='container'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className='review-card'>
                            <div className='star-rating'> 
                                <div className='star-rating-icon'><img src={StarRating} /></div>
                                <div className='star-rating-icon'><img src={StarRating} /></div>
                                <div className='star-rating-icon'><img src={StarRating} /></div>
                                <div className='star-rating-icon'><img src={StarRating} /></div>
                                <div className='star-rating-icon'><img src={StarRating} /></div>
                            </div>
                            <div className='num-rating'>4.8 / 5</div>
                            <div className='clients-reviews'>from 125+ reviews on Capterra</div>
                            <img src={mainLogo} />
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='ceo-msg'>
                            <h5>"I recommend BrightLocal as a strong tool for anyone who is serious about local search. Having them on your side is like having full-time local SEO staff!"</h5>
                            <span className='name'>Rishi Rais</span>
                            <span className='position'>CTO Dignitas Digital Pvt. Ltd.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
