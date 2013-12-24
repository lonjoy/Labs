var url = new URL(document.baseURI);

console.dir(url);

// Chrome Canary
/*
 +---------+
 |hash     |
 +---------+
 |host     |
 +---------+
 |hostname |
 +---------+
 |href     |
 +---------+
 |password |
 +---------+
 |pathname |
 +---------+
 |port     |
 +---------+
 |protocol |
 +---------+
 |search   |
 +---------+
 |username |
 +---------+
 */