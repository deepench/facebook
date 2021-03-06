// Birthday Date,Month and Year in Sinuo form

for (i = new Date().getFullYear(); i > 1900; i--) {
  // 2019,2018...1901
  $("#years").append($("<option/>").val(i).html(i));
}

// for month
for (i = 1; i < 13; i++) {
  $("#months").append($("<option/>").val(i).html(i));
}
updateNumberOfDays();

function updateNumberOfDays() {
  $("#days").html("");
  month = $("#months").val();
  year = $("#years").val();
  days = daysInMonth(month, year);
  for (i = 1; i < days + 1; i++) {
    $("#days").append($("<option/>").val(i).html(i));
  }
}

$("#years, #months").on("change", function () {
  updateNumberOfDays();
});

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
