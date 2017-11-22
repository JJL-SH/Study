function route(handle, pathname, res, req) {
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](res, req);
  } else {
    return '404 Not found';
  }
}

exports.route = route;