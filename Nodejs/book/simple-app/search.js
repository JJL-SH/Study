var request = require('superagent');

module.exports = function search(query, fn) {
  console.log(query);
  request.get('https://www.googleapis.com/customsearch/v1')
    .query({
      key:'AIzaSyDgSxzrTWibUkX6pKi0IEEC6Z0ryPglhwk',
      cx: '017576662512468239146:omuauf_lfve',
      q: query
    })
    .end(function(res){
      console.log(res);
    if (res.items && Array.isArray(res.items)) {
      return fn(null, res.items);
    }
    fn(new Error('Bad twitter response'));
  });
}
