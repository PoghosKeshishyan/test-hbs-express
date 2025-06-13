module.exports = function(currentPath, linkPath) {
  if (linkPath === '/') {
    return currentPath === '/' ? 'active' : '';
  }
  return currentPath.startsWith(linkPath) ? 'active' : '';
};
