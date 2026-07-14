import { formatCurrency, slugify, truncateText as trunc } from "rufa-test-lib";

console.log(formatCurrency(1234.5));
console.log(slugify("Hello World"));
console.log(trunc("some string", 8));
