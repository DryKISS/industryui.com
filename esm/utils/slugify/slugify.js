/**
 * Components - Utils - Slugify
 *
 * Normalization Form Compatibility Decomposition
 * Replace spaces replacer
 * Remove all non-word chars
 * Replace multiple spaces with replacer
 * Replace the replacer in the last occurence
 */
export var slugify = function slugify(string) {
  var replacer = '-';
  var slug = string.toString().toLowerCase().trim().normalize('NFKD').replace(/\s+/g, replacer).replace(/[^\w-]+/g, '').replace(/--+/g, replacer).replace(new RegExp(replacer + '$'), '');
  return slug;
};
//# sourceMappingURL=slugify.js.map