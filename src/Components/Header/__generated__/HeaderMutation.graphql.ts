/**
 * @generated SignedSource<<2c9f0563fe23756dcf2aad29a5740172>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LogoutInput = {
  email: string;
  password: string;
};
export type HeaderMutation$variables = {
  input: LogoutInput;
};
export type HeaderMutation$data = {
  readonly logout: {
    readonly boolean: boolean | null | undefined;
  };
};
export type HeaderMutation = {
  response: HeaderMutation$data;
  variables: HeaderMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "LogoutPayload",
    "kind": "LinkedField",
    "name": "logout",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "boolean",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HeaderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HeaderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "213a8c6b994b4b45c5f0095701941d44",
    "id": null,
    "metadata": {},
    "name": "HeaderMutation",
    "operationKind": "mutation",
    "text": "mutation HeaderMutation(\n  $input: LogoutInput!\n) {\n  logout(input: $input) {\n    boolean\n  }\n}\n"
  }
};
})();

(node as any).hash = "10c1de817d2c4ee80688bcbda12ea595";

export default node;
