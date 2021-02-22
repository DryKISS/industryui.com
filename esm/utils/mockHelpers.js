/**
 * Components - Utils - Mock helpers
 */
// Lodash
import cloneDeep from 'lodash/cloneDeep';
export var mergeLocalData = function mergeLocalData(array, key) {
  var identifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var local = JSON.parse(window.localStorage.getItem(key));

  if (local) {
    local.forEach(function (i) {
      var existing = array.find(function (o) {
        return o[identifier] === parseInt(i[identifier]);
      });

      if (existing) {
        Object.keys(i).forEach(function (key) {
          existing[key] = i[key];
        });
      } else {
        array.push(i);
      }
    });
  }

  return cloneDeep(array);
};
export var findByKey = function findByKey(array, key, value) {
  return array.find(function (a) {
    return a[key] === value;
  });
};
export var filterByKey = function filterByKey(array, key, value) {
  return array.filter(function (a) {
    return a[key] === value;
  });
};
export var filterByString = function filterByString(array, key, string) {
  return array.filter(function (a) {
    return a[key].toLowerCase().includes(string.toLowerCase());
  });
}; // add associated object to an item

export var getItemAssociation = function getItemAssociation(item, related, key, foreignKey) {
  return related.find(function (r) {
    return r[key] === item[foreignKey];
  });
}; // add associated array to an item

export var getItemAssociations = function getItemAssociations(item, related, key, foreignKey) {
  return related.filter(function (r) {
    return r[key] === item[foreignKey];
  });
}; // add associated array to an array

export var getAssociations = function getAssociations(array, related, association, key, foreignKey) {
  return array.map(function (item) {
    item[association] = related.find(function (r) {
      return r[key] === item[foreignKey];
    });
    return item;
  });
}; // add associated array via pivot array

export var getManyToManyAssociations = function getManyToManyAssociations(item, pivot, related, key, foreignKey) {
  var associatedItems = pivot.filter(function (a) {
    return a[key] === item.id;
  });
  return associatedItems.map(function (a) {
    return related.find(function (r) {
      return r.id === a[foreignKey];
    });
  });
}; // get first item of an array

export var getFirst = function getFirst(array) {
  return array[0];
}; // get last item of an array

export var getLast = function getLast(array) {
  return array[array.length - 1];
};
//# sourceMappingURL=mockHelpers.js.map