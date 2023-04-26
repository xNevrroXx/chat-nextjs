import { useFormik } from "formik";
import { useCallback } from "react";
import { useRouter } from "next/router";
// own modules
import { createPath } from "@/utility/createPath";
import { ROUTE } from "@/router/routes";
import Layout from '@/components/layout/Layout';

const Authorization = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            console.log("values: ", values);
        }
    })

    const onClickRegisterBtn = useCallback(() => {
        router.push(createPath({ path: ROUTE.REGISTRATION }));
    }, [router])

    return (
        <Layout meta={{ title: "Authorization", description: "user authorization page" }}>
            
        </Layout>
    );
};

export default Authorization;