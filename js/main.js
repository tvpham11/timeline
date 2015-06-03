$.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data){

  var entries = data.timelines;
  entries.forEach(function(entry){
    var dateStr = entry.timestamp;
    var m = moment(new Date(dateStr));
    entry.calendar = m.format('M/DD/YY');
    entry.clock = m.format('HH:mm');
  });
  $('.container').html(template.timeline(data));

});
