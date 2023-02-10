import BlogTile from "./BlogTile";
import FeatureSection from "./FeatureSection";
import FeatureTile from "./FeatureTile";
export function App2() {
  const blogPosts = [
    {blogTitle: 'THis is the first title', blogDescription: 'THis is first descp'},
    {blogTitle: 'THis is the second title', blogDescription: 'THis is secoond descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
    {blogTitle: 'THis is the third title', blogDescription: 'THis is third descp'},
  ]
  
  return (
    <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="faq.html">FAQ</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a className="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                    <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                    <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">A Bootstrap 5 template for modern businesses</h1>
                                <p className="lead fw-normal text-white-50 mb-4">This is my project</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                    </div>
                </div>
            </header>
            <FeatureSection />
            <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                    <div className="fw-bold">
                                        Tom Ato
                                        <span className="fw-bold text-primary mx-1">/</span>
                                        CEO, Pomodoro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">From our blog</h2>
                                <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        {
                          blogPosts.map((blogObj)=>{
                            return(
                              <BlogTile blogObj/>
                            )
                          })
                        }
                    </div>
                    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div className="mb-4 mb-xl-0">
                                <div className="fs-3 fw-bold text-white">New products, delivered to you.</div>
                                <div className="text-white-50">Sign up for our newsletter for the latest updates.</div>
                            </div>
                            <div className="ms-xl-4">
                                <div className="input-group mb-2">
                                    <input className="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                                    <button className="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
                                </div>
                                <div className="small text-white-50">We care about privacy, and will never share your data.</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
                    <div className="col-auto">
                        <a className="link-light small" href="#!">Privacy</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Terms</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
        
    </div>
  );
}

/* named export, default export */

/* 
  our application can only have 1 default export 
  named export can be many 
  
*/

/* 
  bootstrap? 
*/