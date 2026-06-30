import Parse from 'parse';

export const fetchCommentsByPost = (post) => {
  const query = new Parse.Query('Comment');
  query.equalTo('post', post);
  query.ascending('createdAt');
  return query.find().then(results => results.map(comment => ({
    id: comment.id,
    body: comment.get('body'),
    author: comment.get('author'),
  })));
};