import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from "bootstrap";
import Link from 'next/link';

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                
                <main>
                    <div className="container">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
  }