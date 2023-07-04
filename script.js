var gridcontainer = document.querySelector("#grid-container")
function getdate() {
  var getfromdate = document.querySelector("#fromdate").value
  var gettodate = document.querySelector("#todate").value
  function iterateDates(getfromdate, gettodate) {
    var currentDate = new Date(getfromdate);
    var endDate = new Date(gettodate);
    while (currentDate <= endDate) {
      console.log(currentDate.toDateString());
      gridcontainer.innerHTML += currentDate.toDateString();

      // Increment the current date by one day
      currentDate.setDate(currentDate.getDate() + 1);
    }

  }
  iterateDates(getfromdate, gettodate);

}
