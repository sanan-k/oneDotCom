const fs = require("fs/promises");
const path = require("path");

/**
 *
 * @param {string} query
 * @returns
 */
const getQueryVariableOrderedByPosition = (query) => {
  const queryVariableRegx = /[@][A-z]+/g;
  const queryVariables = query.match(queryVariableRegx);
  return queryVariables
    ? queryVariables.map((variable) => variable.trim().replace("@", ""))
    : [];
};

/**
 *
 * @param {string} query
 * @param {string[]} variables
 * @param {string} placeholder
 */
const replaceQueryVariableWithPlaceholder = (
  query,
  variables,
  placeholder = "?"
) => {
  let queryWithPlaceholder = `${query}`;
  variables.forEach((variable) => {
    queryWithPlaceholder = queryWithPlaceholder.replace(
      `@${variable}`,
      placeholder
    );
  });

  return queryWithPlaceholder;
};

/**
 *
 * @param {string} txt
 * @returns
 */
const toCamelCase = (txt) => {
  return txt.slice(0, 1).toLowerCase() + txt.slice(1);
};

const SqlRootFolder = "Query";
const SqlQueryMap = new Map();

/**
 *
 * @param {string} sqlFileName
 */
const importSql = async (sqlFileName) => {
  const queryBuffer = await fs.readFile(
    path.normalize(`${SqlRootFolder}/${sqlFileName}`)
  );
  const query = queryBuffer.toString();

  const variableOrderedByPositionArray =
    getQueryVariableOrderedByPosition(query);
  const queryWithPlaceholder = replaceQueryVariableWithPlaceholder(
    query,
    variableOrderedByPositionArray
  );

  SqlQueryMap.set(sqlFileName, {
    query: queryWithPlaceholder,
    variables: variableOrderedByPositionArray.map(toCamelCase),
  });
};

/**
 *
 * @param {string} sqlFileName
 * @returns
 */
const getQuery = async (sqlFileName) => {
  if (!SqlQueryMap.has(sqlFileName)) {
    await importSql(sqlFileName);
  }

  return SqlQueryMap.get(sqlFileName).query;
};

/**
 *
 * @param {string} sql
 * @param {object} valuesObject
 */
const getQueryValuesArray = (sql, valuesObject) => {
  const variableOrderedByPositionArray = SqlQueryMap.get(sql).variables;
  return variableOrderedByPositionArray.map(
    (variable) => valuesObject[variable]
  );
};

module.exports = {
  getQuery,
  getQueryValuesArray,
};
