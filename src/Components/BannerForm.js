import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/BannerForm.css';

const BannerForm = () => {
  return (
    <div className="containerm my-4">
      <div className="row align-items-center">
        <div className="col-md-8 mb-4 mb-md-0">
          <img src={`${process.env.PUBLIC_URL}/images/heroimg.jpg`} alt="Banner" className="img-fluid rounded" />
        </div>
        <div className="col-md-4">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email" />
            </div>
            <div className="col-12">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Enter your password" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option defaultValue>Choose...</option>
                <option>California</option>
                <option>New York</option>
                <option>Texas</option>
                <option>Florida</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
