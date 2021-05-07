import { gql } from "@apollo/client";

export const getMIR = gql`
  query {
    terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u: asset(
      token: "terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u"
    ) {
      prices {
        priceAt(timestamp: 1620287040000)
        oraclePriceAt(timestamp: 1620287040000)
      }
    }
  }
`;
