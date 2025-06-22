import {Typography} from '@mui/material';
import {graphql, useLazyLoadQuery} from 'react-relay';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import {PropertyListingsQuery} from './__generated__/PropertyListingsQuery.graphql.ts';
import {PropertyListingsCard} from '../../Components/PropertyListingsCard/PropertyListingsCard.tsx';

dayjs.extend(relativeTime);

export const PropertyListings = () => {
  const propertiesQuery = graphql`
            query PropertyListingsQuery($count: Int, $cursor: String){
                properties(first: $count, after: $cursor) {
                    edges {
                        node {
                            
                    ...PropertyListingsCard_query
                        }
                    }
                }
            }`;

  const queryRef = useLazyLoadQuery<PropertyListingsQuery>(propertiesQuery, {
    count: 10,
  }, {fetchPolicy: 'network-only'});

  return (
    <>
      <Typography variant='h1'>
        Property Listings
      </Typography>
      {/*<Typography>{consolidatedProperties}</Typography>*/}
      {queryRef
        && queryRef.properties?.edges?.map(({node}, index) => (
          // The added `return` statement ensures JSX is returned.
          <PropertyListingsCard propertyListingsCardRef={node} key={index} />
        ))}
    </>
  );
};
