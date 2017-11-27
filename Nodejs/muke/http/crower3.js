var http = require('http');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/'
var videoIds = [348,259,197,134,75];

function filterChapters(html) {
  var $ = cheerio.load(html);
  var chapters = $('.chapter');
  var courseData = {};

  courseData = {
    title : $('.course-infos .hd .l').text().trim(),
    number : $('.js-learn-num').text(),
    videos : []
  }

  chapters.each(function (item) {
    var chapter = $(this);
    var chapterTitle = chapter.find('strong').text().trim().replace(/\s/ig, '');
    var videos = chapter.find('.video').children('li');
    var chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    };

    videos.each(function (item) {
      var video = $(this).find('.J-media-item')
      var videoTitle = video.text().trim().replace(/\s/ig, '');
      var id = video.attr('href').split('/')[1];

      chapterData.videos.push({
        title: videoTitle,
        id: id
      })
    })
    courseData.videos.push(chapterData);
  })
  return courseData;
}
function printCourseInfo(coursesData) {
  coursesData.forEach(function (courseData) {
    console.log(courseData.number + ' 人学过 '+ courseData.title);
    courseData.videos.forEach(function(item){
      console.log('### ' + item.chapterTitle);
      item.videos.forEach(function (video) {
        console.log('【' +video.id+ '】'+video.title);
      })
    })
  })
}
function getPageAsync(url) {
  return new Promise(function(resolve, reject){
    http.get(url, function (res) {
      var html = '';

      res.on('data', function (data) {
        html += data;
      })
      res.on('end', function () {
        resolve(html)
      })
    }).on('error', function (error) {
      reject(error)
      console.log('获取课程数据出错');
    })
  })
}
var fetchCourseArray = [];
videoIds.forEach(function(id){
  fetchCourseArray.push(getPageAsync(baseUrl + id));
})
Promise.all(fetchCourseArray).then(function(pages){
  var coursesData = [];
  pages.forEach(function(html){
    var courses = filterChapters(html);
    coursesData.push(courses);
  })
  coursesData.sort(function(a, b){
    return a.number < b.number;
  })
  printCourseInfo(coursesData)
})