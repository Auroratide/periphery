# periphery

**periphery** is a library for generating edge cases for the sake of testing.

> This library is still in development and is not ready for production use!  Until the first official release of v1.0.0, the api may change rapidly in potentially breaking ways.  Furthermore, features and functionality will be added over time.
>
> Feel free to help and contribute, though!

Imagine you are writing an API where your consumers can post JSON data.  Likely this data should conform to some format in order for the API to do something meaningful, but theoretically any arbitrary data can be sent over the wire.  You want your program to be robust in the face of all the possible types of requests.

**periphery** can generate many different scenarios given a schema the data should conform to.  You can then use these scenarios to write tests against your API in order to ensure its robustness.

## Installation

```
npm install --save-dev periphery
```

## Usage

You will notice the syntax for periphery is very similar to [Joi](https://www.npmjs.com/package/joi).  Periphery can be used completely independently of Joi, but Joi users should be familar with how periphery works.

```js
import periphery from 'periphery';

const schema = periphery.object({
  firstname: periphery.string().max(32),
  lastname: periphery.string().max(32)
});

//  Generate a value which passes validation given by the schema
const value = schema.validValue();

//  Generate a list of scenarios
//  Each scenario will fail for one reason
const scenarios = schema.scenarios();
```

## How to use

**periphery** is used by first defining a schema and then generating scenarios.

* **Schema**: A definition for how an object ought to be structured.
* **Scenario**: A particular case where a single rule is violated, thereby theoretically leading to schema invalidation.

Schemas are defined using types and constraints like in [Joi](https://www.npmjs.com/package/joi).  In general, you define the type of a field and then any additional constraints on that field.

```js
const schema = periphery.object({
  apple: periphery.string()
});
```

When you have a schema object, you can get a list of various scenarios:

```js
schema.scenarios();
```

This returns a list of **scenario** objects.  Each scenario has two fields:

```js
{
  name, // human-readable description of the scenario
  data  // an object reflecting the scenario
}
```

You may then use these scenarios at your discretion, for instance in tests.  One scenario for the schema defined above might look like:

```js
{
  name: 'apple is a number',
  data: {
    apple: 1.1
  }
}
```

As you can see, we defined `apple` to be a string, but the scenario tries to make `apple` a number.

## Example

This is a full use case demonstrated.  In this example, we are testing that our API returns a proper 400 response if the consumer attempts to post bad data.  We use mocha as a testing framework.

```js
import { expect } from 'chai';
import axios from 'axios';
import periphery from 'periphery';

describe('API', () => {
  const schema = periphery.object({
    title: periphery.string().min(8).max(32)
  });

  describe('should respond with 400 when given an invalid request body', () => {
    schema.scenarios().forEach(scenario => {
      it(scenario.name, () => {
        return axios.post('/resource', scenario.data).then(() => {
          throw new Error('Expected promise to be rejected, but it was resolved')
        }).catch(err => {
          expect(err.response.status).to.equal(400);  
        });
      });
    });
  });
});
```
