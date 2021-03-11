const noASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
noASCII("äÄçÇéÉêlorem-ipsumöÖÐþúÚ"); // 'lorem-ipsum'
