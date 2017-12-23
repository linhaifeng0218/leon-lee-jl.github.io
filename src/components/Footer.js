import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/leon1110/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/leon-lee-jl" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.facebook.com/leonlee1110" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/lee.leon1110/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Leon Lee 2018</li><li>Powered By React <a href="https://reactjs.org/"></a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
