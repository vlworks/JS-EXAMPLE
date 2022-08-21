import { create as newBlogPost } from './blogPost';

const forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://example.com/"
);

forAgainstLet.print();