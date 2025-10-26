const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) { //assume that those arguments have right format
      const prop = args[i].slice(2);
      const val = args[i+1];
      res.push(`${prop} is ${val}`);
    }
    //skip all other parameters or values like
    //-a aa -b -d ddd
  }
  const text = res.join(', ');
  console.log(text);
};


parseArgs();
