import { slugify, truncateText as trunc } from "rufa-test-lib";
import { formatCurrency } from "rufa-test-middleware";

console.log(formatCurrency(1234.5));
console.log(slugify("Hello World"));
console.log(trunc("some string", 8));
