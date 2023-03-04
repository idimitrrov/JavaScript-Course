let re;
// Literal Characters

re = /hello/;
re = /hello/i;

// Meta Characters Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets

re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be an G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur {m - n} amount of times
re = /Hel{2,}o/i; // Must occur atleast {m} amount of times

// Parentheses () - Grouping
re = /([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/i; // Word character - alphanumeric or _
re = /\w+/i; // + = one or more
re = /\W+/i; // Non-word characters
re = /\d/i; // Match any digit
re = /\d+/i; // Match any digit 0 or more times
re = /\D/i; // Non-digit character
re = /\s/i; // Match whitespace character
re = /\S/i; // Match Non-whitespace character
re = /Hell\b/i; // Word boundary

// Aseertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = "Hello, welcome to Hell";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
