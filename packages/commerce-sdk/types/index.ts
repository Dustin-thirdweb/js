import { NextApiRequest } from 'next';

export type rewardPointsProps = {
  request: NextApiRequest;
  webhookSecret: string;
  tokenContractAddress: string;
  gaslessRelayerUrl?: string;
  chain: string;
  rewardAmount: number;
};

export interface ShopifyFetchParams {
  query: string;
  variables?: Record<string, unknown>;
}

export interface ShopifyFetchResult {
  status: number;
  body?: any;
  error?: string;
}

export type ResponseBody = {
  data: {
    order: {
      id: string;
      tags: string[];
      lineItems: {
        edges: {
          node: {
            id: string;
            quantity: number;
            variant: {
              id: string;
              price: {
                amount: number;
              };
              product: {
                id: string;
                title: string;
                description: string;
                featuredImage: {
                  id: string;
                  url: string;
                };
              }
            };
            customAttributes: {
              key: string;
              value: string;
            }[];
          };
        }[];
      };
    };
  };
};