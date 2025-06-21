/**
 * @generated SignedSource<<77c5cd0d8036c9727b612f54265f7388>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AuthContextQuery$variables = Record<PropertyKey, never>;
export type AuthContextQuery$data = {
  readonly me: {
    readonly email: string | null | undefined;
    readonly id: string;
  } | null | undefined;
};
export type AuthContextQuery = {
  response: AuthContextQuery$data;
  variables: AuthContextQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthContextQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthContextQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "43af5e391d61d0f913562039ac5e1084",
    "id": null,
    "metadata": {},
    "name": "AuthContextQuery",
    "operationKind": "query",
    "text": "query AuthContextQuery {\n  me {\n    id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "37a32a4ad1e4c20cf39ed71f6dd0009c";

export default node;
