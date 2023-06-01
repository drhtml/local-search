import React from 'react'

export default function LocationSearch() {
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
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='loaction-search-form'>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
