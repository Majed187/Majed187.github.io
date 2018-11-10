import React from "react";

const CV = () => {
  return (
    <div className="">
      <p className=" m-5 h3 text-center">
        If you are intresting to know more about me you can download my Cv
      </p>
      <div className="container d-flex mt-5 mb-5">
        <button type="button" className=" m-auto btn   btn-dark">
          <a className="text-light" href="../Cv/newCv.pdf" download="newCv.pdf">
            DOWNLOAD CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default CV;
