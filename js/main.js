console.log('This is cool!');

$('.container').html(template.example({
  value: 'Hello, World!!'
}));

$.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data){
  console.log('data', data);
});
