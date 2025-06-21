/**
 * @generated SignedSource<<3bd1b867aef91b7d506bc7506da9c1f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LandingQuery$variables = Record<PropertyKey, never>;
export type LandingQuery$data = {
  readonly me: {
    readonly email: string | null | undefined;
    readonly id: number;
  };
};
export type LandingQuery = {
  response: LandingQuery$data;
  variables: LandingQuery$variables;
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
        "name": "email",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LandingQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LandingQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e78a4b017f52fcc2e859715fad39884e",
    "id": null,
    "metadata": {},
    "name": "LandingQuery",
    "operationKind": "query",
    "text": "query LandingQuery {\n  me {\n    email\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d085c7ac94cbf05f49d701662b80c5d";

export default node;
