import {Divider, Typography, Grid2} from '@mui/material';
import {useParams} from 'react-router';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {ViewPropertyQuery} from './__generated__/ViewPropertyQuery.graphql.ts';
import {House, Pin} from '@mui/icons-material';
import {calculateTimeDifference} from '../../Utils/timeHelper.ts';

export const ViewProperty = () => {
  const {id} = useParams<{id: string}>();

  const data = useLazyLoadQuery<ViewPropertyQuery>(
    graphql`
            query ViewPropertyQuery($id: ID!) {
                property(propertyId: $id){
                    propertyType
                    createdAt
                    parkingAmount
                    weeklyAmount
                    bathroomAmount
                    bedroomAmount
                    propertyExtras {
                        id
                        hasPatio
                        hasGarden
                        petsAllowed
                        hasFlatlet
                        hasPool
                        hasFiber
                    }
                    address {
                        id
#                        streetNumber
#                        fullAddress
                    }
                }
            }
        `,
    {id: id ?? ''},
  );

  return (
    <Grid2>
      <Typography variant={"h1"}>
        {data.property.bedroomAmount} bedroom {data.property.propertyType.toLocaleLowerCase()}
      </Typography>
        <Pin/>
        {/*<Typography variant={'body1'}>R {data.property.address.fullAddress}</Typography>*/}
      <Typography variant={'body1'}>R {data.property.weeklyAmount} / week</Typography>
      <Typography variant={'body2'}>Per week</Typography>
      <Divider />
      <Typography variant={'body2'}>
        posted {calculateTimeDifference(data.property.createdAt)}
      </Typography>
    </Grid2>
  );
};
