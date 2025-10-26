const parseEnv = () => {
  const vars = process.env;
  const text = Object
    .entries(vars)
    .filter(entry => entry[0].startsWith('RSS_'))
    .map(entry => `${entry[0]}=${entry[1]}`)
    .join('; ');
  console.log(text);
};

parseEnv();
