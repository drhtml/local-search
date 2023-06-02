import React from 'react'
import mainLogo from '../images/dd-log-10-years.png' 
import StarRating from '../images/star-dd.svg' 
export default function LocationSearch() { 
    // const popover = new bootstrap.Popover('.example-popover', {
    //     container: 'body'
    // })
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
                                <input type="text" className="form-control" id="textEnter" placeholder="Enter your search term" />
                                <label for="textEnter">Enter your search term</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="searchLocation" placeholder="Enter a search location (e.g. Chicago, IL; 90219 CA)" />
                                <label for="searchLocation">Enter a search location (e.g. Chicago, IL; 90219 CA)</label>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-floating">
                                        <select className="form-select" id="SelectCountry">
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
                                        <select className="form-select" id="SelectLanguage">
                                            <option value="0" selected>English</option>
                                            <option value="1">Hindi</option>
                                            <option value="2">Urdu</option>
                                            <option value="3">Arebic</option>
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
                            <button type="submit" className="btn form-submit-btn">Check search results</button>
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
                                    <td>Digital Agency</td>
                                    <td>Delhi</td>
                                    <td>EN</td>
                                    <td>GOOGLE</td>
                                </tr> 
                            </tbody>
                            </table>
                        <h4>Please use the page links below to view your localized search results.</h4>
                        <ul className='pagelist'>
                            <li><a href='#'>Page 1</a></li>
                            <li><a href='#'>Page 2</a></li>
                            <li><a href='#'>Page 3</a></li>
                            <li><a href='#'>Page 4</a></li>
                            <li><a href='#'>Page 5</a></li>
                            <li><a href='#'>Page 6</a></li>
                            <li><a href='#'>Page 7</a></li>
                            <li><a href='#'>Page 8</a></li>
                            <li><a href='#'>Page 9</a></li>
                            <li><a href='#'>Page 10</a></li> 
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
