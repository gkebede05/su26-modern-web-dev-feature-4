import Parse from 'parse';

export const fetchAllPosts = () => {
  const query = new Parse.Query('Post');
  query.ascending('createdAt');
  return query.find().then(results => results);
};