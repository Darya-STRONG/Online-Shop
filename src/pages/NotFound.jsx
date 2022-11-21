import {Link} from "react-router-dom";
import React from 'react';


const NotFound = () => {
  return (
    <div>
      <p>
        This page not found. Go <Link to href="/">Home</Link>
      </p>
    </div>
  )
};

export default NotFound;