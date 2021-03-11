const removeNonASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");

console.log(removeNonASCII("äÄçÇéÉêlorem-ipsumöÖÐþúÚ")); // 'lorem-ipsum'
