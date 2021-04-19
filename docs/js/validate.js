function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let isValid=true;
  let warnlat=document.querySelector(".required[data-bind='lat']");
  let warnlong=document.querySelector(".required[data-bind='long']");
  
  let isNumeric=(s)=>{
    return !isNaN(s) && !isNaN(parseFloat(s))
  }
  console.log('TODO - validate the longitude, latitude values before submitting');
  let longitude=parseFloat(document.getElementById("long").value);
  let latitude=parseFloat(document.getElementById("lat").value);

  if(!isNumeric(latitude) || latitude <-90 || latitude > 90 ){
    warnlat.style.color="#f00"; 
    warnlat.innerHTML="* Must be a valid Latitude (-90 to 90)";
    isValid = false;
  }
  else {
    warnlat.style.color = "#000"
    warnlat.innerHTML = "*";
  }
  if(!isNumeric(longitude) || longitude <-180 || longitude > 180 ){
    warnlong.style.color="#f00";
    warnlong.innerHTML="* Must be a valid Longitude (-180 to 180)";
    isValid = false;
  }
  else {
    warnlong.style.color = "#000"
    warnlong.innerHTML = "*";
}
return isValid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
