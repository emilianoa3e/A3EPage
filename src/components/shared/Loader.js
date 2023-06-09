import React from 'react'
import { FallingLines } from 'react-loader-spinner';
function Loader() {
    return (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "400px" }}
        >
          <div>
            <FallingLines
              color="#4fa94d"
              width="150"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        </div>
      );
}

export default Loader