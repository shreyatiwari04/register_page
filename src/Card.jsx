import React from "react";

function Card() {
  return (
    <div>
       
    <div className="Card">
      <h2>Register here!</h2>
      <div className="Name">
      <input type="text" placeholder="Name" name="name"/><br />
      </div>  
      <div className="PhoneNo">
      <input type="text" placeholder="Phone number" name="phn"/><br />
      </div>
      <div className="Email">
      <input type="email" placeholder="Email" name="email"/><br />
      </div>
      <div className="Password">
      <input type="password" placeholder="Password" name="pwd"/><br />
      </div>
      <div className="Repeat">
      <input type="password" placeholder="Repeat Password" name="reppwd"/><br />
      </div>
      <div className="Age">
      <input type="text" placeholder="Age" name="age"/><br />
      </div>
      <div className="PhoneNo">
      <input type="text" placeholder="Phone number" name="phn"/><br />
      </div>
      <select name="gender" id="gender">
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      <option value="Non-binary">Non-binary</option>
      <option value="Concealed">Prefer not to say</option>
      </select>
      <div className="ts">
      <input type= "checkbox" name="ts" />I agree to the Terms and Condtions. <br />
      </div>
      <button>Submit</button>
      </div>
      </div>
  );
}

export default Card;