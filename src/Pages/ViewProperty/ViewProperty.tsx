import {Divider, Typography} from "@mui/material";
import {useParams} from "react-router";
import {graphql, useLazyLoadQuery} from "react-relay";
import {ViewPropertyQuery} from "./__generated__/ViewPropertyQuery.graphql.ts";
import {House} from "@mui/icons-material";
import {calculateTimeDifference} from "../../Utils/timeHelper.ts";

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
                    propertyAddress {
                        city
                        province
                        streetName
                        streetNumber
                    }
                }
            }
        `, {id: id ?? ''}
    )

    return (
        <>
            <Typography variant={'h1'}>R {data.property.weeklyAmount}</Typography>
            <Typography variant={'body2'}>Per week</Typography>
            <Divider/>
            <House/> <Typography>{data.property.propertyAddress?.city}</Typography>
            <House/> <Typography>{data.property.propertyAddress?.province}</Typography>
            <House/> <Typography>{data.property.propertyAddress?.streetName}</Typography>
            <House/> <Typography>{data.property.propertyAddress?.streetNumber}</Typography>
            <Typography>{data.property.bedroomAmount} bedroom {data.property.propertyType}</Typography>
            <Typography variant={'body2'}> posted {calculateTimeDifference(data.property.createdAt)}</Typography>
        </>
    )
};