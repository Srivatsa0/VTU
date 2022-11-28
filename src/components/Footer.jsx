import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <h1 align="center">VTU-Visvesvaraya Technological University</h1>
      <hr />
      <div className="footter-bottom">
        <p>© 2020 Visvesvaraya Technological University. All Rights Reserved. All Content in this webport is for the using stakeholder of VTU Only.</p>
        <div className="footer-last">
          <span>Powered by <b id='powered'>Sri vatsa C S</b></span>
          <div className="footer-social-icons">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhVJREFUSEvlVv9N4zAU/l4qcUocRDsBZQNugoMN2IAywR0blAkoE9Cb4NjgygZ0gzBBkbAb1RJ5J4dUpI7tpD10CJ3/i+Pn733vx/dM+KBFH4SLzwcspTw20UrT9GGXqHVmnD8/nxRRdE7AGYC+BZaB+Y56vZs4jrMujrQCG2ZRFF2D+aTLhQxMtdaXg8HgKXQ+CJxLOWKiawfDNh+eVlofhcC9wBXobRuC6z8xX8RpOt2acRleot8epnMGTEGVuSTmPohM3g+r71bQ8pzLq6WUMxB9s/8xcCWEGLtslFLjiDlrY7q2bQArpc4I+GVfXjB/3bV1nOmwN5VSUwLON/aJLpMkmeySb59Ng/FSKdMGBzWDeSJEKRbvuTaAF4tF/8ve3qIOwMBPIcTIWQtKcRdnXLWxAWzUiaPIVPPbCoR5+emBDU2bxT8JdQVsF1eWCHHkyqVJTWOfaMhEG4rnUjJXHzfaKSQcNvBSygmIvtf3V1oPbN1uADsLDEAXAfFIrbMdt5JMAsaxEFfOsHsmGRXFaby/P7NtnMCV5+ZwXUjWthmIMmIuLyuAIQEm18OGQ8z3SZo657h3LPo0u4tgVGceV1of+2Zy+CHwKih3HuYhH+YF8yg0VFqfPnmeD/nlZeoaky5k0/da6x9/9fSpX1xWuxn4taFfHyRgnlGvN3m3x54vnmagtLEK5aI11FsU01ZH/z/gP7xl+R+KtQhTAAAAAElFTkSuQmCC"/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAitJREFUSEvtVu1x00AQfauZ2I5OGewKcAeICjAV4FSAqYCkgpgKgAowFcRUgNMB6SAd2Jrow1Yyt5kVVpBlSXeRZ8if7D9J7/btvt3bFeGZjJ6JFy/E/035g6VeLpf9XqfzmYlGYB4BuCFgtk7T74PBYCWZJEkyXK/Xq/xZ3u0Qi5Nut3u52WxOi6A6GcQha/0bwLACkwXAwBjMget5EtSj7RBHUTQm4BLA3FXq1KR7HIYLEL0z4K7Jcca4vx8en5wscmyZeErARfaRaKG1Pvc870+V4+T2dsSOI9maTOQmzTwq+tohrnJGwLRYr5wljuMzMH81sQIIyqR7NZYXcRRxhbMVA3MpQZqmV1L/KIr+qdPAzsAXpdS0DNnr6iQMJ0z0wyKTm5qm2jlqRZzJp/VrOI6/vRoW/M0QYv507Hmzxoyf0DDWAWnmt1UNun+POx2R8JW152Zg4CrVr4IcUmOb2H65So2tiAUUhqHvEEknfrDxXochrd8Xh0YRVzmrsyYT0r+zt50xX5XHpJF4O4NlYrWudV1T5eS122krt8zWp5MTnbuu+61Jqsa1uN1WE2b2CfhoozkDP5VSExPWTHx0dAEiqbnRbEnF0SNxttB7vTda674D+Az4AKS5Ku9hKYqAmM+qJlRtxxc/ZJNLrpF5x+bHAjDPNnd3U5sfB6uu1lpPSLJm7hcCuQbziolkus2VUrKxWtnB/1ytWMv/XG2dtDn3knEb1VqdeQCVBvAf4B/PEAAAAABJRU5ErkJggg=="/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAk1JREFUSEvFlv9tGjEUx7/PiqgOExEmaDpByQQlE5RMUDaoOkHJBFUmKJ2gdII2EzQbFCYAFBzERfKrHrqLfHe+s49Wwn/e2f687/tpwokWnYiL1uDd4+PIKtVXwFCMtsCDUmqdJMl9GxFR4O12OySijwSMAVzUANYMzJn5rtfrPYSMaASvVquLTqfzhYBJ6CL3PwOzNE0/DQaDdd25WrCoVETfAVy2gTp7F5b5pk69F5xBfza4NdaWtWW+9sErYHHvq07nd6TSJZjnTPTiUmIegeidq3yfpldlt1fAxpgZAR+Ckpjv9s/P0/KFxpgpAZ9LMf+mtS7kSQGcuVjUNi/m+26vN/Jt8oFlHyn1JkmSRX6mAI5Vy8CN1nrugqW+cXbG1tqJrwoYKKgugJ+MkVj1Q4It85WbME/GiBHvA+fWXa0HFcViMSslmRxcXa3LBnPwkLjb2uvk/PzXwfX5AWPMmACp2+A6FuyGyAVXsrHOgn8A32qtp2XF9eCGLC4b1xRvBqrg3XY7YaKvXpXtwDIg3vru8bq6MbnagWsTza2G2HJaEDDLVSRa37qKpGko4ABk4BBDz9p0tX4ZqUc1kGOSq7GB7Ha7S7b2T6iejgE3tkwBxnShtuCy2kI55SqzsSiZ+fo/1fFyn6bD4FgUWDalpLV5+3YLxRvLPIp6COQqM7g0/4rySPDSMo9bPX1KbpcyKkyeCPCPfZpOjnrsufGVbLfWSkuV522/BryR561SauoO/Lo8iXpXu4clBGX3+b6FSrI1OHRh7P+Tgf8CU5E9LpE1+0kAAAAASUVORK5CYII=" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer