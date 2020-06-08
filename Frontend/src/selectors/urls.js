/*
import slugify from 'slugify';

export const getSlugFromString = (string) => {
  const slug = slugify(string, {
    remove: /[*+~.()'"!:@]/g, // regex to remove characters
    lower: true, // result in lower case
  });

  return slug;
};

export const getUrl = (prefix, string) => {
  return `/${prefix}/${getSlugFromString(string)}`;
};

<Link to={getUrl('recipe', title)}>
/
