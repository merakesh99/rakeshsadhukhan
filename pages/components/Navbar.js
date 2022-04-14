import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand">Rakesh Sadhukhan</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <Link href="https://merakesh99.blogspot.com/"><a className="nav-link" target='_blank'>Blog</a></Link>
        <a className="nav-link disabled">Projects</a>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}
