import React from 'react'
import '../Stylesheets/Semantic.css'

const Semantic_Elements = () => {
  return (
    <>
      <h2>SEMANTIC ELEMENTS</h2>
      <div className='semantic-container'>
        <header>  Header </header>
        <nav><a href='nav'>NAV BAR</a></nav>
        <div className='flexing'>
          <aside>ASIDE</aside>
          <main>Main
            <div className='main-content'>
              <article> article </article>
              <div className='article-content'>
                <figure>figure</figure>
                <p>Para</p>

              </div>
            </div>
            <section>Section</section>
          </main>
        </div>
        <footer> footer </footer>
      </div>
    </>
  )
}

export default Semantic_Elements