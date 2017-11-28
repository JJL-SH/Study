var address = [
  '5833 Teagan Meadow',
  '65978 Garland Square',
  '940 Hyatt Ridge',
  '4924 Cooper Glen',
  '97957 Terry Expressway'
]

function getAddress() {
  return address[Math.floor(Math.random()*address.length)];
}

module.exports.getAddress = getAddress;