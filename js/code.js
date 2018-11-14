$( document ).ready(function() {
let one = 'http://harringtonsatfourteen.co.uk/images/slider/harring1.jpg';
let two = 'http://harringtonsatfourteen.co.uk/images/slider/homeroom.jpg';
let three = 'http://harringtonsatfourteen.co.uk/images/slider/homeview.jpg';
$( "#one" ).click(function() {
  $('#big').attr('src',one)
});
$( "#two" ).click(function() {
  $('#big').attr('src',two)
});
$( "#three" ).click(function() {
  $('#big').attr('src',three)
});
console.log('hello');
});