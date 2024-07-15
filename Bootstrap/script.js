function calculateDateInterval() {
    var fromDate = new Date(document.getElementById("from").value);
    var toDate = new Date(document.getElementById("to").value);
  
    var years = toDate.getFullYear() - fromDate.getFullYear();
    var months = (toDate.getMonth() - fromDate.getMonth()) + (years * 12);
    var weeks = Math.round((toDate - fromDate) / (1000 * 60 * 60 * 24 * 7));
    var days = Math.round((toDate - fromDate) / (1000 * 60 * 60 * 24));
  
    var result = "Date interval between " +
                  fromDate.toLocaleDateString() + " and " +
                  toDate.toLocaleDateString() + "<br><br>" +
                  "In years : " + years + "<br>" +
                  "In months : " + months + "<br>" +
                  "In weeks : " + weeks + "<br>" +
                  "In days : " + days;
  
    document.getElementById("result").innerHTML = result;
  }