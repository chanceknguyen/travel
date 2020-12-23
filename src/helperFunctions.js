const makeTags = (categories) => {
  const tags = categories.map((tag) => tag.title);
  return tags.join(', ');
};

export {
  makeTags,
};
