import { useParams } from "react-router";
import { graphql, useLazyLoadQuery } from "react-relay";
import { ProfileQuery } from "./__generated__/ProfileQuery.graphql.ts";

export const Profile = () => {
    const { id } = useParams<{ id: string }>();
    const query = graphql`
        query ProfileQuery {
            me {
                user {
                    id
                    propertyPosts {
                        id
                        propertyType
                        propertyExtras {
                            id
                            hasFiber
                        }
                        address {
                            fullAddress
                        }
                    }
                }
            }
        }
    `;

    const data = useLazyLoadQuery<ProfileQuery>(query, {});

    const hasProperties = data.me?.user?.propertyPosts && data.me.user.propertyPosts.length > 0;

    return (
        <div>
            Welcome user {id}.
            This is the profile page.

            <div>Your Properties</div>
            <div>
                {hasProperties ? (
                    data.me.user.propertyPosts.map((u, key) => (
                        <div key={key}>{u.propertyType}</div>
                    ))
                ) : (
                    <div>You have no properties yet.</div>
                )}
            </div>
        </div>
    );
};