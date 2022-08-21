import {create as createPub} from './publication';

function printDetails(pub, URL) {
    pub.print();
    console.log(URL);
}

export function create(title, author, pubDate, URL) {
    const pub = createPub(title, author, URL);

    return {
        print() {
            printDetails(pub, URL)
        }
    };
}