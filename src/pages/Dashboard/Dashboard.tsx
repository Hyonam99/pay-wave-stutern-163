import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import { DashboardHeader, EmptyContent } from "components";
import { pageVariants } from "utils/pageVariant";
import { formatCurrency } from "utils/helpers";
import style from "styles/components/main/Dashboardheader.module.scss"
import { PaginationParams, TransactionHistory } from "interfaces/Types";
import { useGetAllTransactions } from "hooks/business";
import { AuthContext } from "providers/AuthProvider";
import {Pagination, Box} from '@mui/material';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from '@chakra-ui/react'

const Dashboard = () => {

	const { token } = useContext(AuthContext);
    const [paginationParam, setPaginationParam] = useState<PaginationParams>({
        page: 1,
        limit: 5
    });

	const {data, pagination } = useGetAllTransactions(paginationParam, token as string)

	const pageCount = Math.ceil(pagination?.totalItems / paginationParam.limit) ?? 1
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPaginationParam((olddata: PaginationParams) => ({...olddata, page: value}))
	};
	
	return (
		<AuthLayout>

			<motion.div
				className={style.dashboard_page}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<DashboardHeader />
				{!data && <EmptyContent />}
				
				<TableContainer className={style['dashboard-table-container']}>
                    <Table variant='striped' colorScheme='blackAlpha' width="90%" marginX="auto">
                        <Thead>
                            <Tr>
                                <Th>Email</Th>
                                <Th>Amount</Th>
                                <Th>Reference</Th>
                                <Th>Created At</Th>
                                <Th>Type</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((item: TransactionHistory, i: number) => (
                                <Tr key={`blog-item-${i + 1}-${item.id}`}>
                                    <Td>{item.metadata.payerDetails}</Td>
                                    <Td>N {formatCurrency(parseInt(item?.amount as string) / 100)}</Td>
                                    <Td>{item?.reference?.substring(0, 20) + '...'}</Td>
                                    <Td>{new Date(item.createdAt).toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</Td>
                                    <Td>{item.transactionType ?? 'transfer'}</Td>
                                </Tr>
                            ))}

                        </Tbody>
                    </Table>
                </TableContainer>
				
                {pagination?.totalItems > 5 && 
                    <Box>
                        <Pagination count={pageCount} page={paginationParam.page} onChange={handleChange} />
                    </Box>
                }
			</motion.div>
		</AuthLayout>
	);
};

export default Dashboard;
