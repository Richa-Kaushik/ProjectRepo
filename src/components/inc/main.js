import image from "../images/home.jpg";


function Main() {
  return (
    <div className="container-flex mt-4">
      <div className="d-flex justify-content-center">
        <h2 style={{ color: "#579bb1" }} className="text-center  ">
          &nbsp; Learn,{" "}
        </h2>
        <h2 className="text-center">&nbsp; Build,</h2>
        <h2 style={{ color: "#579bb1" }} className="text-center">
          {" "}
          &nbsp; Share,{" "}
        </h2>
        <h2 className="text-center"> &nbsp; Repeat.</h2>
      </div>
      <h6 className="d-flex justify-content-center">
        Invest as little as $100 in the startups and small businesses you
        believe in.
      </h6>
     
      <div className='img-fluid shadow-2-strong'
        style={{ backgroundImage: `url(${image})`, height: 320, width: 1000 }}
      ></div>
    

    
      </div>

      
    
  );
}

export default Main;
