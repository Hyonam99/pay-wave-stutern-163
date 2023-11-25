import React from 'react';
import { DashboardCard } from 'components';
import { Box } from '@mui/material'
import style from "styles/components/main/Dashboardheader.module.scss"

const DashboardHeader = () => {

    const sampleTransactions = Array(5).fill({amt: 500, title: "some-title"})

    return (
        <section className={style['container']}>
            <article className={style['cards-container']}>
                <Box className={style["container_wrapper"]}>
                    {sampleTransactions?.slice(0, 4).map((item, i) => (
                        <DashboardCard key={`trx-key-0-${i + 1}`}/>
                    ))}
                </Box>
            </article>
        </section>
    )
};

export default DashboardHeader;
