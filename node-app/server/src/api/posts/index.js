import * as Posts from './posts';


const posts = new Router();

posts.get('/', Posts.list);
posts.get('/', Posts.write);
posts.get('/:id', Posts.read);
posts.get('/:id', Posts.remove);
posts.get('/:id', Posts.update);


export default posts;

