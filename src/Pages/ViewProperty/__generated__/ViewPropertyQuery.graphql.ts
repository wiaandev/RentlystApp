/**
 * @generated SignedSource<<4c4fe743d76574ee4da70863a762e66f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RentType = "APARTMENT" | "DUPLEX" | "FLAT" | "HOUSE" | "PLOT" | "TOWNHOUSE" | "%future added value";
export type ViewPropertyQuery$variables = {
  id: string;
};
export type ViewPropertyQuery$data = {
  readonly propertyById: {
    readonly address: {
      readonly fullAddress: string;
      readonly id: string;
      readonly streetNumber: string;
    };
    readonly bathroomAmount: number;
    readonly bedroomAmount: number;
    readonly createdAt: any;
    readonly parkingAmount: number;
    readonly propertyExtras: {
      readonly hasFiber: boolean;
      readonly hasFlatlet: boolean;
      readonly hasGarden: boolean;
      readonly hasPatio: boolean;
      readonly hasPool: boolean;
      readonly id: string;
      readonly petsAllowed: boolean;
    } | null | undefined;
    readonly propertyType: RentType;
    readonly weeklyAmount: number;
  };
};
export type ViewPropertyQuery = {
  response: ViewPropertyQuery$data;
  variables: ViewPropertyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "propertyId",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "propertyType",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "parkingAmount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weeklyAmount",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bathroomAmount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bedroomAmount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "PropertyExtras",
  "kind": "LinkedField",
  "name": "propertyExtras",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPatio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasGarden",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "petsAllowed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasFlatlet",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPool",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasFiber",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Address",
  "kind": "LinkedField",
  "name": "address",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "streetNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullAddress",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewPropertyQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PropertyPost",
        "kind": "LinkedField",
        "name": "propertyById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ViewPropertyQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PropertyPost",
        "kind": "LinkedField",
        "name": "propertyById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "73dcc3daa87048cac7e65f95c1ee2bb8",
    "id": null,
    "metadata": {},
    "name": "ViewPropertyQuery",
    "operationKind": "query",
    "text": "query ViewPropertyQuery(\n  $id: ID!\n) {\n  propertyById(propertyId: $id) {\n    propertyType\n    createdAt\n    parkingAmount\n    weeklyAmount\n    bathroomAmount\n    bedroomAmount\n    propertyExtras {\n      id\n      hasPatio\n      hasGarden\n      petsAllowed\n      hasFlatlet\n      hasPool\n      hasFiber\n    }\n    address {\n      id\n      streetNumber\n      fullAddress\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d4c09c9d1588fab5b30a4439bf04ec4e";

export default node;
