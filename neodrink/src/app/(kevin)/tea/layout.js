import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from "bootstrap";
import Link from 'next/link';

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link href={`#`} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi me-2 bi-bootstrap" width="40" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
                            <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
                        </svg>
                        <span className="fs-4">Simple header</span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link href={`#`} className="nav-link active">Home</Link></li>
                        <li className="nav-item"><Link href={`#`} className="nav-link">Features</Link></li>
                        <li className="nav-item"><Link href={`#`} className="nav-link">Pricing</Link></li>
                        <li className="nav-item"><Link href={`#`} className="nav-link">FAQs</Link></li>
                        <li className="nav-item"><Link href={`#`} className="nav-link">About</Link></li>
                    </ul>
                    </header>
                </div>
                <main>
                    <div className="container">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
  }