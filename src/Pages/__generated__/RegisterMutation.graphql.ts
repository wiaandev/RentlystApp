/**
 * @generated SignedSource<<9d678da37bdaa2c400c2d5ea5c5283b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UserRegistrationInput = {
  input: UserRegistrationRequestInput;
};
export type UserRegistrationRequestInput = {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};
export type RegisterMutation$variables = {
  input: UserRegistrationInput;
};
export type RegisterMutation$data = {
  readonly userRegistration: {
    readonly user: {
      readonly firstName: string;
      readonly lastName: string;
      readonly normalizedEmail: string | null | undefined;
    } | null | undefined;
  };
};
export type RegisterMutation = {
  response: RegisterMutation$data;
  variables: RegisterMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "normalizedEmail",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserRegistrationPayload",
        "kind": "LinkedField",
        "name": "userRegistration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserRegistrationPayload",
        "kind": "LinkedField",
        "name": "userRegistration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "678f9c22e6d22813fa66a7f41e107da1",
    "id": null,
    "metadata": {},
    "name": "RegisterMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterMutation(\n  $input: UserRegistrationInput!\n) {\n  userRegistration(input: $input) {\n    user {\n      firstName\n      lastName\n      normalizedEmail\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4213d41fb5a7c14c15a459ef3d772abc";

export default node;
