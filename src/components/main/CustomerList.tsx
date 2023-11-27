import React, {useContext} from "react";
import { AuthContext } from "providers/AuthProvider";
import { useGetAllCustomers } from "hooks/customer";
import { CustomerInfoType } from "interfaces/Types";
import {EmptyContent, CustomerBar} from "components";

const CustomerList = () => {
	const { token } = useContext(AuthContext);
	const { data, isLoading } = useGetAllCustomers(token as string);

	return (
		<div>
			{(!data && !isLoading) && <EmptyContent />}
			{data?.map((customer: CustomerInfoType, i: number) => {
				return (
					<CustomerBar
						key={i + 1}
                        id={customer.id}
                        email={customer.email}
						client={customer.name}
						creationDate={customer.createdAt}
					/>
				);
			})}
		</div>
	);
};

export default CustomerList;
