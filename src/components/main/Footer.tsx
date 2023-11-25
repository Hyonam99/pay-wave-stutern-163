import React from "react";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { Box } from "@mui/material";
import { CustomButton, InputField } from "components";
import { Link } from "react-router-dom";
import logo from 'assets/images/Logo-short.svg';
import style from "styles/components/main/Footer.module.scss"

const Footer = () => {

    const newsLetterSchema = Yup.object().shape({
        email: Yup.string().required('email address is required').email('invalid email format')
    })

    const formik = useFormik({
        initialValues: { email: '' },
        validateOnBlur: true,
        validationSchema: newsLetterSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <section className={style["footer-container"]}>
            <section className={style["footer_text-content"]}>
                <article>
                    <h1>Stay Informed !</h1>
                    <p>Subscribe to our newsletter for the latest updates on business news
                    </p>
                </article>
            </section>
            <section className={style["footer_form"]}>
                <form onSubmit={formik.handleSubmit}>
                    <Box className={style["subscribe_form-wrapper"]}>
                        <InputField
                            id="email"
                            label="Email Address"
                            type='email'
                            variant="filled"
                            size='small'
                            margin='none'
                            onChange={formik.handleChange}
                            error={formik.errors.email !== undefined && (formik.touched.email === true)}
                            helperText={(formik.errors.email !== undefined && (formik.touched.email === true)) ? formik.errors.email : ""}
                            className={style["subscribe-input"]}
                        />
                        <CustomButton title="Subscribe" type='submit' color="primary" size="large"/>
                    </Box>
                </form>
            </section>
            <section className={style["footer_signature"]}>
                <Box>
                    <img src={logo} alt='pay-wave-logo' className={style['footer_logo-short']}/>
                </Box>
                <p> <MdLocationPin size={20}/> Stutern-163, Ikeja, Lagos</p>
                <div className={style["footer_media"]}>
                    <span className={style["footer_social-media_icons"]}>
                        <Link to="https://twitter.com/Fx_Factor?t=nFu0rZmr2YhaQVRTT5tz8Q&s=09" target="_blank">
                            <RiTwitterXFill />
                        </Link>
                    </span>
                    <span className={style["footer_social-media_icons"]}>
                        <Link to="https://www.facebook.com/profile.php?id=61552635560767&mibextid=ZbWKwL" target="_blank">
                            <FaFacebook />
                        </Link>
                    </span>
                </div>
            </section>
            <div className={style["footer-copyright"]}><p>copy right 2023 pay wave</p></div>
        </section>
    )
};

export default Footer;
