/**
 * @generated SignedSource<<6bae6752a2e9ba7b22229381b2f051e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PropertyListingsQuery$variables = {
  count?: number | null | undefined;
  cursor?: string | null | undefined;
};
export type PropertyListingsQuery$data = {
  readonly properties: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"PropertyListingsCard_query">;
      };
    }> | null | undefined;
  } | null | undefined;
};
export type PropertyListingsQuery = {
  response: PropertyListingsQuery$data;
  variables: PropertyListingsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PropertyListingsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PropertyPostConnection",
        "kind": "LinkedField",
        "name": "properties",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PropertyPostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PropertyPost",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "PropertyListingsCard_query"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
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
    "name": "PropertyListingsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PropertyPostConnection",
        "kind": "LinkedField",
        "name": "properties",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PropertyPostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PropertyPost",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "propertyType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "parkingAmount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "weeklyAmount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bathroomAmount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bedroomAmount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PropertyExtras",
                    "kind": "LinkedField",
                    "name": "propertyExtras",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
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
                  }
                ],
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
    "cacheID": "d68e112706cec6875ab2858203b21934",
    "id": null,
    "metadata": {},
    "name": "PropertyListingsQuery",
    "operationKind": "query",
    "text": "query PropertyListingsQuery(\n  $count: Int\n  $cursor: String\n) {\n  properties(first: $count, after: $cursor) {\n    edges {\n      node {\n        ...PropertyListingsCard_query\n        id\n      }\n    }\n  }\n}\n\nfragment PropertyListingsCard_query on PropertyPost {\n  id\n  propertyType\n  createdAt\n  parkingAmount\n  weeklyAmount\n  bathroomAmount\n  bedroomAmount\n  propertyExtras {\n    id\n    hasPatio\n    hasGarden\n    petsAllowed\n    hasFlatlet\n    hasPool\n    hasFiber\n  }\n}\n"
  }
};
})();

(node as any).hash = "f6622916e5ff8a992c218cdff9dd476c";

export default node;
