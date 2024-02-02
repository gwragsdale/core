##Naming Conventions
* ** Legal** naming conventions
 * camelCase
  * for variables, most functions, objects
 * SCREAMING_SNAKE_CASE
  * for constants, "magic numbers", etc
 * PascalCase (aka CamelCase)
  * for constructor functions

* ** Illegal** naming conventions
 * 1stvariable
  * it is **not** legal to start a variable name with a number

* **idiomatic** naming conventions
 * myvariable, My_Variable, etc

##Primitive values vs objects
* primitive values
 1. Numbers
 2. Strings
 3. Boolean
 4. Null
 5. Undefined

* objects
 * most non-primitive values:
  * object literals
  * functions
  * arrays 

##Type coercions
* explicit
 * Number(string) - explicitly coerces a string to a number
 * parseInt(string)
 * String(number) - explicitly coerces a number to a string

* implicit
 * 'string' **+** number (or other operators)
 * comparitive operators
  * <, >, ==, <=, >=, !
   * these implicity coerce differing values (in ways that are difficult to memorize or predict)

##Numbers
* NaN
 * is technically of the Number primitive type
 * identifies a value that has failed to be coerced to a Number type
* Infinity
 * can be Infinity or -Infinity
  * is the return value when dividing a number by 0
