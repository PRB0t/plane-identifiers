/**
 * @file Common functions for scripts.
 */

/**
 * Sort an object by key.
 *
 * @param {*} obj Object to sort.
 * @returns Sorted object.
 */
export const sortObj = (obj) => {
  return Object.keys(obj)
    .sort()
    .reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
};
