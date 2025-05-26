import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from "bootstrap";
import Link from 'next/link';
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownDivider from 'react-bootstrap/DropdownDivider';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <div className="container">
                    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                        <div className="col-md-4 mb-2 mb-md-0">
                            <Link href={`#`} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="bi me-2 bi-bootstrap" width="40" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
                                    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.42 139.42" width="50" className="me-1"><path d="M137.92,102.77c-.47,3.81-9.53,5.44-12.72,6.28-24,4.75-48.69,5.08-73,3-5.65-.72-27.76-2.48-28.16-9.28.31-6.81,22.51-9,28.11-9.78a243.23,243.23,0,0,1,58.64.68c5.16.83,26.57,3.53,27.13,9.1Zm-.3,0c-3.58-11-73-8.31-85.16-6.83-5.31.59-23.71,2.36-26,6.83,1.06,2.78,8.78,4.34,11.63,5.07,23.83,4.62,48.46,4.62,72.61,2.93,5.31-.59,25.81-2.39,26.94-8Z" transform="translate(-7.1 -30.63)" fill="#0c3d1e"/><path d="M24.18,102.77c2.76,10.86,5.49,21.78,9,32.42A46.79,46.79,0,0,0,38,146.49c3.5,5.75,8,11.29,14,14.26,9.79,4.91,20.95,6.5,31.87,6.1s22.36-1.85,32.64-6.16c-9.7,5.93-21.27,8.16-32.49,9.14-11.45.88-23.28-.7-33.54-6.22-6.54-3.45-11.17-9.5-14.67-15.81a49.12,49.12,0,0,1-4.69-12,334.77,334.77,0,0,1-6.95-33Z" transform="translate(-7.1 -30.63)" fill="#0c3d1e"/><path d="M26.62,114.67a11,11,0,0,0-10.85-.38c-5.54,2.95-7,10.4-5,16,1.59,4.95,6.07,8,10.55,10.46A12.05,12.05,0,0,0,27.62,142a7.74,7.74,0,0,0,4.41-4.3l.4,0a6.79,6.79,0,0,1-1.17,4.12c-1.94,3.1-4.88,3.63-8.17,3.27a18.61,18.61,0,0,1-11.33-6.17c-7.33-7.71-6.35-24.05,5.36-26.68a11.35,11.35,0,0,1,9.77,2.15l-.27.3Z" transform="translate(-7.1 -30.63)" fill="#0c3d1e"/><path d="M81.56,111.85l5.92-.08,15.3-12.83s26.35-2,34.72-3.61c9-1.68,35.16-9.49,35.16-9.49s-33.6-6.23-44.85-3.47c-7.1,1.75-26,15.24-26,15.24S117.18,83.2,121,76.75c5.62-9.49-2.7-45.21-2.7-45.21S98.13,48.65,94.78,70.42C93.38,79.57,100.3,97,100.3,97Z" transform="translate(-7.1 -30.63)" fill="#349a46" stroke="#0f6031" strokeMiterlimit="10"/><path d="M101.53,95.4c3.09-3.65,7.39-13.36,8.36-18.37,1.2-6.14.74-17.3.74-17.3" transform="translate(-7.1 -30.63)" fill="#349a46" stroke="#0b5f27" strokeMiterlimit="10"/><text transform="translate(66.35 109.05)" fontSize="36.06" fill="#346734" fontFamily="InformalRoman-Regular, Informal Roman">Tea</text><text transform="translate(74.13 130.06)" fontSize="30.05" fill="#346734" fontFamily="InformalRoman-Regular, Informal Roman">Emporium</text></svg>
                                <span className="fs-4 text-success">Tea Emporium</span>
                            </Link>
                        </div>

                        {/* <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li className="nav-item"><Link href={`#`} className="nav-link active">Home</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link">Products</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link">Carts</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link">FAQs</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link">About</Link></li>
                        </ul> */}

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link href={`#`} className="nav-link text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door d-block mx-auto mb-1" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={`#`} className="nav-link text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-speedometer2 d-block mx-auto mb-1" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
                                        <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/>
                                    </svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={`#`} className="nav-link text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-table d-block mx-auto mb-1" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"/>
                                    </svg>
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link href={`#`} className="nav-link text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-grid d-block mx-auto mb-1" viewBox="0 0 16 16">
                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                                    </svg>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href={`#`} className="nav-link text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle d-block mx-auto mb-1" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                    Customers
                                </Link>
                            </li>
                        </ul>
                        {/* <div className="container-fluid d-grid gap-3 align-items-center"> */}
                            <Dropdown>
                                <DropdownToggle variant="success" className="d-block link-body-emphasis text-decoration-none" aria-expanded="false">
                                    <Image src="/Images/tea/98681.jpeg" alt="mdo" width="32" height="32" className="rounded-circle" />
                                </DropdownToggle>
                                <DropdownMenu className="text-small">
                                    <DropdownItem href={`#`} className="dropdown-item">New project...</DropdownItem>
                                    <DropdownItem href={`#`} className="dropdown-item">Settings</DropdownItem>
                                    <DropdownItem href={`#`} className="dropdown-item">Profile</DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href={`#`} className="dropdown-item">Sign out</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        {/* </div> */}
                        {/* <div className="col-md-3 text-end">
                            <button type="button" className="btn btn-outline-primary me-2">Login</button>
                            <button type="button" className="btn btn-primary">Sign-up</button>
                        </div> */}
                    </header>
                </div>
                <main>
                    {children}
                </main>
                <div className="container">
                    <footer className="py-3 footer fixed-bottom my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><Link href={`#`} className="nav-link px-2 text-body-secondary">Home</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link px-2 text-body-secondary">Features</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link px-2 text-body-secondary">Pricing</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                            <li className="nav-item"><Link href={`#`} className="nav-link px-2 text-body-secondary">About</Link></li>
                        </ul>
                        <p className="text-center text-body-secondary">© 2025 Tea Emporium</p>
                    </footer>
                </div>
            </body>
        </html>
    )
  }